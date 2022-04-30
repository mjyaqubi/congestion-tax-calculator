import { Injectable, Logger } from '@nestjs/common';
// import { Request, Response } from 'express';
// import { v4 as uuid } from 'uuid';
// import * as httpContext from 'express-http-context';

/**
 * Color codes
 *
 * Reset = "\x1b[0m"
 * Bright = "\x1b[1m"
 * Dim = "\x1b[2m"
 * Underscore = "\x1b[4m"
 * Blink = "\x1b[5m"
 * Reverse = "\x1b[7m"
 * Hidden = "\x1b[8m"
 *
 * FgBlack = "\x1b[30m"
 * FgRed = "\x1b[31m"
 * FgGreen = "\x1b[32m"
 * FgYellow = "\x1b[33m"
 * FgBlue = "\x1b[34m"
 * FgMagenta = "\x1b[35m"
 * FgCyan = "\x1b[36m"
 * FgWhite = "\x1b[37m"
 *
 * BgBlack = "\x1b[40m"
 * BgRed = "\x1b[41m"
 * BgGreen = "\x1b[42m"
 * BgYellow = "\x1b[43m"
 * BgBlue = "\x1b[44m"
 * BgMagenta = "\x1b[45m"
 * BgCyan = "\x1b[46m"
 * BgWhite = "\x1b[47m"
 */

@Injectable()
export class LoggerService extends Logger {
  //   setRequestId(req: Request) {
  //     const correlationId = uuid();
  //     req['requestId'] = correlationId;
  //     httpContext.set('correlationId', correlationId);
  //   }
  //   safeParseJSON(payload: string): any {
  //     try {
  //       return JSON.parse(payload);
  //     } catch (e) {
  //       return payload;
  //     }
  //   }
  //   public httpRequestLog(req: Request, res: Response) {
  //     const requestLog = {
  //       timestamp: new Date().toISOString(),
  //       requestId: req['requestId'],
  //       clientIP: req.headers['x-forwarded-for'] || req.connection.remoteAddress,
  //       method: req.method,
  //       originalUri: req.originalUrl,
  //       uri: req.url,
  //       referer: req.headers.referer || '',
  //       userAgent: req.headers['user-agent'],
  //       message: `HTTP Request - ${req['requestId']}`,
  //       request: {
  //         body: this.safeParseJSON({ ...req.body }),
  //         headers: req.headers,
  //       },
  //     };
  //     this.log(requestLog, 'Request');
  //   }
  //   public httpResponseLog(req: any, res: any, next: any) {
  //     const rawResponse = res.write;
  //     const rawResponseEnd = res.end;
  //     const chunks: any[] = [];
  //     res.write = (...restArgs: any[]) => {
  //       chunks.push(new Buffer(restArgs[0]));
  //       rawResponse.apply(res, restArgs);
  //     };
  //     res.end = (...restArgs: any[]) => {
  //       if (restArgs[0]) {
  //         chunks.push(new Buffer(restArgs[0]));
  //       }
  //       const body = Buffer.concat(chunks).toString('utf8');
  //       const responseLog = {
  //         timestamp: new Date().toISOString(),
  //         requestId: req['requestId'],
  //         statusCode: res.statusCode,
  //         clientIP:
  //           req.headers['x-forwarded-for'] || req.connection.remoteAddress,
  //         method: req.method,
  //         originalUri: req.originalUrl,
  //         uri: req.url,
  //         referer: req.headers.referer || '',
  //         userAgent: req.headers['user-agent'],
  //         message: `HTTP Response - ${req['requestId']}`,
  //         request: {
  //           body: req.body,
  //           headers: req.headers,
  //         },
  //         response: {
  //           body: this.safeParseJSON(body),
  //           headers: res.getHeaders(),
  //         },
  //       };
  //       this.log(responseLog, 'Response');
  //       rawResponseEnd.apply(res, restArgs);
  //     };
  //   }
}
