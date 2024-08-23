import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../ui";
import { toast } from "sonner";
import { deleteSession } from "@/api/auth";

const Navbar: React.FC = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    const op = deleteSession();
    toast.promise(op, {
      success: () => {
        navigate("/login");
        return "You have logged out";
      },
      error: (error: unknown) => {
        console.log({ error });
        return "Something went wrong while login out";
      },
      loading: "Login out...",
    });
  };

  return (
    <nav className="sticky top-0 bg-white shadow-md p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex space-x-4">
          <Link
            to="/"
            className="text-lg font-semibold text-gray-800 hover:text-blue-500"
          >
            Home
          </Link>
        </div>
        <Button
          onClick={handleLogout}
          variant="outline"
          className="text-red-600 hover:bg-red-100"
        >
          Logout
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
