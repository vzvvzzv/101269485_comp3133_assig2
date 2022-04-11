import { gql } from 'apollo-angular';


    export const CREATE_CUSTOMER = gql`
    mutation createCustomer(
        $username: String!,
        $firstname: String!,
        $lastname: String!,
        $password: String!,
        $email: String!,
        $type: String!
    ){
        createCustomer(
            username: $username,
            firstname: $firstname,
            lastname: $lastname,
            password: $password,
            email: $email,
            type: $type
        ){
            id
            username
            firstname
            lastname
            password
            email
            type
        }
    }`
    export const CREATE_LISTING = gql`
    mutation createListing(
        $listing_id: String!
        $listing_title: String!,
        $description: String!,
        $street: String!,
        $city: String!,
        $postal_code: String!,
        $price: Float!,
        $email: String!,
        $username: String!
    ){
        createListing(
            listing_id: $listing_id,
            listing_title: $listing_title,
            description: $description,
            street: $street,
            city: $city,
            postal_code: $postal_code,
            price: $price,
            email: $email,
            username: $username, 
        )
        {id}
    }`
    export const CREATE_BOOKING = gql`
    mutation createBooking(
        $listing_id: String!,
        $booking_id: String!,
        $booking_date: String!,
        $booking_start: String!,
        $booking_end: String!,
        $username: String!
    ){
        createBooking(
            listing_id: $listing_id,
            booking_id: $booking_id!,
            booking_date: $booking_date!,
            booking_start: $booking_start!,
            booking_end: $booking_end!,
            username: $username!
            
        )
        {id}
    }`
    export const GET_LISTINGS = gql`
    query getListings{
        getListings{
            listing_id,
            listing_title,
            description,
            street,
            city,
            postal_code,
            price,
            email,
            username
        }
    }`
    export const GET_BOOKINGS = gql`
    query getBookings{
        getListings{
            listing_id,
            booking_id,
            booking_date,
            booking_start,
            booking_end,
            username
        }
    }`

