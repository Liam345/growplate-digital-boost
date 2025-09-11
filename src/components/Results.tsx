import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Results = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        {/* Results Section */}
        <div className="bg-gradient-to-r from-primary to-primary-hover rounded-3xl p-8 md:p-12 text-center text-primary-foreground">
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

export default Results;