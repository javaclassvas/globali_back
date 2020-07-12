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

  @Get('/patients/add')
  addNewPatient(){
    return this.patientService.addPatient();
  }

  @Post('/patients/test')
  testAddPatient(@Body() data){
    return this.patientService.testAddPatient(data)
  }

}