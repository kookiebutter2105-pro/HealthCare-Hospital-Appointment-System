import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HospitalCard from "@/components/HospitalCard";
import { Hospital } from "lucide-react";

interface HospitalType {
  id: string;
  name: string;
  address: string;
  phone: string;
  specialties: string[];
  city: string;
}

// Mock hospital data - in production this would come from backend
const mockHospitals: HospitalType[] = [
  {
    id: "1",
    name: "Apollo Hospitals",
    address: "Greams Road, Chennai, Tamil Nadu",
    phone: "+91 44 2829 3333",
    specialties: ["Cardiology", "Neurology", "Oncology"],
    city: "Chennai"
  },
  {
    id: "2",
    name: "Fortis Hospital",
    address: "Bannerghatta Road, Bengaluru, Karnataka",
    phone: "+91 80 6621 4444",
    specialties: ["Orthopedics", "Gastroenterology", "Pediatrics"],
    city: "Bengaluru"
  },
  {
    id: "3",
    name: "MIOT International",
    address: "Mount Poonamallee Road, Chennai, Tamil Nadu",
    phone: "+91 44 4200 2288",
    specialties: ["Orthopedics", "Cardiology", "Nephrology"],
    city: "Chennai"
  },
  {
    id: "4",
    name: "Manipal Hospital",
    address: "HAL Airport Road, Bengaluru, Karnataka",
    phone: "+91 80 2502 4444",
    specialties: ["Neurology", "Urology", "ENT"],
    city: "Bengaluru"
  },
  {
    id: "5",
    name: "Care Hospitals",
    address: "Road No. 1, Banjara Hills, Hyderabad, Telangana",
    phone: "+91 40 6165 6565",
    specialties: ["Cardiology", "Oncology", "Gastroenterology"],
    city: "Hyderabad"
  },
  {
    id: "6",
    name: "Yashoda Hospitals",
    address: "Malakpet, Hyderabad, Telangana",
    phone: "+91 40 4422 2222",
    specialties: ["Neurosurgery", "Orthopedics", "Critical Care"],
    city: "Hyderabad"
  }
];

const Hospitals = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [hospitals, setHospitals] = useState<HospitalType[]>([]);
  const selectedCity = searchParams.get("city") || localStorage.getItem("selectedCity") || "";

  useEffect(() => {
    if (!selectedCity) {
      navigate("/");
      return;
    }
    
    // Filter hospitals by city - in production this would be an API call
    const filtered = mockHospitals.filter(h => h.city === selectedCity);
    setHospitals(filtered);
  }, [selectedCity, navigate]);

  const handleBookAppointment = (hospital: HospitalType) => {
    localStorage.setItem("selectedHospital", JSON.stringify(hospital));
    navigate("/appointment");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        <section className="gradient-primary py-20 text-white">
          <div className="container mx-auto px-4">
            <div className="flex items-center gap-3 mb-4 animate-fade-in">
              <Hospital className="h-12 w-12" />
              <h1 className="text-4xl md:text-5xl font-bold">Hospitals in {selectedCity}</h1>
            </div>
            <p className="text-lg text-white/90 animate-fade-in">
              Choose from our network of trusted healthcare providers
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            {hospitals.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-muted-foreground text-lg">No hospitals found in {selectedCity}</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {hospitals.map((hospital) => (
                  <HospitalCard
                    key={hospital.id}
                    {...hospital}
                    onBook={() => handleBookAppointment(hospital)}
                  />
                ))}
              </div>
            )}
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Hospitals;
