import { Request, Response } from 'express';
import path from 'path';

export const downloadHtml = async (req: Request, res: Response) => {
  /*
    #swagger.operationId = "downloadHtmlFile"
    #swagger.tags = ["Downloads"]
    #swagger.summary = "Download the copy of Alex's JSON Resume on this server as an HTML file."304
    #swagger.responses[200] = {
      description: "Successful file download.",
      content: {
          "application/json": {
              schema:{
                  $ref: "#/components/schemas/basicsSchema"
              }
          }
        }
      }
*/

  const file = path.resolve(
    __dirname,
    '../../../../public/' + (process.env.FILENAME ? process.env.FILENAME : 'jsonresume.html')
  );

  if (file !== undefined) {
    return res.download(file);
  } else {
    return res.sendStatus(404).json({ message: 'File not found.' });
  }
};
