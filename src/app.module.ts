import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PatientController } from './patients/patient.controller';
import { PatientService } from './patients/patient.service';
import { HospitalService } from './hospitals/hospitals.service';
import { HospitalController } from './hospitals/hospitalController';

@Module({
  imports: [],
  controllers: [AppController, PatientController, HospitalController],
  providers: [AppService, PatientService, HospitalService],
})
export class AppModule {}
