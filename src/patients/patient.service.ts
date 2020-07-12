import { Body, Injectable } from '@nestjs/common';
import { db } from '../firebase/firebase-client';
import { IPatient } from '../models/patient.interface';

@Injectable()
export class PatientService {

  async findAll() {
    let patients: IPatient[] = [];
    const snapshot = await db.collection('patients').get();
    snapshot.docs.map(doc => {
      patients.push({
        firstName: doc.get('firstName'),
        lastName: doc.get('lastName'),
        email: doc.get('email'),
        phone: doc.get('phone'),
        country: doc.get('country'),
        disease: doc.get('disease'),
        docLink: doc.get('docLink'),
      });
    });
    console.log('Array of patients', patients);
    return patients;
  }

  async addPatient() {
    let patient = {
      firstName: "firstName 3",
      lastName: "lastName 3",
      email: "email@mail.com",
      phone: "0555555553",
      country: "brazil3",
      disease: "disease3",
      docLink: "http://link.com3",
    };
    // await db.collection(`patients`).doc('222').set(patient)
    await db.collection(`patients`).add(patient)
  }

  async testAddPatient(data) {
    console.log(data.firstName);

    let patient = {
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      phone: data.phone,
      country: data.country,
      disease: data.disease,
      docLink: data.docLink,
    };

    await db.collection(`patients`).add(patient);

    let tokenResponse = {
      'token': '1234567',
      'id': 777,
      'username': 'new user'
    };

    return tokenResponse;
  }








}