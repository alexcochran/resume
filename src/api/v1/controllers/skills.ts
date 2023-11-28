import type { Request, Response } from 'express';
import data from '../../../../resume.json';

export const getSkills = async (req: Request, res: Response) => {
  // #swagger.operationId = "getSkills"
  // #swagger.tags = ["Skills"]
  // #swagger.summary = "Retrieve Alex's listed skills."

  res.json(data.skills);
};
