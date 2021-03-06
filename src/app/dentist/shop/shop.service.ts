import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Product } from 'src/app/shared/model/product';
import { Lab } from 'src/app/shared/model/lab';
import { Order } from 'src/app/shared/model/order';

@Injectable({
  providedIn: 'root'
})
export class ShopService {
  private productsCollection: AngularFirestoreCollection<Product>;
  private labDocument: AngularFirestoreDocument<Lab>;

  constructor(private firestore: AngularFirestore) {}

  GetAllProducts(): Observable<any> {
    this.productsCollection = this.firestore.collection<Product>('Products');
    return this.productsCollection.valueChanges({ idField: 'ProductId' });
  }

  GetAllProductsByLabId(labId: string): Observable<any> {
    this.labDocument = this.firestore.doc<Lab>('Labs/' + labId);
    this.productsCollection = this.labDocument.collection<Product>('Products');
    return this.productsCollection.valueChanges({ idField: 'ProductId' });
  }

  CreateOrder(order: Order) {
    console.log('Create Order invoked');
    this.firestore
      .collection('Orders')
      .add(order)
      .then(x => {})
      .catch(err => {});
  }

  GetOrderByDentist(dentistId: string): Observable<Order[]> {
    return this.firestore
      .collection<Order>('Orders', ref =>
        ref.where('DentistId', '==', dentistId)
      )
      .valueChanges({ idField: 'OrderId' });
  }
}
