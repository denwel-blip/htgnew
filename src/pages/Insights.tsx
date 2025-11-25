import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, User, ArrowRight } from "lucide-react";

const Insights = () => {
  const articles = [
    {
      title: "Global Oil Markets: Navigating Supply Chain Disruptions in 2024",
      excerpt: "Analysis of current geopolitical impacts on crude oil supply chains and strategic recommendations for energy traders.",
      author: "James Morrison",
      date: "March 15, 2024",
      readTime: "8 min read",
      category: "Energy Markets",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=600&h=400&fit=crop&auto=format&q=80"
    },
    {
      title: "Sugar Market Outlook: Brazil Harvest and Global Demand Trends",
      excerpt: "Comprehensive analysis of the upcoming Brazilian sugar harvest and its implications for global pricing dynamics.",
      author: "Catherine Sterling", 
      date: "March 12, 2024",
      readTime: "6 min read",
      category: "Soft Commodities",
      image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=600&h=400&fit=crop&auto=format&q=80"
    },
    {
      title: "ESG in Commodity Trading: Sustainable Supply Chain Management",
      excerpt: "How environmental, social, and governance factors are reshaping commodity trading and supply chain strategies.",
      author: "Robert Ashworth",
      date: "March 8, 2024", 
      readTime: "10 min read",
      category: "Sustainability",
      image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&h=400&fit=crop&auto=format&q=80"
    }
  ];

  return (
    <div className="py-16">
      {/* Hero Section */}
      <section className="bg-gradient-luxury text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-serif text-4xl md:text-6xl font-bold mb-6">
            Market Insights & Analysis
          </h1>
          <p className="text-xl md:text-2xl max-w-4xl mx-auto opacity-90">
            Expert commentary and analysis on global commodity markets from our research team.
          </p>
        </div>
      </section>

      {/* Articles */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {articles.map((article, index) => (
              <Card key={index} className="shadow-luxury">
                <div className="aspect-video overflow-hidden rounded-t-lg">
                  <img src={article.image} alt={article.title} className="w-full h-full object-cover" />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4 mb-4 text-sm text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4" />
                      <span>{article.date}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <User className="h-4 w-4" />
                      <span>{article.author}</span>
                    </div>
                  </div>
                  <div className="mb-3">
                    <span className="text-xs bg-accent text-accent-foreground px-2 py-1 rounded">
                      {article.category}
                    </span>
                  </div>
                  <h3 className="font-serif text-xl font-bold mb-3 leading-tight">
                    {article.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">{article.readTime}</span>
                    <Button variant="ghost" size="sm" className="text-accent hover:text-accent-foreground hover:bg-accent">
                      Read More <ArrowRight className="h-4 w-4 ml-1" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Insights;