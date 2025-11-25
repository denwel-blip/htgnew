import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Globe, TrendingUp, Shield, Users } from "lucide-react";

const Index = () => {
  const investmentFocus = [
    {
      title: "Real Estate & Hospitality Innovation",
      description: "Early-stage ventures transforming how residential, commercial, and hotel assets are developed, operated, and experienced.",
      icon: TrendingUp,
      features: ["PropTech & Digital Twin Platforms", "Smart Building Technology", "Hospitality Operations Technology", "Mixed-Use & Hotel Development Ventures"]
    },
    {
      title: "Oil & Gas Technology (Robotics & Automation)",
      description: "Seed and Angel investments in next-generation technologies modernising energy operations, safety, and inspection.",
      icon: Globe,
      features: ["Industrial Robotics & Autonomous Systems", "Drone Inspection Platforms", "Pipeline & Refinery Monitoring Tech", "Operational Efficiency & Safety Systems"]
    },
    {
      title: "AI Infrastructure & Intelligent Systems",
      description: "High-impact ventures building the digital backbone of the next decade—AI infrastructure powering assets, automation, and global industries.",
      icon: Shield,
      features: ["AI/ML Infrastructure Platforms", "Data-Driven Automation Systems", "Predictive Analytics for Assets & Energy", "Cloud, Edge, and Compute Infrastructure"]
    }
  ];

  const portfolioHighlights = [
    {
      quote: "Heritage's early investment and strategic guidance was pivotal to our Series A success. Their commodity sector expertise opened doors across the industry.",
      author: "Founder & CEO",
      company: "Carbon Trading Platform"
    },
    {
      quote: "Beyond capital, Heritage connected us with their global network of producers and traders, accelerating our market validation by 18 months.",
      author: "Co-Founder",
      company: "AgTech Supply Chain Venture"
    }
  ];

  const globalHubs = [
    { city: "London", country: "United Kingdom", role: "Global Headquarters" },
    { city: "Sydney", country: "Australia", role: "European Operations" },
    { city: "Dubai", country: "UAE", role: "Middle East Hub" },
    { city: "Singapore", country: "Singapore", role: "Asia Pacific" },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-luxury text-primary-foreground overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&h=1080&fit=crop&auto=format&q=80')`
          }}
        ></div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className="font-serif text-4xl md:text-7xl font-bold mb-6 leading-tight">
            HendoTang Group<br />
            <span className="text-accent">Venture Capital for High-Value Asset & Technology Innovation</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-2xl mx-auto">
            From hotels and commercial real estate to energy robotics and AI infrastructure, 
            HTG invests in founders reshaping the industries that power global economies.
          </p>
          <Button onClick={() => (window.location.href = "/contact")} size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-medium shadow-gold">
            Connect With Us
          </Button>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-5xl font-bold mb-6">
              Investment Focus
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Strategic early-stage capital deployed into ventures shaping the future of real estate, hospitality, energy technology, and AI infrastructure. 
              We partner with founders building high-value assets and intelligent systems that redefine operational efficiency, automation, and global asset performance.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {investmentFocus.map((focus, index) => (
              <Card key={index} className="shadow-luxury hover:shadow-gold transition-all duration-300 border-0">
                <CardContent className="p-8">
                  <div className="mb-6">
                    <focus.icon className="h-12 w-12 text-accent mb-4" />
                    <h3 className="font-serif text-2xl font-bold mb-4">{focus.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {focus.description}
                    </p>
                  </div>
                  <ul className="space-y-2">
                    {focus.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm">
                        <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  {/* <Button variant="outline" className="mt-6 w-full border-accent text-accent hover:bg-accent hover:text-accent-foreground">
                    View Portfolio
                  </Button> */}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Global Network */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-5xl font-bold mb-6">
              Investment Network
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Global presence providing portfolio companies with institutional relationships and market access.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {globalHubs.map((hub, index) => (
              <Card key={index} className="text-center shadow-luxury">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-gradient-gold rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Globe className="h-6 w-6 text-accent-foreground" />
                  </div>
                  <h3 className="font-bold text-lg mb-1">{hub.city}</h3>
                  <p className="text-sm text-muted-foreground mb-2">{hub.country}</p>
                  <p className="text-xs text-accent font-medium">{hub.role}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      {/* <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-5xl font-bold mb-6">
              Portfolio Success Stories
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {portfolioHighlights.map((highlight, index) => (
              <Card key={index} className="bg-primary-foreground/10 border-primary-foreground/20">
                <CardContent className="p-8">
                  <blockquote className="text-lg italic mb-6 leading-relaxed">
                    "{highlight.quote}"
                  </blockquote>
                  <div className="text-sm">
                    <p className="font-medium text-accent">{highlight.author}</p>
                    <p className="opacity-80">{highlight.company}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="py-20 bg-accent text-accent-foreground">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl md:text-5xl font-bold mb-6">
              Building the Future of Real Assets & Technology
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Are you creating a transformative venture in real estate, hospitality, oil & gas technology, or AI infrastructure?
              Let’s explore how HTG Capital can accelerate your growth with strategic investment and deep industry expertise.
            </p>
            <Button onClick={() => (window.location.href = "/contact")} size="lg" variant="outline" className="border-accent-foreground text-accent-foreground hover:bg-accent-foreground hover:text-accent shadow-lg">
              Submit Investment Inquiry
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
