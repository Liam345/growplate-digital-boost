import { CheckCircle } from "lucide-react";

const Pricing = () => {
  return (
    <section id="pricing" className="py-20 bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What does it cost?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            GrowPlate has $0 in setup costs
          </p>
        </div>

        {/* Risk-Free Guarantee Banner */}
        <div className="flex justify-center mb-4">
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

        {/* Pricing Card */}
        <div className="max-w-2xl mx-auto">
          <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-8 text-white shadow-xl">

            {/* Price */}
            <div className="text-center mb-8">
            <div className="text-3xl font-bold mb-2">Monthly fee:</div>
              <div className="text-3xl font-bold mb-2">$200 AUD</div>
              <div className="text-xl text-blue-100">/ month</div>
            </div>

            {/* Features List */}
            <div className="space-y-4 mb-8">
              {[
                "Complete website optimized for sales",
                "Risk Free Guarantee",
                "Online booking & takeaway system – no third party",
                "No hidden commissions",
                "24/7 support",
                "Cancel Anytime"
              ].map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-blue-200 flex-shrink-0" />
                  <span className="text-white">{feature}</span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <button className="w-full bg-white text-blue-600 font-semibold py-4 px-6 rounded-lg hover:bg-blue-50 transition-colors duration-200 text-lg">
              Get Started
            </button>

            {/* Footer Text */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;