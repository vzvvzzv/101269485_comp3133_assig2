import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { CREATE_BOOKING } from 'src/app/graphql/graphql.queries'; 

@Component({
  selector: 'app-create-booking',
  templateUrl: './create-booking.component.html',
  styleUrls: ['./create-booking.component.css']
})
export class CreateBookingComponent implements OnInit {

  list:any

  constructor(private apollo: Apollo) { }

  ngOnInit(): void {
  }

}
