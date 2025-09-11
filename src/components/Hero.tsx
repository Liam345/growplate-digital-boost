import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import appMockup from "@/assets/app-mockup.jpg";

const Hero = () => {
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
                Transform your restaurant into a revenue-generating machine with our all-in-one digital growth platform. Boost sales by 40% in the first 3 months.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="btn-hero group">
                Start Now
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg" className="btn-secondary group">
                <Play className="mr-2 w-4 h-4" />
                See All Features
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="flex items-center space-x-6 pt-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">2,500+</div>
                <div className="text-sm text-muted-foreground">Restaurants</div>
              </div>
              <div className="w-px h-12 bg-border"></div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">40%</div>
                <div className="text-sm text-muted-foreground">Avg. Revenue Boost</div>
              </div>
              <div className="w-px h-12 bg-border"></div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">$50K+</div>
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
                +40% Sales
              </div>
              <div className="absolute -bottom-4 -left-4 bg-warning text-warning-foreground px-3 py-2 rounded-full text-sm font-semibold animate-pulse">
                $50/mo Saved
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;