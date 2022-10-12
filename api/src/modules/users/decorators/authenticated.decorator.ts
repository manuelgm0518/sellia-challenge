import { applyDecorators, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiUnauthorizedResponse } from '@nestjs/swagger';
import { JwtAuthGuard } from '../guards';

export function Authenticated(): MethodDecorator {
  return applyDecorators(ApiBearerAuth(), UseGuards(JwtAuthGuard), ApiUnauthorizedResponse());
}
