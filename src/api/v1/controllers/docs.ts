import { Request, Response } from 'express';
import path from 'path';

export const getDocsHtml = async (req: Request, res: Response) => {
  res
    .set(
      'Content-Security-Policy',
      "default-src *; style-src 'self' http://* 'unsafe-inline'; script-src 'self' http://* 'unsafe-inline' 'unsafe-eval'"
    )
    .sendFile(path.resolve(__dirname, '../../../../../public/rapidoc.html'));
};

export const getOpenApiSpec = async (req: Request, res: Response) => {
  res.sendFile(path.resolve(__dirname, '../../../../../public/openapi-spec.json'));
};
