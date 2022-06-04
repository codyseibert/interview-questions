import type { NextApiRequest, NextApiResponse } from 'next'

import Question from '../../../api-lib/models/Question';
import connectToDb from '../../../api-lib/db';
import nc from 'next-connect';
import { ncOptions } from '../../../api-lib/ncOptions';

const post = async (
  req: NextApiRequest,
  res: NextApiResponse) => {
  await connectToDb();

  // TODO: do validation here

  const question = new Question({
    prompt: req.body.prompt,
    answer: req.body.answer,
    createdAt: new Date(),
  });

  await question.save();

  res.status(200).json(question);
};

export default nc(ncOptions).post(post);