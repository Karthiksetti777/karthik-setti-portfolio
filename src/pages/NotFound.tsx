
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-security-primary text-white">
      <div className="text-center">
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <div className="w-16 h-1 bg-security-accent mx-auto mb-6"></div>
        <p className="text-xl text-gray-300 mb-8">Oops! The page you're looking for doesn't exist.</p>
        <Button
          onClick={() => window.location.href = '/'}
          className="bg-security-accent hover:bg-security-accent/80 text-white"
        >
          Return to Home
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
