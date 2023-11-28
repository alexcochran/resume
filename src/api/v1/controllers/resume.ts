import type { Request, Response } from 'express';
import data from '../../../../resume.json';

export const getResume = async (req: Request, res: Response) => {
  // #swagger.operationId = "getResume"
  // #swagger.tags = ["Resume"]
  // #swagger.summary = "Retrieve Alex's entire JSON Resume."

  res.json(data);
};
