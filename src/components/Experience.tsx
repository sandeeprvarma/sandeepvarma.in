import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, TrendingUp } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Associate DevOps Engineer",
      company: "Masscom Corporation (Multiplier)",
      location: "Remote",
      period: "Nov 2023 – Present",
      type: "Full-time",
      achievements: [
        "Cut AWS costs ~30% using autoscaling + spot/reserved strategy with granular tagging & governance",
        "Improved deployment speed ~50% by automating pipelines in GitLab CI/CD",
        "Designed & operated EKS clusters for microservices & data pipelines (HA, multi-account)",
        "Built reusable Terraform + Helm modules for 10+ AWS accounts; centralized IAM & cost optimization",
        "Deployed self-managed Kafka on EKS; automated config & scaling",
        "Set up Druid, Superset, Airflow, Trino on EKS; added Airflow DAG CI/CD",
        "Enhanced observability via EFK + Grafana; centralized logs/metrics",
        "Secured secrets with AWS Secrets Manager; executed zero-downtime upgrades (RDS, EKS, ElastiCache)",
        "Managed Okta hub-and-spoke SSO; contributed UI fixes (React) and PHP/Laravel patches"
      ],
      skills: ["AWS", "EKS", "Terraform", "Helm", "GitLab CI", "Kafka", "Grafana", "EFK", "Airflow"]
    },
    {
      title: "Associate Technical Specialist",
      company: "Concentrix Catalyst",
      location: "India",
      period: "Jun 2021 – Nov 2023",
      type: "Full-time",
      achievements: [
        "Owned application lifecycle: AWS infra, containerized env, backend, and production support",
        "Built Dockerized infra; designed GitLab CI/CD (build/test/deploy)",
        "Managed GitLab repos/branching/merge workflows",
        "Implemented monitoring, logging, and alerting for real-time health"
      ],
      skills: ["Docker", "GitLab CI", "AWS", "Monitoring", "Application Lifecycle"]
    },
    {
      title: "Delivery Senior Software Engineer",
      company: "Mphasis (Banking)",
      location: "India",
      period: "Dec 2019 – Jun 2021",
      type: "Full-time",
      achievements: [
        "Aadhaar microservices for auth/eKYC (Laravel + Oracle) with secure data flow and real-time mgmt",
        "Digital Services – Jupiter: REST APIs (Lumen) for accounts/FDs/schemes; encrypted service layers, admin UIs",
        "ESB Developer Portal: Searchable API catalog (Laravel + Elasticsearch + AJAX)",
        "OneAxis App: Employee management + push notifications (Lumen + React) with Jenkins CI/CD",
        "Vendor Management System: Rebuilt backend (Laravel), timesheets/PO/billing, RBAC, PDF/Excel reports"
      ],
      skills: ["Laravel", "Lumen", "React", "Oracle", "Elasticsearch", "Jenkins", "Microservices"]
    },
    {
      title: "Software Engineer",
      company: "Gracenote (Nielsen)",
      location: "India",
      period: "Sept 2017 – Dec 2019",
      type: "Full-time",
      achievements: [
        "Terraform one-click env provisioning; Jenkins CI/CD; AWS production ops",
        "Automated EPG ingest workflows (email/FTP/Drive) with custom scripts",
        "Zero-downtime operations; RCA + preventive measures"
      ],
      skills: ["Terraform", "Jenkins", "AWS", "Automation", "Production Operations"]
    },
    {
      title: "Associate Software Engineer",
      company: "InScripts",
      location: "India",
      period: "Oct 2014 – Mar 2017",
      type: "Full-time",
      achievements: [
        "CometChat feature/upgrades, AWS Elastic Beanstalk deployments, CMS plugins (WordPress, PHPFox, etc.)"
      ],
      skills: ["PHP", "AWS Elastic Beanstalk", "WordPress", "CMS Development"]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-foreground mb-4">
              Professional Experience
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              7+ years of full-stack development with 3+ years specializing in DevOps & FullStack Engineering
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-card-border hidden md:block" />

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div key={index} className="relative">
                  {/* Timeline dot */}
                  <div className="absolute left-6 w-4 h-4 bg-accent rounded-full border-4 border-background hidden md:block" />
                  
                  <Card className="ml-0 md:ml-20 card-hover border-card-border">
                    <CardContent className="p-8">
                      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                        <div className="space-y-2">
                          <h3 className="text-2xl font-heading font-bold text-foreground">
                            {exp.title}
                          </h3>
                          <p className="text-xl text-accent font-semibold">
                            {exp.company}
                          </p>
                          <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
                            <div className="flex items-center gap-2">
                              <Calendar className="w-4 h-4" />
                              <span>{exp.period}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <MapPin className="w-4 h-4" />
                              <span>{exp.location}</span>
                            </div>
                            <Badge variant="secondary">{exp.type}</Badge>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-6">
                        <div>
                          <h4 className="text-lg font-heading font-semibold text-foreground mb-4 flex items-center">
                            <TrendingUp className="w-5 h-5 mr-2 text-success" />
                            Key Achievements
                          </h4>
                          <ul className="space-y-3">
                            {exp.achievements.map((achievement, i) => (
                              <li key={i} className="flex items-start gap-3">
                                <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                                <span className="text-muted-foreground leading-relaxed">
                                  {achievement}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h4 className="text-sm font-semibold text-muted-foreground mb-3">
                            Technologies Used
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {exp.skills.map((skill, i) => (
                              <Badge key={i} variant="outline" className="text-xs">
                                {skill}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;