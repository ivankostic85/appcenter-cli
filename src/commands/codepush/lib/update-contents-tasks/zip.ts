import * as fs from "fs";
import * as pfs from "../../../../util/misc/promisfied-fs";
import * as path from "path";
import * as JsZip from "jszip";
import * as yazl from "yazl";
import { generateRandomFilename, normalizePath, isDirectory } from "../file-utils";

interface ReleaseFile {
  sourceLocation: string; // The current location of the file on disk
  targetLocation: string; // The desired location of the file within the zip
}

export default function zip(updateContentsPath: string): Promise<string> {
  return new Promise<string>(async (resolve, reject) => {
    let releaseFiles: ReleaseFile[] = [];

    if (!isDirectory(updateContentsPath)) {
      releaseFiles.push({
        sourceLocation: updateContentsPath,
        targetLocation: normalizePath(changeTmpFolderName(path.basename(updateContentsPath))) // Put the file in the root
      });
    }

    const directoryPath: string = updateContentsPath;
    const baseDirectoryPath = path.join(directoryPath, ".."); // For legacy reasons, put the root directory in the zip

    let files: string[] = await pfs.walk(updateContentsPath);

    files.forEach((filePath: string) => {
      let relativePath: string = path.relative(baseDirectoryPath, filePath);
      releaseFiles.push({
        sourceLocation: filePath,
        targetLocation: normalizePath(changeTmpFolderName(relativePath))
      });
    });

    var packagePath: string = path.join(process.cwd(), generateRandomFilename(15) + ".zip");
    var zipFile = new yazl.ZipFile();
    var writeStream: fs.WriteStream = fs.createWriteStream(packagePath);

    zipFile.outputStream.pipe(writeStream)
        .on("error", (error: Error): void => {
            reject(error);
        })
        .on("close", (): void => {

            resolve(packagePath);
        });

    releaseFiles.forEach((releaseFile: ReleaseFile) => {
        zipFile.addFile(releaseFile.sourceLocation, releaseFile.targetLocation);
    });

    zipFile.end();
  });
}

// we have to change tmp forlder name to make update contents file structure 
// to be compatibale with client SDKs
function changeTmpFolderName(relativePath: string) {
  const tempFolderName = path.dirname(relativePath).split(path.sep)[0];
  return relativePath.replace(tempFolderName, "CodePush");
}