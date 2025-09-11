import { 
  Globe, 
  Calendar, 
  MessageSquare, 
  Gift, 
  Smartphone, 
  Palette,
  DollarSign,
  TrendingUp,
  Users
} from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Globe,
      title: "Website Optimized for Sales",
      benefits: [
        "Increase online orders by 50%",
        "Save 1000's of dollars on web development",
        "Get 3x more customer conversions"
      ]
    },
    {
      icon: Calendar,
      title: "Online Takeaway Ordering ",
      benefits: [
        "Save 30% percent commisions from delivery apps",
        "Incentivise customers to order from your website",
        "Targeted offers to increase average order value"
      ]
    },
    {
      icon: Palette,
      title: "Your Own Brand",
      benefits: [
        "We never put our name on your menus, website or app",
        "You own your data and your channels even if you stop using GrowPlate",
        "Build your own brand – we stay in the background while you grow."
      ]
    },
    // {
    //   icon: MessageSquare,
    //   title: "SMS Marketing",
    //   benefits: [
    //     "Reach 95% of customers instantly",
    //     "Save $150/month on marketing tools",
    //     "Drive 40% repeat business"
    //   ]
    // },
    // {
    //   icon: Gift,
    //   title: "Loyalty Program",
    //   benefits: [
    //     "Increase customer lifetime value by 35%",
    //     "Save $100/month on loyalty platforms",
    //     "Boost repeat visits by 80%",
    //     "Increase regular customers – 20% of your guests account for 80% of revenue",
    //     "Automatic rewards directly in the app",
    //     "More repeat visits every month"
    //  ]
    // },
  ];

  return (
    <section id="features" className="py-20 px-4">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Everything You Need to{" "}
            <span className="text-primary">Grow Your Restaurant</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our all-in-one platform gives you the tools successful restaurants use to increase revenue, reduce costs, and delight customers.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="card-feature group">
              {/* Icon */}
              <div className="w-12 h-12 bg-primary-light rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-200">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>

              {/* Content */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-foreground">
                  {feature.title}
                </h3>
                
                <ul className="space-y-3">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-success rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-muted-foreground text-sm leading-relaxed">
                        {benefit}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* ROI Badge */}
                <div className="inline-flex items-center space-x-2 bg-success-light text-success px-3 py-1 rounded-full text-sm font-medium">
                  <TrendingUp className="w-3 h-3" />
                  <span>High ROI</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-4 bg-primary-light px-6 py-4 rounded-2xl">
            <div className="flex items-center space-x-2">
              <DollarSign className="w-5 h-5 text-primary" />
              <span className="text-primary font-semibold">Average ROI: 400% in first year</span>
            </div>
            <div className="w-px h-6 bg-primary/20"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;