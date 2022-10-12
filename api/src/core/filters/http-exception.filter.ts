import { ArgumentsHost, Catch, ExceptionFilter, HttpException, HttpStatus } from '@nestjs/common';
import { Response } from 'express';

@Catch()
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: unknown, host: ArgumentsHost) {
    const isHttpException = exception instanceof HttpException;
    const context = host.switchToHttp();
    const response = context.getResponse<Response>();
    const request = context.getRequest<Request>();

    let status = HttpStatus.INTERNAL_SERVER_ERROR;
    let name = 'Internal Server Error';
    let error = 'An unknown error just happened';
    let messages = exception;
    let stack = null;

    if (isHttpException) {
      const exceptionResponse = exception.getResponse();
      status = exception.getStatus();
      name = exception.name;
      error = exceptionResponse['error'];
      messages = exceptionResponse['message'];
      stack = exception.stack;
    }

    response.status(status).json({
      status,
      name,
      error,
      messages,
      path: request.url,
      timestamp: new Date().toISOString(),
      ...(stack && { stack }),
    });
  }
}
