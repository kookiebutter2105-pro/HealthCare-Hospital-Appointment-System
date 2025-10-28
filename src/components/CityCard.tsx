import { MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CityCardProps {
  name: string;
  hospitals: number;
  image: string;
  onSelect: () => void;
}

const CityCard = ({ name, hospitals, image, onSelect }: CityCardProps) => {
  return (
    <div className="glass-card glass-card-hover rounded-xl overflow-hidden group cursor-pointer">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={image} 
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-4 left-4 text-white">
          <h3 className="text-2xl font-bold">{name}</h3>
          <p className="text-sm flex items-center gap-1 mt-1">
            <MapPin className="h-4 w-4" />
            {hospitals} Hospitals Available
          </p>
        </div>
      </div>
      <div className="p-6">
        <Button 
          onClick={onSelect}
          className="w-full gradient-primary text-white font-semibold btn-3d"
        >
          Select City
        </Button>
      </div>
    </div>
  );
};

export default CityCard;
