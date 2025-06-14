import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "../assets/logo.png";
import { BrowserRouter } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";

const Navbar = () => {
  const [mobileDrowerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrowerOpen);
  };

  return (
    <BrowserRouter>
      <div className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-800/80">
        <div className="container px-4 mx-auto relative text-sm">
          <div className="flex justify-between items-center">
            <Link to="#hero">
              <div className="flex items-center flex-shirnk-0">
                <img
                  src={logo}
                  alt="logo"
                  height={20}
                  width={20}
                  className="mr-2"
                />
                <span className="text-xl tracking-tight">RealEstate</span>
              </div>
            </Link>
            <ul className="hidden lg:flex ml-14 space-x-12">
              <Link to="#features" smooth className="py-4">
                Features
              </Link>
              <Link to="#workflow" smooth className="py-4">
                Workflow
              </Link>
              <Link to="#pricing" smooth className="py-4">
                Pricing
              </Link>
              <Link to="#testimonial" smooth className="py-4">
                Testimonials
              </Link>
            </ul>
            <div className="hidden lg:flex justify-center space-x-12 items-center">
              <a className="py-2 px-3 border rounded-md " href="#">
                Sign In
              </a>
              <a
                className="bg-gradient-to-r from-blue-500 to-blue-800 py-2 px-3 border rounded-md "
                href="#"
              >
                Creat an account
              </a>
            </div>
            <div className="lg:hidden md:flex flex-col justify-end">
              <button onClick={toggleNavbar}>
                {mobileDrowerOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
          {mobileDrowerOpen && (
            <div className="fixed right-0 z-20 bg-neutral-900 w-full p-5 flex flex-col lg:hidden">
              <ul className="flex flex-col">
                <Link
                  to="#features"
                  smooth
                  onClick={toggleNavbar}
                  className="py-4"
                >
                  Features
                </Link>
                <Link
                  to="#workflow"
                  smooth
                  onClick={toggleNavbar}
                  className="py-4"
                >
                  Workflow
                </Link>
                <Link
                  to="#pricing"
                  smooth
                  onClick={toggleNavbar}
                  className="py-4"
                >
                  Pricing
                </Link>
                <Link
                  to="#testimonial"
                  smooth
                  onClick={toggleNavbar}
                  className="py-4"
                >
                  Testimonials
                </Link>
              </ul>
              <div className="flex space-x-6">
                <a
                  onClick={toggleNavbar}
                  className="py-2 px-3 border rounded-md"
                  href="#"
                >
                  SIgn In
                </a>
                <a
                  className="bg-gradient-to-r from-blue-500 to-blue-800 py-2 px-3 border rounded-md"
                  href="#"
                  onClick={toggleNavbar}
                >
                  Create An Account
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </BrowserRouter>
  );
};

export default Navbar;
