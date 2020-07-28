import { Body, Controller, Put } from '@nestjs/common';
import { HospitalService } from './hospitals.service';


@Controller()
export class HospitalController {
  constructor(private readonly hospitalService: HospitalService) {
  }

  @Put('/api/users')
  loginUser(@Body() data) {
    return this.hospitalService.login(data);
  }



}