import { Controller, Get, Query } from '@nestjs/common';
import { PlacesService } from './places.service';
import { text } from 'stream/consumers';

@Controller('places')
export class PlacesController {
  constructor(private placeService: PlacesService){}

  @Get()
  findPlace(@Query('text') text: string){
    return this.placeService.findPlace(text);
  }
}
