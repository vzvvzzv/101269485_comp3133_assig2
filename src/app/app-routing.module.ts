import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateBookingComponent } from './components/create-booking/create-booking.component';
import { CreateListingComponent } from './components/create-listing/create-listing.component';
import { BookingComponent } from './components/booking/booking.component';
import { ListingComponent } from './components/listing/listing.component';

const routes: Routes = [
  {path: 'bookings', component: BookingComponent},
  {path: 'listing', component: ListingComponent},
  {path: 'create-listing', component: CreateListingComponent},
  {path: 'create-booking', component: CreateBookingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
