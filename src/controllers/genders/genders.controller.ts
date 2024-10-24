import { Controller, Get, Param } from '@nestjs/common';

@Controller('genders')
export class GendersController {
  @Get(':id/movies/:movieId')
  getGender(@Param('movieId') movieId:string, @Param('id') id:string){
    return `movie ${movieId} and ${id}`
  }
}
