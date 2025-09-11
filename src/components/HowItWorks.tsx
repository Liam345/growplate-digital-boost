import { Users, MessageSquare, Smartphone, ArrowRight } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      number: 1,
      icon: Users,
      title: "Free setup of your Optimised Branded Website",
      // description: "Get local SEO to your website and increase your online orders by 50%",
      benefits: ["Improve web presence", "Get 3x more customer conversions", "Accept orders directly from your own website"]
    },
    // {
    //   number: 2,
    //   icon: Users,
    //   title: "You only pay us after we generate $3000 AUD for your restaurant"]
    // },
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
      title: "Drive Customer Engagement",
      description: "Convert customers to your branded loyalty app where they can order, book tables, and earn rewards, creating lasting relationships.",
      benefits: ["Retention boost", "Order increase", "Brand loyalty"]
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

      </div>
    </section>
  );
};

export default HowItWorks;