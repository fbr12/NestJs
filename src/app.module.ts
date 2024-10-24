import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MoviesController } from './controllers/movies/movies.controller';
import { GendersController } from './controllers/genders/genders.controller';


@Module({
  imports: [],
  controllers: [AppController, MoviesController, GendersController],
  providers: [AppService],
})
export class AppModule {}
