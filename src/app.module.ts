import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PatientController } from './patients/patient.controller';
import { PatientService } from './patients/patient.service';

@Module({
  imports: [],
  controllers: [AppController, PatientController],
  providers: [AppService, PatientService],
})
export class AppModule {}
