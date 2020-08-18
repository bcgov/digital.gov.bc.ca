import axios from 'axios';
import { Context } from 'probot';
import { createComment } from '../utils/ghutils';

export const knockknock = async (context: Context): Promise<any> => {
  try {
    const res = await axios.get('https://icanhazdadjoke.com', {
      headers: { Accept: 'application/json' },
    });

    return createComment(context, res.data.joke )
  } catch (e) {
    return;
  }
};
