import { Link, useLocation } from "react-router-dom";
import { Heart, Home, Hospital, Calendar, Phone } from "lucide-react";

const Navbar = () => {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <nav className="sticky top-0 z-50 glass-card border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="p-2 rounded-lg gradient-primary">
              <Heart className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              HealthCare+
            </span>
          </Link>
          
          <div className="hidden md:flex items-center gap-6">
            <Link 
              to="/" 
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
                isActive("/") 
                  ? "bg-primary text-white" 
                  : "hover:bg-primary/10 text-foreground"
              }`}
            >
              <Home className="h-4 w-4" />
              <span>Home</span>
            </Link>
            
            <Link 
              to="/hospitals" 
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
                isActive("/hospitals") 
                  ? "bg-primary text-white" 
                  : "hover:bg-primary/10 text-foreground"
              }`}
            >
              <Hospital className="h-4 w-4" />
              <span>Hospitals</span>
            </Link>
            
            <Link 
              to="/appointment" 
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
                isActive("/appointment") 
                  ? "bg-primary text-white" 
                  : "hover:bg-primary/10 text-foreground"
              }`}
            >
              <Calendar className="h-4 w-4" />
              <span>Book Appointment</span>
            </Link>
            
            <a 
              href="#contact" 
              className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-primary/10 text-foreground transition-all"
            >
              <Phone className="h-4 w-4" />
              <span>Contact</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
