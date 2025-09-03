import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, GitBranch, TrendingUp, Database, Shield } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "AWS Cost Optimization & CI/CD Acceleration",
      description: "Comprehensive multi-account AWS platform optimization with Infrastructure as Code and automated deployment pipelines.",
      context: "Multi-account AWS platform with high infrastructure spend and slow CI/CD processes affecting team productivity.",
      icon: TrendingUp,
      color: "text-success",
      bgColor: "bg-success/10",
      stack: ["AWS", "EKS", "Terraform", "Helm", "GitLab CI", "Grafana", "EFK"],
      outcomes: [
        "~30% AWS cost reduction through strategic resource optimization",
        "~50% faster deployments via automated pipeline design",
        "Improved governance with centralized tagging and monitoring",
        "Enhanced SLOs across all development teams"
      ],
      actions: [
        "Implemented autoscaling + spot/reserved instance strategy",
        "Created granular resource tagging and cost allocation",
        "Built reusable Terraform and Helm modules",
        "Designed efficient GitLab CI/CD pipelines",
        "Established comprehensive monitoring with Grafana/EFK"
      ],
      metrics: {
        costReduction: "30%",
        deploymentSpeed: "50%",
        accounts: "10+"
      }
    },
    {
      title: "Scalable Data Platform on EKS",
      description: "End-to-end data platform implementation using Kubernetes for analytics, streaming, and workflow orchestration.",
      context: "Need for scalable data infrastructure supporting real-time analytics and batch processing workloads.",
      icon: Database,
      color: "text-aws",
      bgColor: "bg-aws/10",
      stack: ["Kafka", "EKS", "Apache Druid", "Trino", "Apache Superset", "Apache Airflow", "Helm"],
      outcomes: [
        "Reliable streaming data processing at scale",
        "Improved query performance for analytics workloads",
        "Versioned DAG deployments with safe rollbacks",
        "Unified monitoring and observability stack"
      ],
      actions: [
        "Deployed self-managed Kafka cluster on EKS",
        "Configured Apache Druid for real-time analytics",
        "Set up Trino for federated query processing",
        "Implemented Apache Superset for data visualization",
        "Built Airflow CI/CD pipeline for DAG management"
      ],
      metrics: {
        uptime: "99.9%",
        dataProcessed: "TB/day",
        services: "5+"
      }
    },
    {
      title: "Banking APIs & Developer Portal",
      description: "Secure microservices architecture for banking operations with comprehensive developer experience platform.",
      context: "Multiple banking services requiring secure APIs with improved discoverability and developer adoption.",
      icon: Shield,
      color: "text-accent",
      bgColor: "bg-accent/10",
      stack: ["Laravel", "Lumen", "React", "Elasticsearch", "Oracle", "Jenkins"],
      outcomes: [
        "Faster internal API adoption by development teams",
        "Improved service reliability and performance",
        "Enhanced security with encryption layers",
        "Streamlined developer onboarding process"
      ],
      actions: [
        "Built secure Lumen/Laravel microservices",
        "Implemented comprehensive encryption and auth layers",
        "Created Elasticsearch-powered API catalog",
        "Developed React-based developer portal",
        "Established CI/CD pipelines with Jenkins"
      ],
      metrics: {
        apis: "20+",
        uptime: "99.8%",
        developers: "50+"
      }
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-foreground mb-4">
              Featured Projects & Case Studies
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Real-world implementations showcasing infrastructure optimization, 
              scalable architectures, and measurable business impact
            </p>
          </div>

          <div className="space-y-12">
            {projects.map((project, index) => {
              const Icon = project.icon;
              return (
                <Card key={index} className="card-hover border-card-border overflow-hidden">
                  <CardContent className="p-0">
                    <div className="grid lg:grid-cols-3 gap-0">
                      {/* Project Header & Context */}
                      <div className="lg:col-span-2 p-8">
                        <div className="flex items-start gap-4 mb-6">
                          <div className={`w-16 h-16 rounded-2xl ${project.bgColor} flex items-center justify-center flex-shrink-0`}>
                            <Icon className={`w-8 h-8 ${project.color}`} />
                          </div>
                          <div>
                            <h3 className="text-2xl font-heading font-bold text-foreground mb-2">
                              {project.title}
                            </h3>
                            <p className="text-muted-foreground leading-relaxed">
                              {project.description}
                            </p>
                          </div>
                        </div>

                        <div className="space-y-6">
                          <div>
                            <h4 className="text-lg font-heading font-semibold text-foreground mb-3">
                              Context & Challenge
                            </h4>
                            <p className="text-muted-foreground leading-relaxed">
                              {project.context}
                            </p>
                          </div>

                          <div>
                            <h4 className="text-lg font-heading font-semibold text-foreground mb-3">
                              Actions Taken
                            </h4>
                            <ul className="space-y-2">
                              {project.actions.map((action, i) => (
                                <li key={i} className="flex items-start gap-3">
                                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                                  <span className="text-muted-foreground leading-relaxed">
                                    {action}
                                  </span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div>
                            <h4 className="text-sm font-semibold text-muted-foreground mb-3">
                              Technology Stack
                            </h4>
                            <div className="flex flex-wrap gap-2">
                              {project.stack.map((tech, i) => (
                                <Badge key={i} variant="secondary" className="text-xs">
                                  {tech}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Outcomes & Metrics */}
                      <div className="bg-secondary/30 p-8 border-l border-card-border">
                        <div className="space-y-6">
                          <div>
                            <h4 className="text-lg font-heading font-semibold text-foreground mb-4">
                              Key Outcomes
                            </h4>
                            <ul className="space-y-3">
                              {project.outcomes.map((outcome, i) => (
                                <li key={i} className="flex items-start gap-3">
                                  <div className="w-2 h-2 bg-success rounded-full mt-2 flex-shrink-0" />
                                  <span className="text-muted-foreground text-sm leading-relaxed">
                                    {outcome}
                                  </span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div>
                            <h4 className="text-lg font-heading font-semibold text-foreground mb-4">
                              Impact Metrics
                            </h4>
                            <div className="space-y-4">
                              {Object.entries(project.metrics).map(([key, value], i) => (
                                <div key={i} className="text-center p-3 rounded-lg bg-metric-bg">
                                  <div className="text-2xl font-heading font-bold text-metric mb-1">
                                    {value}
                                  </div>
                                  <div className="text-xs text-muted-foreground capitalize">
                                    {key.replace(/([A-Z])/g, ' $1').trim()}
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>

                          <div className="pt-4 border-t border-card-border">
                            <Button variant="outline" size="sm" className="w-full">
                              <GitBranch className="w-4 h-4 mr-2" />
                              View Case Study
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="text-center mt-16">
            <p className="text-muted-foreground mb-6">
              Interested in learning more about these implementations?
            </p>
            <Button variant="primary" size="lg">
              <ExternalLink className="w-5 h-5 mr-2" />
              Request Detailed Case Studies
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;