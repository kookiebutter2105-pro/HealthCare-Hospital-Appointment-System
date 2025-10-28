import { MapPin, Phone, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

interface HospitalCardProps {
  id: string;
  name: string;
  address: string;
  phone: string;
  specialties: string[];
  onBook: () => void;
}

const HospitalCard = ({ name, address, phone, specialties, onBook }: HospitalCardProps) => {
  return (
    <div className="glass-card glass-card-hover rounded-xl p-6 animate-fade-in">
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-xl font-bold text-foreground">{name}</h3>
          <p className="text-sm text-muted-foreground flex items-center gap-1 mt-2">
            <MapPin className="h-4 w-4" />
            {address}
          </p>
        </div>
        <div className="p-2 rounded-lg bg-primary/10">
          <Clock className="h-5 w-5 text-primary" />
        </div>
      </div>
      
      <div className="space-y-3 mb-4">
        <p className="text-sm flex items-center gap-2 text-muted-foreground">
          <Phone className="h-4 w-4" />
          {phone}
        </p>
        
        <div>
          <p className="text-sm font-semibold mb-2">Specialties:</p>
          <div className="flex flex-wrap gap-2">
            {specialties.map((specialty, index) => (
              <span 
                key={index}
                className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium"
              >
                {specialty}
              </span>
            ))}
          </div>
        </div>
      </div>
      
      <Button 
        onClick={onBook}
        className="w-full gradient-accent text-white font-semibold btn-3d"
      >
        Book Appointment
      </Button>
    </div>
  );
};

export default HospitalCard;
