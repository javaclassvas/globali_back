import { Body, Controller, Get, Post } from '@nestjs/common';
import { PatientService } from './patient.service';


@Controller()
export class PatientController {
  constructor(private readonly patientService: PatientService) {
  }

  @Get('/patients')
  findAllItems() {
    return this.patientService.findAll();
  }

  @Get('/patients/test')
  addNewPatient(){
    return this.patientService.testAddPatient();
  }

  @Post('/patients/add')
  testAddPatient(@Body() data){
    return this.patientService.addPatient(data)
  }

}