import { Injectable } from '@nestjs/common';
import { Item } from './models/item.interface';
import { db } from './firebase/firebase-client';

@Injectable()
export class AppService {

  // this method will returns all data from collection
  async findAll() {
    let items: Item[] = [];
    const snapshot = await db.collection('items').get();
    snapshot.docs.map(doc => {
      items.push({
        Name: doc.get('Name'),
        ID: doc.get('ID'),
      });
    });
    console.log('ARRAY', items);
    return items;
  }

}
