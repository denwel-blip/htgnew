import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, Droplets, Coffee, Cookie, Zap, BarChart3 } from "lucide-react";

const Commodities = () => {
  const commodities = [
    {
      title: "Crude Oil",
      category: "Energy",
      icon: Droplets,
      description: "Global crude oil trading including Brent, WTI, Dubai, and regional grades with comprehensive supply chain management.",
      markets: ["Brent Crude", "WTI", "Dubai Crude", "Urals", "Angola Girassol"],
      tradingVolume: "50M+ barrels annually",
      keyOrigins: ["North Sea", "Middle East", "West Africa", "Americas"],
      specifications: ["API Gravity 28-42°", "Sulfur Content <0.5%", "Various delivery terms"],
      cta: "Explore Oil Trading"
    },
    {
      title: "Sugar",
      category: "Soft Commodities",
      icon: Cookie,
      description: "Raw and refined sugar trading from major producing regions with direct mill relationships and flexible delivery options.",
      markets: ["Raw Sugar #11", "White Sugar #5", "Brazilian Crystal", "Thai Raw Sugar"],
      tradingVolume: "2M+ MT annually",
      keyOrigins: ["Brazil", "Thailand", "India", "Australia", "Guatemala"],
      specifications: ["ICUMSA 45", "ICUMSA 150", "VHP", "Plantation White"],
      cta: "Discover Sugar Markets"
    },
    {
      title: "Coffee",
      category: "Soft Commodities", 
      icon: Coffee,
      description: "Premium arabica and robusta coffee beans from certified origins with quality assurance and sustainable sourcing programs.",
      markets: ["Arabica", "Robusta", "Specialty Grades", "Certified Organic"],
      tradingVolume: "500K+ bags annually",
      keyOrigins: ["Brazil", "Colombia", "Vietnam", "Ethiopia", "Guatemala"],
      specifications: ["SCA Grading", "Fair Trade", "Rainforest Alliance", "Organic Certified"],
      cta: "Access Coffee Trading"
    },
    {
      title: "Cocoa",
      category: "Soft Commodities",
      icon: Zap,
      description: "Premium cocoa beans and semi-finished products from West African and Latin American origins with quality certifications.",
      markets: ["Main Crop", "Mid Crop", "Fine Flavor", "Organic Cocoa"],
      tradingVolume: "200K+ MT annually",
      keyOrigins: ["Ghana", "Ivory Coast", "Ecuador", "Madagascar", "Peru"],
      specifications: ["Fair Average Quality", "Superior Quality", "Fine Flavor", "Certified Organic"],
      cta: "Enter Cocoa Markets"
    },
    {
      title: "Refined Products",
      category: "Energy",
      icon: TrendingUp,
      description: "Comprehensive refined petroleum products trading including gasoline, diesel, jet fuel, and specialty products.",
      markets: ["Gasoline", "Gasoil/Diesel", "Jet Fuel", "Fuel Oil", "Naphtha"],
      tradingVolume: "30M+ MT annually",
      keyOrigins: ["Middle East", "Europe", "Asia", "Americas"],
      specifications: ["Euro V", "ULSD", "Jet A-1", "380 CST", "Various Grades"],
      cta: "Trade Refined Products"
    },
    {
      title: "Metals",
      category: "Base & Precious",
      icon: BarChart3,
      description: "Base and precious metals trading with secure storage, financing, and delivery solutions across global markets.",
      markets: ["Copper", "Aluminium", "Gold", "Silver", "Platinum"],
      tradingVolume: "100K+ MT annually",
      keyOrigins: ["London", "Shanghai", "COMEX", "Regional Markets"],
      specifications: ["LME Grade A", "LBMA Good Delivery", "COMEX Approved", "Various Purities"],
      cta: "Access Metals Trading"
    }
  ];

  return (
    <div className="py-16">
      {/* Schema.org structured data would be added here */}
      
      {/* Hero Section */}
      <section className="bg-gradient-luxury text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-serif text-4xl md:text-6xl font-bold mb-6">
            Global Commodity Markets
          </h1>
          <p className="text-xl md:text-2xl max-w-4xl mx-auto opacity-90 leading-relaxed">
            Comprehensive trading solutions across oil, energy, soft commodities, and metals 
            with deep market expertise and global supply chain management.
          </p>
        </div>
      </section>

      {/* Commodities Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">
              Our Commodity Expertise
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Decades of experience across major commodity classes with established 
              relationships and proven track record in global markets.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
            {commodities.map((commodity, index) => (
              <Card key={index} className="shadow-luxury border-0">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-gold rounded-lg flex items-center justify-center flex-shrink-0">
                      <commodity.icon className="h-8 w-8 text-accent-foreground" />
                    </div>
                    <div>
                      <div className="flex items-center space-x-2 mb-2">
                        <h3 className="font-serif text-2xl font-bold">{commodity.title}</h3>
                        <span className="text-xs bg-accent text-accent-foreground px-2 py-1 rounded">
                          {commodity.category}
                        </span>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">
                        {commodity.description}
                      </p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div>
                      <h4 className="font-medium mb-3 text-accent">Trading Markets:</h4>
                      <ul className="space-y-2">
                        {commodity.markets.map((market, idx) => (
                          <li key={idx} className="flex items-start">
                            <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            <span className="text-sm">{market}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-medium mb-3 text-accent">Key Origins:</h4>
                      <ul className="space-y-2">
                        {commodity.keyOrigins.map((origin, idx) => (
                          <li key={idx} className="flex items-start">
                            <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            <span className="text-sm">{origin}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <div className="bg-muted/30 rounded-lg p-4 mb-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="font-medium text-accent">Annual Volume:</span>
                        <p className="text-muted-foreground">{commodity.tradingVolume}</p>
                      </div>
                      <div>
                        <span className="font-medium text-accent">Specifications:</span>
                        <p className="text-muted-foreground">{commodity.specifications.join(", ")}</p>
                      </div>
                    </div>
                  </div>
                  
                  <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                    {commodity.cta}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Market Intelligence */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">
              Market Intelligence & Analysis
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Proprietary research and real-time market analysis supporting informed trading decisions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="shadow-gold text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-luxury rounded-lg mx-auto mb-6 flex items-center justify-center">
                  <BarChart3 className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="font-serif text-xl font-bold mb-4">Daily Market Reports</h3>
                <p className="text-muted-foreground">
                  Comprehensive daily analysis covering price movements, supply-demand dynamics, 
                  and market outlook across all commodity classes.
                </p>
              </CardContent>
            </Card>
            
            <Card className="shadow-gold text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-luxury rounded-lg mx-auto mb-6 flex items-center justify-center">
                  <TrendingUp className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="font-serif text-xl font-bold mb-4">Price Forecasting</h3>
                <p className="text-muted-foreground">
                  Advanced quantitative models and fundamental analysis providing short and 
                  long-term price forecasts for strategic planning.
                </p>
              </CardContent>
            </Card>
            
            <Card className="shadow-gold text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-luxury rounded-lg mx-auto mb-6 flex items-center justify-center">
                  <Zap className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="font-serif text-xl font-bold mb-4">Risk Analytics</h3>
                <p className="text-muted-foreground">
                  Sophisticated risk assessment tools measuring market, credit, and operational 
                  risks across commodity portfolios and trading positions.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">
              Access Global Commodity Markets
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Leverage our decades of commodity market expertise and global network 
              to optimize your trading strategies and supply chain operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                Start Trading Today
              </Button>
              <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                Request Market Analysis
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Commodities;