import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Contact = () => {
  const offices = [
    {
      city: "London",
      country: "United Kingdom",
      role: "Global Headquarters",
      address: "1 Commodity Plaza, London EC2M 4AA",
      phone: "+44 20 7000 0000",
      email: "london@hendotanggroup.com",
      hours: "9:00 AM - 6:00 PM GMT"
    },
    {
      city: "Sydney",
      country: "Australia", 
      role: "APAC Operations",
      address: "Rue du Rhône 85, 1204 Geneva",
      phone: "+41 22 000 0000",
      email: "geneva@hendotanggroup.com",
      hours: "9:00 AM - 6:00 PM CET"
    },
    {
      city: "Dubai",
      country: "UAE",
      role: "Middle East Hub",
      address: "Emirates Financial Towers, DIFC",
      phone: "+971 4 000 0000", 
      email: "dubai@hendotanggroup.com",
      hours: "9:00 AM - 6:00 PM GST"
    },
    {
      city: "Singapore", 
      country: "Singapore",
      role: "Asia Pacific",
      address: "1 Raffles Place, Singapore 048616",
      phone: "+65 6000 0000",
      email: "singapore@hendotanggroup.com", 
      hours: "9:00 AM - 6:00 PM SGT"
    }
  ];

  const inquiryTypes = [
    "Investment Inquiry – Seed / Angel Funding",
    "Venture Proposal – Real Estate / Hotels",
    "Venture Proposal – Energy / Oil & Gas Technology",
    "Venture Proposal – AI / Digital Infrastructure",
    "Strategic Partnership & Collaboration",
    "Advisor / Network Contribution",
    "Due Diligence / Documentation Submission",
    "General Inquiry"
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const data = {
      firstName: e.target.firstName.value,
      lastName: e.target.lastName.value,
      email: e.target.email.value,
      phone: e.target.phone.value,
      company: e.target.company.value,
      inquiryType: e.target.inquiryType.value,
      message: e.target.message.value,
    };

    try {
      const res = await fetch("https://script.google.com/macros/s/AKfycbyaD94p6ye4mIw7u2AHcDFGhoe6Cn9ZBePwyZGJ05nS60gliqcPFsE6ZsThq0lfLXD0gw/exec", {
        method: "POST",
        body: JSON.stringify(data),
      });

      const json = await res.json();
      if (json.status === "success") {
        alert("Your inquiry has been submitted!");
        e.target.reset();
      } else {
        alert("Error submitting form: " + json.message);
      }
    } catch (err) {
      alert("Network error: " + err.message);
    }
  };

  return (
    <div className="py-16">
      {/* Hero Section */}
      <section className="bg-gradient-luxury text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-serif text-4xl md:text-6xl font-bold mb-6">
            Start Your Commodity Transaction With Confidence
          </h1>
          <p className="text-xl md:text-2xl max-w-4xl mx-auto opacity-90 leading-relaxed">
            Connect with HTG’s venture team to explore <strong>seed and angel investment opportunities</strong> in high-growth sectors including <strong>hospitality & real estate, 
            energy technology, robotics & drone systems, and AI infrastructure</strong>. Our institutional network, disciplined due-diligence framework, 
            and founder-first approach ensure every opportunity is reviewed with <strong>rigour, discretion, and strategic insight</strong>.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
            
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="shadow-luxury border-0">
                <CardContent className="p-8">
                  <h2 className="font-serif text-3xl font-bold mb-8">
                    Contact Us to Begin Your Inquiry
                  </h2>
                  <form className="space-y-6" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="firstName" className="text-sm font-medium">
                          First Name *
                        </Label>
                        <Input 
                          id="firstName" 
                          className="mt-2" 
                          placeholder="Enter your first name"
                        />
                      </div>
                      <div>
                        <Label htmlFor="lastName" className="text-sm font-medium">
                          Last Name *
                        </Label>
                        <Input 
                          id="lastName" 
                          className="mt-2" 
                          placeholder="Enter your last name"
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="email" className="text-sm font-medium">
                          Email Address *
                        </Label>
                        <Input 
                          id="email" 
                          type="email" 
                          className="mt-2" 
                          placeholder="your.email@company.com"
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone" className="text-sm font-medium">
                          Phone Number
                        </Label>
                        <Input 
                          id="phone" 
                          type="tel" 
                          className="mt-2" 
                          placeholder="+1 (555) 000-0000"
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="company" className="text-sm font-medium">
                          Company *
                        </Label>
                        <Input 
                          id="company" 
                          className="mt-2" 
                          placeholder="Your company name"
                        />
                      </div>
                      <div>
                        <Label htmlFor="inquiryType" className="text-sm font-medium">
                          Inquiry Type *
                        </Label>
                        <select 
                          id="inquiryType" 
                          className="mt-2 w-full h-10 px-3 rounded-md border border-input bg-background text-sm"
                        >
                          <option value="">Select inquiry type</option>
                          {inquiryTypes.map((type, index) => (
                            <option key={index} value={type}>{type}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                    
                    <div>
                      <Label htmlFor="message" className="text-sm font-medium">
                        Message *
                      </Label>
                      <Textarea 
                        id="message" 
                        className="mt-2 min-h-32" 
                        placeholder="Please describe your commodity trading requirements, preferred volumes, and timeline..."
                      />
                    </div>
                    
                    <div className="text-sm text-muted-foreground">
                      <p>* Required fields</p>
                      <p className="mt-2">
                        By submitting this form, you agree to our privacy policy and consent 
                        to being contacted by HendoTang Group regarding your inquiry.
                      </p>
                    </div>
                    
                    <Button size="lg" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-medium">
                      Send Inquiry
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
            
            {/* Contact Information */}
            <div className="space-y-6">
              <Card className="shadow-luxury border-0">
                <CardContent className="p-6">
                  <h3 className="font-serif text-xl font-bold mb-4">
                    Direct Contact
                  </h3>
                  <div className="space-y-4">
                    {/* <div className="flex items-center space-x-3">
                      <Phone className="h-5 w-5 text-accent" />
                      <div>
                        <p className="font-medium">Global Hotline</p>
                        <p className="text-sm text-muted-foreground">+44 20 7000 0000</p>
                      </div>
                    </div> */}
                    <div className="flex items-center space-x-3">
                      <Mail className="h-5 w-5 text-accent" />
                      <div>
                        <p className="font-medium">General Inquiries</p>
                        <p className="text-sm text-muted-foreground">info@hendotanggroup.com</p>
                      </div>
                    </div>
                    {/* <div className="flex items-center space-x-3">
                      <Clock className="h-5 w-5 text-accent" />
                      <div>
                        <p className="font-medium">Business Hours</p>
                        <p className="text-sm text-muted-foreground">24/7 Trading Desk</p>
                      </div>
                    </div> */}
                  </div>
                </CardContent>
              </Card>
              
              {/* <Card className="shadow-gold border-0">
                <CardContent className="p-6">
                  <h3 className="font-serif text-xl font-bold mb-4">
                    Emergency Trading
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    For urgent trading matters outside business hours, 
                    our 24/7 trading desk is available.
                  </p>
                  <Button variant="outline" className="w-full border-accent text-accent hover:bg-accent hover:text-accent-foreground">
                    Emergency Contact
                  </Button>
                </CardContent>
              </Card> */}
            </div>
          </div>
        </div>
      </section>

      {/* Global Offices */}
      {/* <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">
              Our Global Offices
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Strategically located across key financial centers and commodity hubs worldwide.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {offices.map((office, index) => (
              <Card key={index} className="shadow-luxury">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-2 mb-4">
                    <MapPin className="h-5 w-5 text-accent" />
                    <div>
                      <h3 className="font-bold">{office.city}</h3>
                      <p className="text-sm text-accent">{office.role}</p>
                    </div>
                  </div>
                  
                  <div className="space-y-3 text-sm">
                    <div>
                      <p className="font-medium">Address:</p>
                      <p className="text-muted-foreground">{office.address}</p>
                    </div>
                    <div>
                      <p className="font-medium">Phone:</p>
                      <p className="text-muted-foreground">{office.phone}</p>
                    </div>
                    <div>
                      <p className="font-medium">Email:</p>
                      <p className="text-muted-foreground">{office.email}</p>
                    </div>
                    <div>
                      <p className="font-medium">Hours:</p>
                      <p className="text-muted-foreground">{office.hours}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section> */}
      
    </div>
  );
};

export default Contact;