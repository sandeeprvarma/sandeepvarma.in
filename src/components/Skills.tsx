import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Cloud, Container, Cog, Database, Code, Monitor } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Cloud & AWS",
      icon: Cloud,
      color: "text-aws",
      bgColor: "bg-aws/10",
      skills: [
        "EC2", "EKS/ECS", "RDS", "S3", "CloudFront", "IAM", "Route53", 
        "ElastiCache", "DynamoDB", "DocumentDB", "OpenSearch", "Lambda", 
        "VPC", "CloudWatch", "CloudTrail"
      ]
    },
    {
      title: "Infrastructure as Code",
      icon: Cog,
      color: "text-accent",
      bgColor: "bg-accent/10",
      skills: [
        "Terraform", "TOFU", "Helm", "CloudFormation", "Ansible", "Vagrant"
      ]
    },
    {
      title: "Containers & Orchestration",
      icon: Container,
      color: "text-success",
      bgColor: "bg-success/10",
      skills: [
        "Docker", "Kubernetes", "EKS", "Helm Charts", "Container Registry"
      ]
    },
    {
      title: "CI/CD & DevOps",
      icon: Cog,
      color: "text-metric",
      bgColor: "bg-metric/10",
      skills: [
        "GitLab CI", "GitHub Actions", "Jenkins", "TeamCity", "Nexus", "Artifactory", "Git"
      ]
    },
    {
      title: "Data & Streaming",
      icon: Database,
      color: "text-aws",
      bgColor: "bg-aws/10",
      skills: [
        "Kafka (self-managed on EKS)", "Kinesis", "Apache Airflow", "Apache Druid", 
        "Trino", "Superset", "Elasticsearch"
      ]
    },
    {
      title: "Observability",
      icon: Monitor,
      color: "text-success",
      bgColor: "bg-success/10",
      skills: [
        "Prometheus", "Grafana", "EFK Stack", "ELK Stack", "Fluent Bit", "Kibana", "CloudWatch"
      ]
    },
    {
      title: "Programming & Scripting",
      icon: Code,
      color: "text-accent",
      bgColor: "bg-accent/10",
      skills: [
        "Python", "Bash", "YAML", "Groovy", "PHP (Laravel/Lumen)", "JavaScript", "ReactJS"
      ]
    },
    {
      title: "Systems & Tools",
      icon: Cog,
      color: "text-muted-foreground",
      bgColor: "bg-muted",
      skills: [
        "Linux (Ubuntu, Amazon Linux)", "Windows", "Gearman", "SVN", "Deploybot"
      ]
    }
  ];

  const certifications = [
    {
      name: "AWS Solutions Architect – Associate (SAA-C03)",
      date: "May 2023",
      issuer: "Amazon Web Services"
    }
  ];

  const achievements = [
    "Client certificates for excellent service (2022, 2023)",
    "Employee of the Quarter (Aug 2019)",
    "Employee of the Month (Sept 2016)",
    "Star of the Month (May 2016)"
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-foreground mb-4">
              Technical Skills & Expertise
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive DevOps and full-stack development skills across cloud platforms, 
              infrastructure automation, and modern development practices
            </p>
          </div>

          {/* Skills Matrix */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {skillCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <Card key={index} className="card-hover border-card-border">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-6">
                      <div className={`w-12 h-12 rounded-xl ${category.bgColor} flex items-center justify-center`}>
                        <Icon className={`w-6 h-6 ${category.color}`} />
                      </div>
                      <h3 className="text-lg font-heading font-semibold text-foreground">
                        {category.title}
                      </h3>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="flex flex-wrap gap-2">
                        {category.skills.map((skill, i) => (
                          <Badge key={i} variant="secondary" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Certifications */}
            <Card className="card-hover border-card-border">
              <CardContent className="p-8">
                <h3 className="text-2xl font-heading font-bold text-foreground mb-6">
                  Certifications
                </h3>
                <div className="space-y-4">
                  {certifications.map((cert, index) => (
                    <div key={index} className="p-4 rounded-lg bg-metric-bg border border-accent/20">
                      <h4 className="font-semibold text-foreground mb-2">
                        {cert.name}
                      </h4>
                      <div className="flex items-center justify-between text-sm text-muted-foreground">
                        <span>{cert.issuer}</span>
                        <span>{cert.date}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Achievements */}
            <Card className="card-hover border-card-border">
              <CardContent className="p-8">
                <h3 className="text-2xl font-heading font-bold text-foreground mb-6">
                  Recognition & Achievements
                </h3>
                <div className="space-y-4">
                  {achievements.map((achievement, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-success rounded-full mt-2 flex-shrink-0" />
                      <p className="text-muted-foreground leading-relaxed">
                        {achievement}
                      </p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;