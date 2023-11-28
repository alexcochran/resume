import type { Request, Response } from 'express';
import data from '../../../../resume.json';

export const getInterests = async (req: Request, res: Response) => {
  // #swagger.operationId = "getInterests"
  // #swagger.tags = ["Interests"]
  // #swagger.summary = "Retrieve Alex's listed interests."

  res.json(data.interests);
};
