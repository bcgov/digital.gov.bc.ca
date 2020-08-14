// eslint-disable-next-line
import { Context } from 'probot';

import { isCommenterAllowedToAction, isCommentFromPr } from './utils/ghutils';
import {  getCommandFromComment, isCommandValid } from './utils/stringutils';
import { COMMANDS } from './constants';
import { deploy } from './handlers/deploy';
import { knockknock } from './handlers/knockknock';

export const handlePrComment = async (context: Context): Promise<void> => {
  const commentBody = context.payload.comment.body;
  const commenterCanAction = await isCommenterAllowedToAction(context);
  const isFromPR = isCommentFromPr(context);
  const command = getCommandFromComment(commentBody);
  const commandIsValid = isCommandValid(command);

  if(!context.isBot && commenterCanAction && isFromPR && commandIsValid) {
    switch(command) {
      case COMMANDS.help: console.log('HELP');
        return;
      case COMMANDS.deploy: deploy(context);
        return;
      case COMMANDS.knockknock: knockknock(context);
        return;
    }
  }
}