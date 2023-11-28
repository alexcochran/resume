import type { Request, Response } from 'express';
import data from '../../../../resume.json';

export const getWork = async (req: Request, res: Response) => {
  // #swagger.operationId = "getWork"
  // #swagger.tags = ["Work"]
  // #swagger.summary = "Retrieve Alex's listed work history."

  res.json(data.work);
};
