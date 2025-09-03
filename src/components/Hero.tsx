import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Download, TrendingUp, Zap, Shield } from "lucide-react";
import { motion } from "framer-motion";
import Hero3D from "./Hero3D";

const Hero = () => {
  const impactMetrics = [
    {
      icon: TrendingUp,
      metric: "30%",
      description: "AWS cost reduction via autoscaling + spot/reserved mix",
      color: "text-success"
    },
    {
      icon: Zap,
      metric: "50%",
      description: "Faster deployments with GitLab CI/CD",
      color: "text-accent"
    },
    {
      icon: Shield,
      metric: "10+",
      description: "AWS accounts | reusable Terraform + Helm modules",
      color: "text-aws"
    }
  ];

  return (
    <section id="home" className="min-h-screen pt-24 pb-16 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-card/50 to-secondary/30" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(59,130,246,0.1),transparent_50%)]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <motion.div 
              className="space-y-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="space-y-6">
                <motion.div 
                  className="inline-flex items-center px-4 py-2 rounded-full glass-effect"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2, duration: 0.4 }}
                >
                  <div className="w-2 h-2 bg-success rounded-full animate-pulse mr-3" />
                  <span className="text-sm text-accent font-medium">Let’s create something amazing together.</span>
                </motion.div>
                
                <motion.h1 
                  className="text-5xl lg:text-6xl font-heading font-bold text-foreground leading-tight"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                >
                  DevOps & Cloud Engineer
                </motion.h1>
                
                <motion.div 
                  className="flex flex-wrap items-center gap-3 text-xl lg:text-2xl text-muted-foreground"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                >
                  <span className="text-accent font-medium">AWS</span>
                  <div className="w-1 h-1 rounded-full bg-accent" />
                  <span className="text-accent font-medium">Kubernetes</span>
                  <div className="w-1 h-1 rounded-full bg-accent" />
                  <span className="text-accent font-medium">Terraform</span>
                </motion.div>
                
                <motion.p 
                  className="text-xl text-muted-foreground leading-relaxed max-w-2xl"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                >
                  I automate infrastructure, optimize cloud costs, and ship reliable pipelines—backed by 7+ years of full-stack delivery.
                </motion.p>
              </div>

              {/* CTAs */}
              <motion.div 
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
              >
                <Button 
                  variant="primary" 
                  size="lg" 
                  className="group"
                  onClick={() => window.open("https://topmate.io/sandeepvarma", "_blank")}
                  >
                  Let's talk
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button
                    variant="outline"
                    size="lg"
                    className="glass-effect"
                    onClick={() => window.open("/Sandeep-Varma.pdf", "_blank")}
                  >
                      <Download className="w-5 h-5 mr-2" />
                      Download Resume
                  </Button>
              </motion.div>
            </motion.div>

            {/* 3D Hero Visual */}
            <motion.div 
              className="relative"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <Hero3D />
            </motion.div>
          </div>

          {/* Impact Metrics */}
          <motion.div 
            className="mt-20"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl font-heading font-bold text-foreground mb-4">
                Proven Impact
              </h2>
              <p className="text-muted-foreground text-lg">
                Delivering measurable results across cloud infrastructure and DevOps operations
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {impactMetrics.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9 + index * 0.1, duration: 0.5 }}
                  >
                    <Card className="p-8 text-center card-hover border-card-border glass-effect">
                      <div className="flex justify-center mb-6">
                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent/20 to-metric/20 flex items-center justify-center">
                          <Icon className={`w-8 h-8 ${item.color}`} />
                        </div>
                      </div>
                      <motion.div 
                        className={`metric-number mb-4 ${item.color}`}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 1 + index * 0.1, type: "spring", stiffness: 200 }}
                      >
                        {item.metric}
                      </motion.div>
                      <p className="text-muted-foreground leading-relaxed">
                        {item.description}
                      </p>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;