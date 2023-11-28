import type { Request, Response } from 'express';
import data from '../../../../resume.json';

export const getBasics = async (req: Request, res: Response) => {
  /*
    #swagger.operationId = "getBasicInfo"
    #swagger.tags = ["Basics"]
    #swagger.summary = "Retrieve Alex's basic identifying information."
    #swagger.responses[200] = {
      description: "Successful request.",
      content: {
          "application/json": {
              schema:{
                  $ref: "#/components/schemas/basicsSchema"
              }
          }
        }
      }
    }
  */

  res.json(data.basics);
};

export const getProfiles = async (req: Request, res: Response) => {
  // #swagger.operationId = "getOnlineProfiles"
  // #swagger.tags = ["Basics"]
  // #swagger.summary = "Get the Alex's online profiles."

  res.json(data.basics.profiles);
};
