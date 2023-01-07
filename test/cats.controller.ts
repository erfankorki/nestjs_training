import { Controller, Get, HttpStatus, Param, Body, Res } from '@nestjs/common';
import { Request, Response } from 'express';

@Controller('cats')
export class CatsController {
  @Get(':id/:name')
  findAll(
    @Body() body: { name: string },
    @Res({ passthrough: true }) response: Response,
    @Param('id') id: number,
    @Param('name') name,
  ): Response {
    return response
      .status(HttpStatus.CREATED)
      .json({ data: `${id} ${name}`, name: body.name });
  }
}
