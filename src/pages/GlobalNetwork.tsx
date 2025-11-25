import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Mail, Users, Building, Globe, Clock } from "lucide-react";

const GlobalNetwork = () => {
  const offices = [
    {
      city: "London",
      country: "United Kingdom",
      role: "Global Headquarters",
      established: "1987",
      address: "1 Commodity Plaza, London EC2M 4AA, United Kingdom",
      phone: "+44 20 7000 0000",
      email: "london@heritagecommodities.com",
      timezone: "GMT",
      staff: "120+ professionals",
      specialties: ["Global Operations", "Risk Management", "Compliance", "Executive Leadership"],
      image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=600&h=400&fit=crop&auto=format&q=80",
      description: "Our flagship office in the heart of London's financial district, serving as the global command center for all commodity trading operations."
    },
    {
      city: "Geneva",
      country: "Switzerland",
      role: "European Operations",
      established: "1992",
      address: "Rue du Rhône 85, 1204 Geneva, Switzerland",
      phone: "+41 22 000 0000",
      email: "geneva@heritagecommodities.com",
      timezone: "CET",
      staff: "85+ professionals",
      specialties: ["European Trading", "Structured Finance", "Commodity Finance", "Private Banking"],
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop&auto=format&q=80",
      description: "Strategic European hub focusing on structured commodity finance and serving Continental European clients with discretion and expertise."
    },
    {
      city: "Dubai",
      country: "United Arab Emirates", 
      role: "Middle East Hub",
      established: "1998",
      address: "Emirates Financial Towers, DIFC, Dubai, UAE",
      phone: "+971 4 000 0000",
      email: "dubai@heritagecommodities.com",
      timezone: "GST",
      staff: "75+ professionals",
      specialties: ["Energy Trading", "Middle East Operations", "Islamic Finance", "Regional Partnerships"],
      image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=600&h=400&fit=crop&auto=format&q=80",
      description: "Regional headquarters for Middle East and North Africa, specializing in energy trading and Islamic finance solutions."
    },
    {
      city: "Singapore",
      country: "Singapore",
      role: "Asia Pacific",
      established: "2001",
      address: "1 Raffles Place, Singapore 048616",
      phone: "+65 6000 0000",
      email: "singapore@heritagecommodities.com",
      timezone: "SGT",
      staff: "95+ professionals",
      specialties: ["Asian Markets", "Soft Commodities", "Supply Chain", "Trade Finance"],
      image: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=600&h=400&fit=crop&auto=format&q=80",
      description: "Gateway to Asian markets with deep expertise in soft commodities and supply chain management across the Asia-Pacific region."
    },
    {
      city: "São Paulo",
      country: "Brazil",
      role: "Latin America",
      established: "2005", 
      address: "Avenida Faria Lima 3064, São Paulo, Brazil",
      phone: "+55 11 0000 0000",
      email: "saopaulo@heritagecommodities.com",
      timezone: "BRT",
      staff: "60+ professionals",
      specialties: ["Agricultural Commodities", "Sugar Trading", "Coffee & Cocoa", "Origin Services"],
      image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=600&h=400&fit=crop&auto=format&q=80",
      description: "Center of excellence for agricultural commodities with direct relationships to Brazil's major commodity producing regions."
    }
  ];

  const globalStats = [
    { number: "5", label: "Global Offices", icon: Building },
    { number: "435+", label: "Professionals", icon: Users },
    { number: "67", label: "Countries Served", icon: Globe },
    { number: "24/7", label: "Trading Desk", icon: Clock }
  ];

  return (
    <div className="py-16">
      {/* Hero Section */}
      <section className="bg-gradient-luxury text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-serif text-4xl md:text-6xl font-bold mb-6">
            Global Network
          </h1>
          <p className="text-xl md:text-2xl max-w-4xl mx-auto opacity-90 leading-relaxed">
            Strategic presence across key financial centers and commodity hubs, 
            providing local expertise with global reach and 24/7 market coverage.
          </p>
        </div>
      </section>

      {/* Global Stats */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {globalStats.map((stat, index) => (
              <Card key={index} className="text-center shadow-luxury">
                <CardContent className="p-6">
                  <stat.icon className="h-8 w-8 text-accent mx-auto mb-4" />
                  <div className="font-serif text-3xl font-bold text-primary mb-2">
                    {stat.number}
                  </div>
                  <p className="text-sm text-muted-foreground font-medium">
                    {stat.label}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">
              Our Global Offices
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Each office combines local market expertise with our global capabilities, 
              ensuring comprehensive coverage across all major commodity markets.
            </p>
          </div>
          
          <div className="space-y-16">
            {offices.map((office, index) => (
              <Card key={index} className="shadow-luxury border-0 overflow-hidden">
                <div className={`grid grid-cols-1 lg:grid-cols-2 ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                  <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                    <img
                      src={office.image}
                      alt={`${office.city} office`}
                      className="w-full h-80 lg:h-full object-cover"
                    />
                  </div>
                  <CardContent className="p-8 lg:p-12 flex flex-col justify-center">
                    <div className="flex items-center space-x-3 mb-6">
                      <MapPin className="h-6 w-6 text-accent" />
                      <div>
                        <h3 className="font-serif text-2xl font-bold">{office.city}</h3>
                        <p className="text-accent font-medium">{office.role}</p>
                        <p className="text-sm text-muted-foreground">Established {office.established}</p>
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {office.description}
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div className="space-y-4">
                        <div className="flex items-start space-x-3">
                          <Building className="h-4 w-4 text-accent mt-1" />
                          <div className="text-sm">
                            <p className="font-medium">Address:</p>
                            <p className="text-muted-foreground">{office.address}</p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-3">
                          <Phone className="h-4 w-4 text-accent mt-1" />
                          <div className="text-sm">
                            <p className="font-medium">Phone:</p>
                            <p className="text-muted-foreground">{office.phone}</p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-3">
                          <Mail className="h-4 w-4 text-accent mt-1" />
                          <div className="text-sm">
                            <p className="font-medium">Email:</p>
                            <p className="text-muted-foreground">{office.email}</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="space-y-4">
                        <div className="flex items-start space-x-3">
                          <Clock className="h-4 w-4 text-accent mt-1" />
                          <div className="text-sm">
                            <p className="font-medium">Timezone:</p>
                            <p className="text-muted-foreground">{office.timezone}</p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-3">
                          <Users className="h-4 w-4 text-accent mt-1" />
                          <div className="text-sm">
                            <p className="font-medium">Team Size:</p>
                            <p className="text-muted-foreground">{office.staff}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="font-medium mb-3 text-accent">Specialties:</h4>
                      <div className="flex flex-wrap gap-2">
                        {office.specialties.map((specialty, idx) => (
                          <span key={idx} className="text-xs bg-muted px-3 py-1 rounded-full">
                            {specialty}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <Button variant="outline" className="w-full border-accent text-accent hover:bg-accent hover:text-accent-foreground">
                      Contact {office.city} Office
                    </Button>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Network Capabilities */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">
              Connected Capabilities
            </h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Our integrated global network ensures seamless execution across time zones, 
              markets, and regulatory environments.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="bg-primary-foreground/10 border-primary-foreground/20">
              <CardContent className="p-8 text-center">
                <Globe className="h-12 w-12 text-accent mx-auto mb-6" />
                <h3 className="font-serif text-xl font-bold mb-4">24/7 Coverage</h3>
                <p className="opacity-90">
                  Continuous market monitoring and trading capabilities across all major 
                  commodity exchanges and regional markets worldwide.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-primary-foreground/10 border-primary-foreground/20">
              <CardContent className="p-8 text-center">
                <Building className="h-12 w-12 text-accent mx-auto mb-6" />
                <h3 className="font-serif text-xl font-bold mb-4">Local Expertise</h3>
                <p className="opacity-90">
                  Deep understanding of regional markets, regulations, and business practices 
                  combined with global best practices and standards.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-primary-foreground/10 border-primary-foreground/20">
              <CardContent className="p-8 text-center">
                <Users className="h-12 w-12 text-accent mx-auto mb-6" />
                <h3 className="font-serif text-xl font-bold mb-4">Unified Platform</h3>
                <p className="opacity-90">
                  Integrated systems and processes ensuring consistent service delivery 
                  and risk management across all locations and asset classes.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-accent text-accent-foreground">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">
              Connect With Our Global Team
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Ready to leverage our global network for your commodity trading needs? 
              Connect with the office closest to your operations.
            </p>
            <Button size="lg" variant="outline" className="border-accent-foreground text-accent-foreground hover:bg-accent-foreground hover:text-accent">
              Find Your Local Office
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GlobalNetwork;