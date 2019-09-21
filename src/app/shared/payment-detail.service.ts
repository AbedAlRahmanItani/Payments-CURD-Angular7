import { Injectable } from '@angular/core';
import { PaymentDetail } from './payment-detail.model';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class PaymentDetailService {
  formData: PaymentDetail;
  readonly rootURL = 'http://localhost:63879/api';
  list: PaymentDetail[];

  constructor(private http: HttpClient) { }

  postPaymentDetail() {
    return this.http.post(this.rootURL + '/PaymentDetail', this.formData);
  }

  putPaymentDetail() {
    return this.http.put(this.rootURL + '/PaymentDetail/' + this.formData.Id, this.formData);
  }

  refreshList() {
    this.http.get(this.rootURL + '/PaymentDetail')
      .toPromise()
      .then(res => this.list = res as PaymentDetail[]);
  }

  deletePaymentDetail(id) {
    return this.http.delete(this.rootURL + '/PaymentDetail/' + id);
  }
}
