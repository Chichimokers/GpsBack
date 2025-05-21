import { Body, Controller, Get, Inject, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { Repository } from 'typeorm';
import { GPSEntity } from './enitites/gps.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Controller()
export class AppController {
  constructor(   
  @InjectRepository(GPSEntity)
  public gpsrepostory : Repository<GPSEntity>,
    private readonly appService: AppService,

  ) {}
  @Get("getgps")
  async getCoordenada(){
    return this.gpsrepostory.find();
  }
 
 @Post("sendGPS")
 async PutCoordenates(@Body() body : GPS){
  console.log(body)
  this.gpsrepostory.insert({
    latitude:body.Latitude,
    longitude:body.Longitude,
    Devicename:body.DeviceName.toString(),
  })

 }
}
