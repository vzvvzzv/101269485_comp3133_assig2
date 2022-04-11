import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListingComponent } from './components/listing/listing.component';
import { BookingComponent } from './components/booking/booking.component';
import { CreateListingComponent } from './components/create-listing/create-listing.component';
import { GraphQLModule } from './graphql.module';
import { HttpClientModule } from '@angular/common/http';
import { CreateBookingComponent } from './components/create-booking/create-booking.component';

@NgModule({
  declarations: [
    AppComponent,
    ListingComponent,
    BookingComponent,
    CreateBookingComponent,
    CreateListingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GraphQLModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
