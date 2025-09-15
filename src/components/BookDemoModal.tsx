import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Mail, User, Store, MapPin, Calendar, CheckCircle } from "lucide-react";
import { toast } from "sonner";
import { demoBookingService, DemoBookingError } from "@/services/demoBookingService";

interface BookDemoModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

interface DemoBookingForm {
  fullName: string;
  email: string;
  phoneNumber: string;
  restaurantName: string;
  restaurantSuburb: string;
}

export default function BookDemoModal({ open, onOpenChange }: BookDemoModalProps) {
  const [formData, setFormData] = useState<DemoBookingForm>({
    fullName: "",
    email: "",
    phoneNumber: "",
    restaurantName: "",
    restaurantSuburb: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Partial<DemoBookingForm>>({});
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleClose = () => {
    setShowConfirmation(false);
    setFormData({
      fullName: "",
      email: "",
      phoneNumber: "",
      restaurantName: "",
      restaurantSuburb: "",
    });
    setErrors({});
    onOpenChange(false);
  };

  const handleInputChange = (field: keyof DemoBookingForm) => (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = e.target.value;
    setFormData(prev => ({
      ...prev,
      [field]: value,
    }));

    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({
        ...prev,
        [field]: undefined,
      }));
    }
  };


  // Email validation
  const validateEmail = (email: string): boolean => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<DemoBookingForm> = {};

    // Required fields
    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = "Phone number is required";
    }

    if (!formData.restaurantName.trim()) {
      newErrors.restaurantName = "Restaurant name is required";
    }

    if (!formData.restaurantSuburb.trim()) {
      newErrors.restaurantSuburb = "Restaurant suburb is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Submit to Supabase database
      const booking = await demoBookingService.createBooking(formData);
      
      toast.success("Demo booking submitted successfully!");
      
      // Reset form and show confirmation
      setFormData({
        fullName: "",
        email: "",
        phoneNumber: "",
        restaurantName: "",
        restaurantSuburb: "",
      });
      setErrors({});
      setShowConfirmation(true);
      
    } catch (error) {
      console.error("Error submitting demo booking:", error);
      
      if (error instanceof DemoBookingError) {
        // Show user-friendly error message
        toast.error(error.message);
        setErrors({
          fullName: error.message,
        });
      } else {
        // Handle unexpected errors
        const errorMessage = "Something went wrong. Please try again or contact us directly.";
        toast.error(errorMessage);
        setErrors({
          fullName: errorMessage,
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const isFormValid = formData.fullName && formData.email && formData.phoneNumber && 
                      formData.restaurantName && formData.restaurantSuburb;

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-[500px] max-h-[90vh] overflow-y-auto">
        {showConfirmation ? (
          // Confirmation Screen
          <>
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold text-center flex items-center justify-center gap-3">
                <CheckCircle className="w-8 h-8 text-success" />
                Demo Booked Successfully!
              </DialogTitle>
              <DialogDescription className="text-center text-lg">
                Your free demo has been scheduled
              </DialogDescription>
            </DialogHeader>

            <div className="space-y-6 mt-6">
              <div className="text-center space-y-4">
                <div className="bg-gradient-to-r from-primary/10 to-success/10 border border-primary/20 rounded-xl p-8">
                  <h3 className="text-xl font-semibold text-foreground mb-4">
                    What happens next?
                  </h3>
                  <div className="space-y-3 text-left">
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-sm font-bold mt-0.5">
                        1
                      </div>
                      <p className="text-muted-foreground">
                        We'll contact you within <span className="font-semibold text-foreground">24 hours</span> to schedule your personalized demonstration
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-sm font-bold mt-0.5">
                        2
                      </div>
                      <p className="text-muted-foreground">
                        See exactly how GrowPlate can <span className="font-semibold text-foreground">boost your revenue every month</span>
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-sm font-bold mt-0.5">
                        3
                      </div>
                      <p className="text-muted-foreground">
                        Get a <span className="font-semibold text-foreground">customized growth plan</span> for your restaurant
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-red-50 to-rose-50 border border-red-200 rounded-lg p-4">
                  <p className="text-red-800 font-semibold text-sm">
                    🎯 Remember: Only pay us AFTER we generate $3,000 AUD for your restaurant
                  </p>
                </div>
              </div>

              <Button
                onClick={handleClose}
                size="lg"
                className="w-full py-4 text-lg font-semibold"
              >
                Done
              </Button>
            </div>
          </>
        ) : (
          // Booking Form
          <>
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold text-center">
                Book Your Free Demo
              </DialogTitle>
              <DialogDescription className="text-center text-lg">
                See how GrowPlate can boost your restaurant's revenue by 30%
              </DialogDescription>
            </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6 mt-6">
          <div className="space-y-4">
            {/* Full Name */}
            <div className="space-y-2">
              <Label htmlFor="fullName" className="text-sm font-semibold flex items-center gap-2">
                <User className="w-4 h-4" />
                Full Name
              </Label>
              <Input
                id="fullName"
                type="text"
                placeholder="Enter your full name"
                value={formData.fullName}
                onChange={handleInputChange("fullName")}
                required
                className={`h-12 ${errors.fullName ? 'border-destructive' : ''}`}
              />
              {errors.fullName && (
                <p className="text-sm text-destructive">{errors.fullName}</p>
              )}
            </div>

            {/* Email */}
            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm font-semibold flex items-center gap-2">
                <Mail className="w-4 h-4" />
                Email Address
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email address"
                value={formData.email}
                onChange={handleInputChange("email")}
                required
                className={`h-12 ${errors.email ? 'border-destructive' : ''}`}
              />
              {errors.email && (
                <p className="text-sm text-destructive">{errors.email}</p>
              )}
            </div>

            {/* Phone Number */}
            <div className="space-y-2">
              <Label htmlFor="phoneNumber" className="text-sm font-semibold flex items-center gap-2">
                <Phone className="w-4 h-4" />
                Phone Number
              </Label>
              <Input
                id="phoneNumber"
                type="tel"
                placeholder="Enter your phone number"
                value={formData.phoneNumber}
                onChange={handleInputChange("phoneNumber")}
                required
                className={`h-12 ${errors.phoneNumber ? 'border-destructive' : ''}`}
              />
              {errors.phoneNumber && (
                <p className="text-sm text-destructive">{errors.phoneNumber}</p>
              )}
            </div>

            {/* Restaurant Name */}
            <div className="space-y-2">
              <Label htmlFor="restaurantName" className="text-sm font-semibold flex items-center gap-2">
                <Store className="w-4 h-4" />
                Restaurant Name
              </Label>
              <Input
                id="restaurantName"
                type="text"
                placeholder="Enter your restaurant name"
                value={formData.restaurantName}
                onChange={handleInputChange("restaurantName")}
                required
                className={`h-12 ${errors.restaurantName ? 'border-destructive' : ''}`}
              />
              {errors.restaurantName && (
                <p className="text-sm text-destructive">{errors.restaurantName}</p>
              )}
            </div>

            {/* Restaurant Suburb */}
            <div className="space-y-2">
              <Label htmlFor="restaurantSuburb" className="text-sm font-semibold flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                Restaurant Suburb
              </Label>
              <Input
                id="restaurantSuburb"
                type="text"
                placeholder="Enter your restaurant's suburb"
                value={formData.restaurantSuburb}
                onChange={handleInputChange("restaurantSuburb")}
                required
                className={`h-12 ${errors.restaurantSuburb ? 'border-destructive' : ''}`}
              />
              {errors.restaurantSuburb && (
                <p className="text-sm text-destructive">{errors.restaurantSuburb}</p>
              )}
            </div>
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            size="lg"
            disabled={!isFormValid || isSubmitting}
            className="w-full py-4 text-lg font-semibold group disabled:opacity-50 transition-all duration-200"
          >
            {isSubmitting ? (
              <>
                <Calendar className="mr-2 w-5 h-5 animate-spin" />
                Booking Your Demo...
              </>
            ) : (
              <>
                Book My Free Demo Now
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </>
            )}
          </Button>

          {/* Trust Message */}
          <div className="text-center text-sm text-muted-foreground space-y-2">
            <p className="flex items-center justify-center gap-2">
              🔒 Your information is secure and will never be shared
            </p>
            <div className="bg-gradient-to-r from-red-50 to-rose-50 border border-red-200 rounded-lg p-3 mt-4">
              <p className="text-red-800 font-semibold text-sm">
                🎯 We'll show you exactly how we can save your restaurant $3,000+ per month
              </p>
            </div>
          </div>
        </form>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}