import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Eye } from "lucide-react";
import appMockup from "@/assets/app-mockup.jpg";
import BookDemoModal from "./BookDemoModal";

const Hero = () => {
  const [isBookDemoModalOpen, setIsBookDemoModalOpen] = useState(false);
  return (
    <section className="pt-32 pb-20 px-4">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                The Future of{" "}
                <span className="text-primary">Restaurant Sales</span>{" "}
                is Digital
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
                Transform your restaurant into a revenue-generating machine with our all-in-one digital growth platform. Boost sales by 30% in the first 3 months.
              </p>
              {/* Risk-Free Guarantee Banner */}
              <div className="bg-gradient-to-r from-red-50 to-rose-50 border-2 border-red-300 rounded-xl p-8 max-w-xl shadow-lg">
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-4 h-4 bg-red-500 rounded-full animate-pulse"></div>
                  <span className="text-base font-semibold text-red-800 uppercase tracking-wide">100% Risk-Free</span>
                </div>
                <p className="text-xl font-bold text-red-900 leading-snug mb-3">
                  Only start paying us AFTER we generate $3,000 AUD for your restaurant
                </p>
                <p className="text-base text-red-700">
                  No upfront costs • No setup fees • Results guaranteed
                </p>
              </div>
            </div>
            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="btn-hero group w-full sm:w-auto px-12 py-6 text-xl font-bold shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-200"
                onClick={() => setIsBookDemoModalOpen(true)}
              >
                Book a Free Demo
                <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform duration-200" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="group w-full sm:w-auto px-8 py-6 text-lg font-semibold border-2 hover:bg-primary hover:text-primary-foreground transition-all duration-200"
                asChild
              >
                <a href="#features">
                  See All Features
                  <Eye className="ml-3 w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
                </a>
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="flex items-center space-x-6 pt-4">
              {/* <div className="text-center">
                <div className="text-2xl font-bold text-primary">2,500+</div>
                <div className="text-sm text-muted-foreground">Restaurants</div>
              </div> */}
              <div className="w-px h-12 bg-border"></div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">30%</div>
                <div className="text-sm text-muted-foreground">Avg. Revenue Boost</div>
              </div>
              <div className="w-px h-12 bg-border"></div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">$3K+</div>
                <div className="text-sm text-muted-foreground">Monthly Savings</div>
              </div>
            </div>
          </div>

          {/* Phone Mockup */}
          <div className="flex justify-center lg:justify-end">
            <div className="phone-mockup relative">
              {/* Phone Frame */}
              <div className="relative bg-gray-900 rounded-[3rem] p-3 shadow-2xl">
                <div className="bg-black rounded-[2.5rem] p-1">
                  <div className="relative bg-white rounded-[2rem] overflow-hidden">
                    {/* Notch */}
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-24 h-6 bg-black rounded-b-2xl z-10"></div>
                    
                    {/* App Screenshot */}
                    <div className="relative w-80 h-[640px]">
                      <img
                        src={appMockup}
                        alt="GrowPlate App Dashboard"
                        className="w-full h-full object-cover rounded-[2rem]"
                      />
                      
                      {/* Overlay gradient for better visibility */}
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent rounded-[2rem]"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 bg-success text-success-foreground px-3 py-2 rounded-full text-sm font-semibold animate-pulse">
                +30% Sales
              </div>
              <div className="absolute -bottom-4 -left-4 bg-warning text-warning-foreground px-3 py-2 rounded-full text-sm font-semibold animate-pulse">
                $5000/mo Saved
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <BookDemoModal 
        open={isBookDemoModalOpen} 
        onOpenChange={setIsBookDemoModalOpen} 
      />
    </section>
  );
};

export default Hero;