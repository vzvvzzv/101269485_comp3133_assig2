import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { GET_BOOKINGS } from 'src/app/graphql/graphql.queries';   

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {

  bookings: any[] = [];

  constructor(private apollo: Apollo) { 
    this.getBook();
  }

  ngOnInit(): void {
      this.getBook();
  }

  getBook(){
    this.apollo.watchQuery<any>({
      query: GET_BOOKINGS,
    }).valueChanges
    .subscribe((res) => {
      this.bookings = res.data.getBookings
      console.log(this.bookings)
    })
  }
}
