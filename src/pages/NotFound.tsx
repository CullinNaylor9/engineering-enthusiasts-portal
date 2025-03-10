
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-engineer-50 px-4">
      <div className="max-w-md w-full p-8 bg-white rounded-2xl shadow-elevated text-center">
        <h1 className="text-5xl font-semibold mb-4 text-engineer-900">404</h1>
        <p className="text-xl text-engineer-700 mb-6">
          Oops! The page you're looking for doesn't exist.
        </p>
        <Link 
          to="/" 
          className="inline-flex items-center button-primary"
        >
          <ArrowLeft className="h-5 w-5 mr-2" />
          Return to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
