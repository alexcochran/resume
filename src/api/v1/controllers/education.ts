import type { Request, Response } from 'express';
import data from '../../../../resume.json';

export const getEducation = async (req: Request, res: Response) => {
  // #swagger.operationId = "getEducation"
  // #swagger.tags = ["Education"]
  // #swagger.summary = "Retrieve Alex's education information."

  res.json(data.education);
};
