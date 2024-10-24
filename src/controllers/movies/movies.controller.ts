import { Controller, Get, Query, Param } from '@nestjs/common';

@Controller('movies')
export class MoviesController {
    @Get()
    getMovies(
        @Query('limit') limit = 100, 
        @Query('offset') offset = 0, 
        @Query('gender') gender:string
    ) {
    return `movies limit=>${limit} offset=>${offset} gender=>${gender}`;
    }
    
    @Get('papota')
    papota(){
        return 'papota'
    }

    @Get('/papota/:movieId')
    getMovie(@Param('movieId') movieId:string){
        return `movie ${movieId}`
    }


}
