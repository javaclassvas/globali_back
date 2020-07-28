import { Module } from '@nestjs/common';
import { HospitalController } from './hospitalController';
import { HospitalService } from './hospitals.service';


@Module({
  imports: [],
  controllers: [HospitalController],
  providers: [HospitalService],
})
export class HospitalsModule {}