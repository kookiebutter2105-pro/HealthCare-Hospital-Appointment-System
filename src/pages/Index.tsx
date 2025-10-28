import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CityCard from "@/components/CityCard";
import { Heart, Shield, Clock, Award } from "lucide-react";

const cities = [
  { 
    name: "Chennai", 
    hospitals: 15,
    image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=800&h=600&fit=crop"
  },
  { 
    name: "Bengaluru", 
    hospitals: 18,
    image: "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?w=800&h=600&fit=crop"
  },
  { 
    name: "Hyderabad", 
    hospitals: 12,
    image: "https://images.unsplash.com/photo-1577086664693-894d8405334a?w=800&h=600&fit=crop"
  }
];

const features = [
  {
    icon: Heart,
    title: "Quality Care",
    description: "Access to top-rated hospitals and experienced doctors"
  },
  {
    icon: Shield,
    title: "Trusted Network",
    description: "Verified healthcare providers across major cities"
  },
  {
    icon: Clock,
    title: "Quick Booking",
    description: "Book appointments in minutes, not hours"
  },
  {
    icon: Award,
    title: "Best Service",
    description: "Award-winning healthcare booking platform"
  }
];

const Index = () => {
  const navigate = useNavigate();

  const handleCitySelect = (cityName: string) => {
    localStorage.setItem("selectedCity", cityName);
    navigate(`/hospitals?city=${cityName}`);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="gradient-primary py-20 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=1600&h=900&fit=crop')] opacity-10 bg-cover bg-center" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center animate-fade-in">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Your Health, Our Priority
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-white/90">
                Book appointments with trusted hospitals across India
              </p>
              <div className="flex items-center justify-center gap-4">
                <div className="p-3 rounded-full bg-white/20 backdrop-blur-sm animate-float">
                  <Heart className="h-8 w-8" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* City Selection */}
        <section className="py-16 -mt-16 relative z-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                Select Your City
              </h2>
              <p className="text-lg text-muted-foreground">
                Find the best hospitals in your area
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {cities.map((city, index) => (
                <div key={city.name} className="animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                  <CityCard
                    {...city}
                    onSelect={() => handleCitySelect(city.name)}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-card">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                Why Choose HealthCare+
              </h2>
              <p className="text-lg text-muted-foreground">
                Experience healthcare booking like never before
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {features.map((feature, index) => (
                <div 
                  key={feature.title}
                  className="glass-card glass-card-hover rounded-xl p-6 text-center animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="inline-flex p-4 rounded-full gradient-primary mb-4">
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
