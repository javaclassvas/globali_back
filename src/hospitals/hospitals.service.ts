import { Injectable } from '@nestjs/common';


@Injectable()
export class HospitalService {

  async login(data){
    console.log('[r][HospitalService] incoming data: ', data);
    if(data.nickname == 'rambam' || data.password == 'qwe123'){
      return {id: 777, nickname: "SUPERUSER"}
    }
    return null;
  }
}