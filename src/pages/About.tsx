import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const leadership = [
    {
      name: "Sir James Morrison",
      title: "Managing Partner & Chief Investment Officer",
      experience: "40+ years in commodities markets and venture capital",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=400&fit=crop&crop=face&auto=format&q=80"
    },
    {
      name: "Lady Catherine Sterling",
      title: "General Partner",
      experience: "35+ years in international trade and early-stage investing",
      image: "https://images.unsplash.com/photo-1494790108755-2616b68fcfd1?w=300&h=400&fit=crop&crop=face&auto=format&q=80"
    },
    {
      name: "Robert Ashworth",
      title: "Partner & Head of Portfolio",
      experience: "30+ years in financial markets and startup advisory",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=400&fit=crop&crop=face&auto=format&q=80"
    }
  ];

  const values = [
    {
      title: "Sector Mastery",
      description: "Decades of experience across real estate, hospitality, commodities, and emerging technology underpin our investment conviction and portfolio support strategies"
    },
    {
      title: "Founder-Led Partnerships",
      description: "We invest in visionary founders building transformative companies in property, advanced robotics, energy technology, and AI infrastructure—leaders capable of shaping tomorrow’s economy."
    },
    {
      title: "Long-Term Value Creation",
      description: "We partner beyond capital, providing strategic guidance, operational support, and global connections to help founders scale sustainably across international markets."
    },
    {
      title: "Global Reach",
      description: "A worldwide network spanning developers, operators, engineers, technologists, and institutional partners—accelerating growth for portfolio companies positioned to lead their sectors."
    }
  ];

  return (
    <div className="py-16">
      {/* Hero Section */}
      <section className="bg-gradient-luxury text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-serif text-4xl md:text-6xl font-bold mb-6">
            Experience. Insight. Vision.
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90">
            For decades, our team has built expertise across global real estate, energy technology, and advanced automation.
            Today, we invest that experience into the founders and ventures shaping the future of property, industrial robotics, and AI infrastructure.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-center mb-12">
              Our Story
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                As innovation reshaped the world’s commercial landscapes, our mandate expanded. 
                In 2017, we transitioned from pure commodities brokerage to early-stage venture investing, 
                recognising that the next generation of global market leaders would emerge at the intersection of <strong>technology</strong>, 
                <strong>infrastructure</strong>, <strong>and real-asset development</strong>.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Today, operating across London, Dubai, Singapore, and Sydney, we deploy early-stage capital into <strong>high-impact ventures</strong> across:
              </p>
              <ul className="list-disc list-inside text-lg text-muted-foreground leading-relaxed mb-6">
                <li><strong>Real Estate & Hospitality</strong>, including hotel development, mixed-use assets, and property-technology ecosystems</li>
                <li><strong>Oil & Gas Technology</strong>, such as robotics, automation, drone intelligence, and advanced industrial monitoring</li>
                <li><strong>AI & Data Infrastructure</strong>, powering the backbone of future digital and energy-heavy economies</li>
              </ul>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Across every investment, we combine institutional-level due diligence with deep sector intelligence, helping founders accelerate growth through our strategic network, industry experience, and global market access.<br/>
                Our mission remains unchanged: to back visionary entrepreneurs building the next era of real-world infrastructure and technological transformation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      {/* <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-center mb-12">
            Leadership Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {leadership.map((leader, index) => (
              <Card key={index} className="text-center shadow-luxury">
                <CardContent className="p-6">
                  <div className="mb-6">
                    <img
                      src={leader.image}
                      alt={leader.name}
                      className="w-32 h-40 mx-auto rounded object-cover grayscale hover:grayscale-0 transition-all duration-300"
                    />
                  </div>
                  <h3 className="font-serif text-xl font-bold mb-2">{leader.name}</h3>
                  <p className="text-accent font-medium mb-2">{leader.title}</p>
                  <p className="text-sm text-muted-foreground">{leader.experience}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section> */}

      {/* Values */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-center mb-12">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {values.map((value, index) => (
              <Card key={index} className="shadow-gold">
                <CardContent className="p-8">
                  <h3 className="font-serif text-xl font-bold mb-4 text-accent">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-accent text-accent-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">
            Partner With Us
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Building a breakthrough venture in real estate, hospitality, energy technology, or AI infrastructure?
            We’re ready to explore strategic partnership and help accelerate your path to market.
          </p>
          <Button onClick={() => (window.location.href = "/contact")} size="lg" variant="outline" className="border-accent-foreground text-accent-foreground hover:bg-accent-foreground hover:text-accent">
            Submit Investment Inquiry
          </Button>
        </div>
      </section>
    </div>
  );
};

export default About;