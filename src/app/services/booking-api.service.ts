import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookingApiService {

  BookingData = 'https://clstorageapp.blob.core.windows.net/assignment/booking.json';
  constructor(private http:HttpClient) { }
  Bookingdata() {
    return this.http.get<any>(this.BookingData);
  }
}
