import { NavLink, Outlet, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

const Layout = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [location.pathname]);

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    //{ name: "Commodities", href: "/commodities" }, 
    //{ name: "Global Network", href: "/global-network" }, 
    //{ name: "Insights", href: "/insights" },
    { name: "Investments", href: "/investments" },
    { name: "Contact", href: "/contact" },
  ];

  // const footerLinks = [
  //   { name: "Compliance", href: "/compliance" },
  //   { name: "Privacy", href: "/privacy" },
  //   { name: "Careers", href: "/careers" },
  //   { name: "Investor Relations", href: "/investor-relations" },
  // ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <NavLink to="/" className="flex items-center space-x-2">
              <img
                src="/htgfinal.png"
                alt="Hendotang Group Logo"
                className="h-8 w-8 rounded"
              />
              <span className="font-serif font-bold text-xl text-primary">
                HendoTang Group
              </span>
            </NavLink>

            {/* Desktop Navigation */}
            <nav className="hidden md:block">
              <ul className="flex items-center space-x-8">
                {navigation.map((item) => (
                  <li key={item.name}>
                    <NavLink
                      to={item.href}
                      className={({ isActive }) =>
                        `text-sm font-medium transition-colors hover:text-accent ${
                          isActive ? "text-accent" : "text-foreground"
                        }`
                      }
                    >
                      {item.name}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </nav>

            {/* CTA Button for Desktop */}
            <NavLink
              to="/contact"
              onClick={() => setMobileOpen(false)}
              className="hidden md:block"
            >
              <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-medium">
                Connect With Us
              </Button>
            </NavLink>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-foreground"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="md:hidden border-t border-border bg-background">
            <ul className="flex flex-col p-4 space-y-4">
              {navigation.map((item) => (
                <li key={item.name}>
                  <NavLink
                    to={item.href}
                    onClick={() => setMobileOpen(false)}
                    className={({ isActive }) =>
                      `block text-base font-medium transition-colors hover:text-accent ${
                        isActive ? "text-accent" : "text-foreground"
                      }`
                    }
                  >
                    {item.name}
                  </NavLink>
                </li>
              ))}
              {/* Mobile CTA Button */}
              <li>
                <NavLink to="/contact" onClick={() => setMobileOpen(false)}>
                  <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-medium">
                    Connect With Us
                  </Button>
                </NavLink>
              </li>
            </ul>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main>
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 py-12">
          <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
            <p className="text-sm text-primary-foreground/60">
              © 2024 HendoTang Group All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
