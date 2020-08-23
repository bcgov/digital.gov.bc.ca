// eslint-disable-next-line
import { Context } from 'probot';

import { isCommenterAllowedToAction, isCommentFromPr } from './utils/ghutils';
import { getCommandFromComment, isCommandValid } from './utils/stringutils';
import { COMMANDS, ULTRA_SECRET_COMMANDS } from './constants';
import { deploy } from './handlers/deploy';
import { knockknock } from './handlers/knockknock';
import { help, configuration } from './handlers/help';
import { architecture } from './handlers/architecture';
import { welcomeMessage } from './utils/messages';


// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const handlePrOpened = async (context: Context): Promise<any> => {

  return welcomeMessage(context);
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const handlePrComment = async (context: Context): Promise<any> => {
  const commentBody = context.payload.comment.body;
  const commenterCanAction = await isCommenterAllowedToAction(context);
  const isFromPR = isCommentFromPr(context);
  const command = getCommandFromComment(commentBody);
  const commandIsValid = isCommandValid(command);
  

  if (!context.isBot && commenterCanAction && isFromPR && commandIsValid) {
    switch (command) {
      case COMMANDS.help:
        return help(context);
      case COMMANDS.deploy:
        return deploy(context);
      case COMMANDS.architecture:
        return architecture(context);
      case COMMANDS.configuration:
          return configuration(context);
      case ULTRA_SECRET_COMMANDS.knockknock:
        return knockknock(context);
    }
  }
};
