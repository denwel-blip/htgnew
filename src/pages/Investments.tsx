import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Investments = () => {
  const investmentStages = [
    {
      title: "Seed Round Investments",
      description: "Early-stage capital for high-potential ventures shaping the future of real estate, hospitality, energy operations, and AI infrastructure. We back teams demonstrating strong market validation and the capability to execute.",
      details: [
        "Smart-building technology & property digitisation",
        "Hotel & hospitality innovation platforms",
        "Energy-sector automation (robotics, drones, field-ops tech)",
        "Foundational AI infrastructure & applied AI systems"
      ]
    },
    {
      title: "Angel Investment Portfolio",
      description: "Strategic capital deployed in pre-seed and angel rounds for transformative technologies enhancing the built environment, industrial operations, and next-generation automation.",
      details: [
        "PropTech workflow & automation systems",
        "Industrial robotics, drones, and O&G field-tech",
        "AI-driven risk, operations, and optimisation tools",
        "Infrastructure-scale data, analytics, and machine intelligence"
      ]
    }
  ];

  const investmentCriteria = [
    {
      title: "Market Alignment",
      description: "Ventures operating within or adjacent to our core sectors—real estate, hospitality, energy technology, AI infrastructure, or advanced industrial systems—with clear commercial relevance."
    },
    {
      title: "Proven Leadership",
      description: "Founders with deep domain expertise, strong execution capability, and a demonstrated ability to scale teams and products in complex, high-stakes industries."
    },
    {
      title: "Scalable Models",
      description: "Technology or asset-backed models with clear pathways to scale, defensible competitive advantages, and potential for cross-sector application."
    },
    {
      title: "Strategic Synergy",
      description: "Opportunities that meaningfully complement our ecosystem—hospitality assets, energy innovation, operational technology, or AI infrastructure—and extend the value we deliver to portfolio partners."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-luxury text-primary-foreground py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6">
              Strategic Investment Partnership
            </h1>
            <p className="text-xl text-primary-foreground/90 mb-8 leading-relaxed">
              Leveraging decades of commodities expertise to identify and nurture 
              transformative ventures in early Seed and Angel investment rounds.
            </p>
          </div>
        </div>
      </section>

      {/* Investment Philosophy */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-4xl font-bold text-foreground mb-6 text-center">
              Investment Philosophy
            </h2>
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p className="text-lg leading-relaxed mb-6">
                Heritage Capital invests in founders building the next generation of real-asset and industrial innovation. 
                Drawing on decades of experience across global commodities, energy systems, and institutional markets, 
                we deploy early-stage capital into ventures positioned to reshape the physical and digital infrastructure of tomorrow.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                Our investment thesis centres on three pillars:
              </p>
              <ul className="list-disc list-inside text-lg text-muted-foreground leading-relaxed mb-6">
                <li><strong>Real-world scalability</strong>, technologies and platforms with clear commercial pathways in real estate, hospitality, energy, and industrial operations.</li>
                <li><strong>Deep technological advantage</strong>, robotics, AI, automation, and data-driven systems that meaningfully improve efficiency, safety, or asset performance.</li>
                <li><strong>Strategic ecosystem alignment</strong>, ventures that complement our global network across commodities, logistics, real-estate development, oil & gas operations, and institutional advisory.</li>
              </ul>
              <p className="text-lg leading-relaxed mb-6">
                We back founders solving complex operational challenges—whether in built-environment automation, advanced energy technologies, 
                AI-enabled infrastructure, or next-generation robotics—while maintaining uncompromising standards of governance, transparency, and long-term value creation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Stages */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-4xl font-bold text-foreground mb-12 text-center">
            Investment Stages
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {investmentStages.map((stage, index) => (
              <Card key={index} className="border-border hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="font-serif text-2xl text-foreground">
                    {stage.title}
                  </CardTitle>
                  <CardDescription className="text-base">
                    {stage.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <h4 className="font-medium text-foreground mb-3">Focus Areas:</h4>
                  <ul className="space-y-2">
                    {stage.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start text-muted-foreground">
                        <span className="text-accent mr-2">•</span>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Investment Criteria */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-4xl font-bold text-foreground mb-12 text-center">
            Investment Criteria
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {investmentCriteria.map((criterion, index) => (
              <div key={index} className="text-center p-6">
                <h3 className="font-serif text-xl font-bold text-foreground mb-3">
                  {criterion.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {criterion.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Value */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-4xl font-bold text-foreground mb-8 text-center">
              Beyond Capital
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-accent rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl text-accent-foreground">🌐</span>
                </div>
                <h3 className="font-medium text-foreground mb-2">Global Network</h3>
                <p className="text-sm text-muted-foreground">
                  Access to our international network of real estate developers, hospitality operators, energy partners, institutional investors, and technology innovators.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-accent rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl text-accent-foreground">📊</span>
                </div>
                <h3 className="font-medium text-foreground mb-2">Market Intelligence</h3>
                <p className="text-sm text-muted-foreground">
                  Insights shaped by decades of experience across property development, commodities trading, energy systems, and frontier technologies—informing sharper investment decisions.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-accent rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl text-accent-foreground">🤝</span>
                </div>
                <h3 className="font-medium text-foreground mb-2">Strategic Advisory</h3>
                <p className="text-sm text-muted-foreground">
                  Hands-on support from seasoned operators in real estate, hospitality, oil & gas, and emerging technologies—accelerating product development, commercialisation, and market entry.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-4xl font-bold mb-6">
            Building the Future of Commodities
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            If you’re developing an early-stage venture in real estate, hospitality, energy technology, or AI infrastructure, we’d welcome the opportunity to explore partnership.
          </p>
          <Button 
            onClick={() => (window.location.href = "/contact")}
            size="lg" 
            className="bg-accent hover:bg-accent/90 text-accent-foreground font-medium"
          >
            Submit Investment Inquiry
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Investments;
