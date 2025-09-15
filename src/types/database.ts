export interface DemoBooking {
  id?: string
  full_name: string
  email: string
  phone_number: string
  restaurant_name: string
  restaurant_suburb: string
  created_at?: string
  updated_at?: string
}

// Form data type that matches the component's existing interface
export interface DemoBookingFormData {
  fullName: string
  email: string
  phoneNumber: string
  restaurantName: string
  restaurantSuburb: string
}

// Database response type
export interface DemoBookingResponse extends DemoBooking {
  id: string
  created_at: string
  updated_at: string
}