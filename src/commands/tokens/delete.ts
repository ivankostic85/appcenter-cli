// tokens delete command

import {
  CommandArgs,
  CommandResult,
  help,
  success,
  failure,
  ErrorCodes,
  position,
  required,
  name,
  AppCommand,
  shortName,
  longName,
  hasArg,
  defaultValue,
} from "../../util/commandline";
import { out, prompt } from "../../util/interaction";
import { AppCenterClient, clientRequest } from "../../util/apis";
import { DefaultApp } from "../../util/profile";
import { PrincipalType, validatePrincipalType as validateTokenPrincipal } from "../../util/misc/principal-type";

@help("Delete an API token")
export default class TokenDeleteCommand extends AppCommand {
  constructor(args: CommandArgs) {
    super(args);
  }

  @help("ID of the API token")
  @name("token")
  @required
  @position(0)
  id: string;

  @help("The type of token: [ user, app ]. An app must be specified for app type tokens")
  @shortName("t")
  @longName("type")
  @hasArg
  @defaultValue("user")
  principalType: PrincipalType;

  async run(client: AppCenterClient): Promise<CommandResult> {
    validateTokenPrincipal(this.principalType);
    const tokenMessaging = `Deleting ${this.principalType} API token ...`;
    const confirmation = await prompt.confirm(`Do you really want to delete the ${this.principalType} API token with ID "${this.id}"`);

    if (!confirmation) {
      out.text(`Deletion of ${this.principalType} API token with ID "${this.id}" canceled`);
      return success();
    }

    let deleteTokenResponse;
    if (this.principalType === PrincipalType.USER) {
      deleteTokenResponse = await out.progress(
        tokenMessaging,
        clientRequest<null>((cb) => client.userApiTokens.deleteMethod(this.id, cb))
      );
    } else if (this.principalType === PrincipalType.APP) {
      const app: DefaultApp = this.app;
      deleteTokenResponse = await out.progress(
        tokenMessaging,
        clientRequest<null>((cb) => client.appApiTokens.deleteMethod(app.ownerName, app.appName, this.id, cb))
      );
    }

    const statusCode = deleteTokenResponse.response.statusCode;
    if (statusCode >= 400) {
      switch (statusCode) {
        case 400:
        default:
          return failure(ErrorCodes.Exception, "invalid request");
        case 401:
          return failure(ErrorCodes.InvalidParameter, "authorization to create an API token failed");
        case 404:
          return failure(ErrorCodes.NotLoggedIn, `the ${this.principalType} API token with ID "${this.id}" could not be found`);
      }
    }
    return success();
  }
}
