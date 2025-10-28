import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { CheckCircle, Calendar, Clock, Hospital, MapPin, User, Mail, Phone } from "lucide-react";

const Confirmation = () => {
  const navigate = useNavigate();
  const [appointment, setAppointment] = useState<any>(null);

  useEffect(() => {
    const storedAppointment = localStorage.getItem("latestAppointment");
    if (!storedAppointment) {
      navigate("/");
      return;
    }
    setAppointment(JSON.parse(storedAppointment));
  }, [navigate]);

  if (!appointment) return null;

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 py-16">
        <div className="container mx-auto px-4 max-w-2xl">
          <div className="glass-card rounded-xl p-8 animate-slide-up text-center">
            <div className="inline-flex p-6 rounded-full bg-green-100 mb-6 animate-float">
              <CheckCircle className="h-16 w-16 text-green-600" />
            </div>
            
            <h1 className="text-3xl font-bold mb-2 text-foreground">
              Appointment Confirmed!
            </h1>
            <p className="text-muted-foreground mb-8">
              Your appointment has been successfully booked
            </p>

            <div className="bg-background rounded-lg p-6 space-y-4 text-left mb-8">
              <div className="flex items-center gap-3 pb-4 border-b">
                <div className="p-2 rounded-lg bg-primary/10">
                  <User className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Appointment ID</p>
                  <p className="font-semibold">{appointment.id}</p>
                </div>
              </div>

              <div className="flex items-center gap-3 pb-4 border-b">
                <div className="p-2 rounded-lg bg-primary/10">
                  <User className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Patient Name</p>
                  <p className="font-semibold">{appointment.fullName}</p>
                </div>
              </div>

              <div className="flex items-center gap-3 pb-4 border-b">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="font-semibold">{appointment.email}</p>
                </div>
              </div>

              <div className="flex items-center gap-3 pb-4 border-b">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Phone</p>
                  <p className="font-semibold">{appointment.phone}</p>
                </div>
              </div>

              <div className="flex items-center gap-3 pb-4 border-b">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Hospital className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Hospital</p>
                  <p className="font-semibold">{appointment.hospital}</p>
                </div>
              </div>

              <div className="flex items-center gap-3 pb-4 border-b">
                <div className="p-2 rounded-lg bg-primary/10">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">City</p>
                  <p className="font-semibold">{appointment.city}</p>
                </div>
              </div>

              <div className="flex items-center gap-3 pb-4 border-b">
                <div className="p-2 rounded-lg bg-primary/10">
                  <User className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Doctor</p>
                  <p className="font-semibold">{appointment.doctor}</p>
                </div>
              </div>

              <div className="flex items-center gap-3 pb-4 border-b">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Calendar className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Date</p>
                  <p className="font-semibold">{new Date(appointment.date).toLocaleDateString('en-IN', { 
                    weekday: 'long', 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Clock className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Time</p>
                  <p className="font-semibold">{appointment.time}</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={() => navigate("/appointment")}
                className="flex-1 gradient-accent text-white font-semibold btn-3d"
              >
                Book Another Appointment
              </Button>
              <Button 
                onClick={() => navigate("/")}
                variant="outline"
                className="flex-1 btn-3d"
              >
                Go to Home
              </Button>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Confirmation;
