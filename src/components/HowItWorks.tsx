import { Users, MessageSquare, Smartphone, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const HowItWorks = () => {
  const steps = [
    {
      number: 1,
      icon: Users,
      title: "Collect Customer Numbers",
      description: "Capture customer contact information through your optimized website, in-store QR codes, and reservation system.",
      benefits: ["95% collection rate", "GDPR compliant", "Automated process"]
    },
    {
      number: 2,
      icon: MessageSquare,
      title: "Smart SMS Marketing",
      description: "Send personalized offers, promotions, and updates directly to your customers' phones with our AI-powered messaging system.",
      benefits: ["95% open rate", "40% click rate", "Automated campaigns"]
    },
    {
      number: 3,
      icon: Smartphone,
      title: "Drive App Engagement",
      description: "Convert customers to your branded loyalty app where they can order, book tables, and earn rewards, creating lasting relationships.",
      benefits: ["60% retention boost", "45% order increase", "Brand loyalty"]
    }
  ];

  return (
    <section id="how-it-works" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            How <span className="text-primary">GrowPlate</span> Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our proven 3-step system turns one-time visitors into loyal customers who order more frequently and spend more per visit.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-primary to-primary transform -translate-y-1/2 z-0"></div>
          
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12 relative z-10">
            {steps.map((step, index) => (
              <div key={step.number} className="text-center space-y-6">
                {/* Step Circle */}
                <div className="flex justify-center">
                  <div className="step-circle">
                    {step.number}
                  </div>
                </div>

                {/* Icon */}
                <div className="flex justify-center">
                  <div className="w-16 h-16 bg-primary-light rounded-2xl flex items-center justify-center">
                    <step.icon className="w-8 h-8 text-primary" />
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-foreground">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>

                  {/* Benefits */}
                  <div className="space-y-2">
                    {step.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="inline-flex items-center space-x-2 bg-success-light text-success px-3 py-1 rounded-full text-sm">
                        <span>✓ {benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Arrow for desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 right-0 transform translate-x-6 -translate-y-1/2 text-primary">
                    <ArrowRight className="w-6 h-6" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Results Section */}
        <div className="mt-20 bg-gradient-to-r from-primary to-primary-hover rounded-3xl p-8 md:p-12 text-center text-primary-foreground">
          <div className="space-y-6">
            <h3 className="text-3xl md:text-4xl font-bold">
              The Results Speak for Themselves
            </h3>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Restaurants using our complete system see an average of 40% revenue increase within 90 days.
            </p>
            
            {/* Stats */}
            <div className="grid md:grid-cols-3 gap-8 mt-8">
              <div className="space-y-2">
                <div className="text-4xl font-bold">2,500+</div>
                <div className="opacity-90">Successful Restaurants</div>
              </div>
              <div className="space-y-2">
                <div className="text-4xl font-bold">$2.3M+</div>
                <div className="opacity-90">Additional Revenue Generated</div>
              </div>
              <div className="space-y-2">
                <div className="text-4xl font-bold">90 Days</div>
                <div className="opacity-90">Average Time to ROI</div>
              </div>
            </div>

            <div className="pt-6">
              <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90 font-semibold px-8 py-4 text-lg">
                Start Your Growth Journey
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;