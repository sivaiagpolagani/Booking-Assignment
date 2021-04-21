import { Component, OnInit } from '@angular/core';
import { BookingApiService } from '../services/booking-api.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
  BookingDatA = [];
  constructor(private apiService:BookingApiService) { }

  ngOnInit(): void {
     this.bookingCall();
  }

    bookingCall() {
      this.apiService.Bookingdata().subscribe(data => {
        this.BookingDatA = data;
        console.log("data",data);
      },
      error => {
        console.log("error",error);
      })
    }
}
