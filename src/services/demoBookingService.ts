import { supabase } from '@/lib/supabase'
import type { DemoBooking, DemoBookingFormData, DemoBookingResponse } from '@/types/database'

export class DemoBookingError extends Error {
  constructor(message: string, public originalError?: unknown) {
    super(message)
    this.name = 'DemoBookingError'
  }
}

export const demoBookingService = {
  /**
   * Creates a new demo booking in the database
   */
  async createBooking(formData: DemoBookingFormData): Promise<DemoBookingResponse> {
    try {
      // Transform form data to match database schema
      const bookingData: Omit<DemoBooking, 'id' | 'created_at' | 'updated_at'> = {
        full_name: formData.fullName.trim(),
        email: formData.email.trim().toLowerCase(),
        phone_number: formData.phoneNumber.trim(),
        restaurant_name: formData.restaurantName.trim(),
        restaurant_suburb: formData.restaurantSuburb.trim(),
      }

      const { data, error } = await supabase
        .from('demo_bookings')
        .insert([bookingData])
        .select()
        .single()

      if (error) {
        console.error('Supabase error details:', {
          code: error.code,
          message: error.message,
          details: error.details,
          hint: error.hint,
          fullError: error
        })
        
        // Handle specific error cases
        if (error.code === '23505') {
          throw new DemoBookingError('A booking with this email already exists. Please contact us directly if you need to update your booking.')
        }
        
        if (error.code === '42501') {
          throw new DemoBookingError(`Database access denied. Error: ${error.message}. Details: ${error.details || 'None'}. Hint: ${error.hint || 'None'}`)
        }

        throw new DemoBookingError(`Failed to save booking. Error code: ${error.code}. Message: ${error.message}`, error)
      }

      if (!data) {
        throw new DemoBookingError('No data returned from booking creation.')
      }

      return data as DemoBookingResponse
      
    } catch (error) {
      // Re-throw DemoBookingError as-is
      if (error instanceof DemoBookingError) {
        throw error
      }

      // Handle network/connection errors
      if (error instanceof TypeError && error.message.includes('fetch')) {
        throw new DemoBookingError('Network error. Please check your internet connection and try again.')
      }

      // Handle unknown errors
      console.error('Unexpected error in createBooking:', error)
      throw new DemoBookingError('An unexpected error occurred. Please try again or contact support.', error)
    }
  },

  /**
   * Retrieves all demo bookings (admin functionality)
   */
  async getBookings(): Promise<DemoBookingResponse[]> {
    try {
      const { data, error } = await supabase
        .from('demo_bookings')
        .select('*')
        .order('created_at', { ascending: false })

      if (error) {
        console.error('Error fetching bookings:', error)
        throw new DemoBookingError('Failed to retrieve bookings.', error)
      }

      return (data as DemoBookingResponse[]) || []
      
    } catch (error) {
      if (error instanceof DemoBookingError) {
        throw error
      }

      console.error('Unexpected error in getBookings:', error)
      throw new DemoBookingError('An unexpected error occurred while retrieving bookings.', error)
    }
  },

  /**
   * Check if Supabase connection is working
   */
  async testConnection(): Promise<boolean> {
    try {
      const { data, error } = await supabase
        .from('demo_bookings')
        .select('count', { count: 'exact', head: true })

      return !error
    } catch (error) {
      console.error('Connection test failed:', error)
      return false
    }
  }
}