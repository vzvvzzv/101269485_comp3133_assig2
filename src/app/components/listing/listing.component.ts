import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { GET_LISTINGS } from 'src/app/graphql/graphql.queries'; 

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css']
})
export class ListingComponent implements OnInit {
  
  listings: any[] = [];

  constructor(private apollo: Apollo) { 
    this.getList();
  }

  ngOnInit(): void {
      this.getList();
  }

  getList(){
    this.apollo.watchQuery<any>({
      query: GET_LISTINGS,
    }).valueChanges
    .subscribe((res) => {
      this.listings = res.data.getListings
      console.log(this.listings)
    })
  }

}
