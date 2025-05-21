import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostgresDataSource } from 'typeorm.config';
import { GPSEntity } from './enitites/gps.entity';

@Module({
  
  imports: [    
  
     TypeOrmModule.forRoot(PostgresDataSource.options),
     TypeOrmModule.forFeature([GPSEntity])
     ,],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
 