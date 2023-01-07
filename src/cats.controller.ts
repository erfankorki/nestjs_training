import { Controller, Get, HttpCode, Param, Body, Res } from '@nestjs/common';
import { Request, Response } from 'express';

@Controller('cats')
export class CatsController {
  @Get(':id/:name')
  @HttpCode(201)
  findAll(
    @Body() body: { name: string },
    @Res() response: Response,
    @Param('id') id: number,
    @Param('name') name,
  ): Response {
    return response.status(200).json({ id: id, name: name });
  }
}
