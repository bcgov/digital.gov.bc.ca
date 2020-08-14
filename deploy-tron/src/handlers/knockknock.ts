import axios from 'axios';
import { Context } from 'probot';

export const knockknock = async (context: Context): Promise<any> => {
  try {
    const res = await axios.get('https://icanhazdadjoke.com', {
      headers: { Accept: 'application/json' },
    });

    const params = context.issue({ body: res.data.joke });
    return context.github.issues.createComment(params);
  } catch (e) {
    return;
  }
};
