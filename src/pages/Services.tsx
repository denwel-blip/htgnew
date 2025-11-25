import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, Leaf, Shield, Truck, BarChart3, Globe } from "lucide-react";

const Services = () => {
  const investmentServices = [
    {
      title: "Seed Stage Capital",
      icon: TrendingUp,
      description: "Early-stage capital for ventures validating their market, demonstrating technical feasibility, or establishing first customers—across real estate, hospitality, energy, automation, and infrastructure technologies.",
      features: [
        ["Hotel & Resort Technology Platforms","(IoT sensors, digital-twin environments, ESG reporting, predictive maintenance)"],
        ["Oil & Gas Robotics & Automation","(pipeline drones, refinery robotics, inspection automation, predictive safety systems)"],
        ["AI Infrastructure & Edge Computing","(AI-powered data centres, on-site inference systems, edge robotics intelligence"],
        ["Sustainable Construction & Infrastructure Tech","(low-carbon materials, modular building systems, construction automation)"],
      ],
      cta: "View Investment Criteria"
    },
    {
      title: "Angel Investments",
      icon: Leaf,
      description: "Strategic Angel-round capital for founders building transformative technologies at the intersection of real estate, energy, robotics, and AI—with strong potential for global scalability",
      features: [
        ["AI-Driven Hospitality & Tourism Platforms","(revenue optimisation, personalisation engines, wellness-tech integrations)"],
        ["PropTech Marketplaces & Transaction Platforms","(asset financing, digital brokerage, portfolio optimisation tools)"],
        ["Robotics & Drone Technology","(facility surveillance, remote inspection, asset management robotics)"],
        ["Energy Infrastructure Intelligence","(smart grid systems, emissions analytics, AI-powered energy optimisation)"],
        ["Advanced Data & Analytics Platforms","(portfolio intelligence, risk modelling, real-time capital planning)"]
      ],
      cta: "Explore Angel Portfolio"
    },
    {
      title: "Strategic Advisory",
      icon: Shield,
      description: "Hands-on, high-impact guidance from investors who have built companies, executed international deals, and operated at the frontier of real estate, energy, and AI-driven technologies. We help founders accelerate growth with strategic clarity, operational support, and access to industry-specific expertise.",
      features: [
        ["Go-to-Market Strategy & Early Commercialisation","Positioning tech ventures, hotel concepts, and infrastructure solutions for rapid adoption."],
        ["Regulatory & Compliance Navigation","Support across energy sector regulations, aviation/drone compliance, data governance, and real-estate licensing."],
        ["Capital Strategy & Investor Readiness","Structuring rounds, preparing investment materials, and connecting founders with co-investors."],
        ["Enterprise & Government Introductions","Access to decision-makers in hospitality groups, property developers, energy operators, and government bodies."],
        ["Operational Scaling Support","From pilot deployment to national rollouts for robotics, AI platforms, and hotel/asset developments."],
      ],
      cta: "Learn About Support"
    },
    {
      title: "Network Access",
      icon: Truck,
      description: "A global network built from years of operating in commodities, real estate, and sovereign-level supply chains — now deployed to accelerate venture growth in next-generation infrastructure and frontier technologies.",
      features: [
        ["Hotel & Real Estate Partnerships","Access to developers, operators, landowners, and institutional real-estate investors."],
        ["Energy Sector Connections","Introductions to refineries, trading houses, oilfield operators, and energy-transition partners seeking new technology."],
        ["Technology Integrators & AI Ecosystem","Connections to cloud providers, AI hardware suppliers, robotics labs, and enterprise innovation teams."],
        ["Government & Regulatory Agencies","Pathways for approvals, pilot testing, compliance clearance, and public-sector partnership."],
        ["Co-Investment & Syndicate Access","Introductions to family offices, venture syndicates, and institutional co-investors aligned with our sectors."],
      ],
      cta: "Discover Our Network"
    }
  ];

  const valueAdd = [
    {
      icon: BarChart3,
      title: "Sector Expertise",
      description: "Deep, multi-industry expertise across real estate development, hospitality, energy technology, and AI infrastructure — enabling informed investment decisions, strategic guidance, and long-term portfolio support grounded in real operational insight."
    },
    {
      icon: Globe,
      title: "Global Presence",
      description: "Investment operations spanning London, Dubai, Singapore, and Sydney, providing founders with international reach, cross-border opportunities, and access to institutional partners, industry leaders, and strategic customers in key global markets."
    }
  ];

  return (
    <div className="py-16">
      {/* Hero Section */}
      <section className="bg-gradient-luxury text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-serif text-4xl md:text-6xl font-bold mb-6">
            Investment Services & Support
          </h1>
          <p className="text-xl md:text-2xl max-w-4xl mx-auto opacity-90 leading-relaxed">
            Beyond capital, we provide deep strategic guidance, market access, and institutional relationships that accelerate founder growth across real estate, hospitality, energy technology, robotics, and AI infrastructure.
          </p>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
            {investmentServices.map((service, index) => (
              <Card key={index} className="shadow-luxury border-0">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-gold rounded-lg flex items-center justify-center flex-shrink-0">
                      <service.icon className="h-8 w-8 text-accent-foreground" />
                    </div>
                    <div>
                      <h2 className="font-serif text-2xl font-bold mb-3">{service.title}</h2>
                      <p className="text-muted-foreground leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                  
                  <div className="mb-8">
                    <h3 className="font-medium mb-4 text-accent">Focus Areas:</h3>
                    <ul className="space-y-3">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <div className="w-2 h-2 bg-accent rounded-full mt-2.5 mr-3 flex-shrink-0"></div>
                          <span className="text-sm leading-relaxed">
                            {Array.isArray(feature)
                              ? feature.map((line, i) => (
                                  <React.Fragment key={i}>
                                    {line}
                                    <br />
                                  </React.Fragment>
                                ))
                              : feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                    {service.cta}
                  </Button> */}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">
              Partnership Value
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The Heritage Capital advantage extends far beyond capital — we become an active partner in building high-growth, high-impact ventures.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {valueAdd.map((value, index) => (
              <Card key={index} className="shadow-gold text-center">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-luxury rounded-lg mx-auto mb-6 flex items-center justify-center">
                    <value.icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <h3 className="font-serif text-xl font-bold mb-4">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">
              Ready to Partner With Heritage Capital?
            </h2>
            <p className="text-xl mb-8 opacity-90">
             If you're developing a transformative venture in real estate, hospitality, oil & gas technology, robotics, drones, AI infrastructure, or next-generation energy systems, we'd welcome the opportunity to explore partnership.
            </p>
             <p className="text-xl mb-8 opacity-90">
              Our capital, expertise, and global network are designed to accelerate your growth.
             </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button onClick={() => (window.location.href = "/contact")} size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                Submit Investment Inquiry
              </Button>
              {/* <Button onClick={() => (window.location.href = "/contact")} size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                Download Investment Memo
              </Button> */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;