import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calendar, Clock, User, Mail, Phone, Stethoscope } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Appointment = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [hospital, setHospital] = useState<any>(null);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    doctor: "",
    date: "",
    time: ""
  });

  useEffect(() => {
    const storedHospital = localStorage.getItem("selectedHospital");
    if (!storedHospital) {
      navigate("/hospitals");
      return;
    }
    setHospital(JSON.parse(storedHospital));
  }, [navigate]);

  const doctors = [
    "Dr. Rajesh Kumar - Cardiologist",
    "Dr. Priya Sharma - Neurologist",
    "Dr. Amit Patel - Orthopedic Surgeon",
    "Dr. Sneha Reddy - Pediatrician",
    "Dr. Arjun Mehta - General Physician"
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    if (!formData.fullName || !formData.email || !formData.phone || !formData.doctor || !formData.date || !formData.time) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive"
      });
      return;
    }

    // Create appointment object
    const appointment = {
      id: `APT-${Date.now()}`,
      ...formData,
      hospital: hospital.name,
      city: hospital.city,
      createdAt: new Date().toISOString()
    };

    // Store appointment
    localStorage.setItem("latestAppointment", JSON.stringify(appointment));
    
    // Navigate to confirmation
    navigate("/confirmation");
  };

  if (!hospital) return null;

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 py-16">
        <div className="container mx-auto px-4 max-w-2xl">
          <div className="glass-card rounded-xl p-8 animate-slide-up">
            <div className="text-center mb-8">
              <div className="inline-flex p-4 rounded-full gradient-primary mb-4">
                <Calendar className="h-8 w-8 text-white" />
              </div>
              <h1 className="text-3xl font-bold mb-2">Book Your Appointment</h1>
              <p className="text-muted-foreground">
                {hospital.name}, {hospital.city}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="fullName" className="flex items-center gap-2">
                  <User className="h-4 w-4 text-primary" />
                  Full Name
                </Label>
                <Input
                  id="fullName"
                  type="text"
                  placeholder="Enter your full name"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="bg-background"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-primary" />
                  Email Address
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="bg-background"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone" className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-primary" />
                  Phone Number
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="+91 XXXXX XXXXX"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="bg-background"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="doctor" className="flex items-center gap-2">
                  <Stethoscope className="h-4 w-4 text-primary" />
                  Select Doctor
                </Label>
                <select
                  id="doctor"
                  value={formData.doctor}
                  onChange={(e) => setFormData({ ...formData, doctor: e.target.value })}
                  className="w-full px-3 py-2 rounded-md border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                >
                  <option value="">Choose a doctor</option>
                  {doctors.map((doctor, index) => (
                    <option key={index} value={doctor}>
                      {doctor}
                    </option>
                  ))}
                </select>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="date" className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-primary" />
                    Date
                  </Label>
                  <Input
                    id="date"
                    type="date"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="bg-background"
                    min={new Date().toISOString().split('T')[0]}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="time" className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-primary" />
                    Time
                  </Label>
                  <Input
                    id="time"
                    type="time"
                    value={formData.time}
                    onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                    className="bg-background"
                  />
                </div>
              </div>

              <Button 
                type="submit" 
                className="w-full gradient-accent text-white font-semibold btn-3d py-6 text-lg"
              >
                Confirm Appointment
              </Button>
            </form>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Appointment;
