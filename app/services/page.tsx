import { SectionHeader } from "@/components/section-header";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  ArrowRight,
  Bot,
  Brain,
  ChartBar,
  Code2,
  Database,
  LineChart,
  Link2,
  MessageSquareCode,
  Search,
  Share2,
  Sparkles,
  Wallet,
} from "lucide-react";
import Link from "next/link";

interface ServiceFeatureProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

function ServiceFeature({ title, description, icon }: ServiceFeatureProps) {
  return (
    <div className="flex space-x-4">
      <div className="mt-1 flex-shrink-0">{icon}</div>
      <div>
        <h4 className="text-lg font-semibold">{title}</h4>
        <p className="mt-2 text-muted-foreground">{description}</p>
      </div>
    </div>
  );
}

export default function ServicesPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="container py-24">
        <SectionHeader
          title="Our Services"
          description="Comprehensive technology solutions tailored to your business needs"
        />
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <Card className="flex flex-col p-8">
            <Brain className="h-12 w-12 text-blue-600" />
            <h3 className="mt-4 text-xl font-semibold">AI Solutions</h3>
            <p className="mt-2 flex-1 text-muted-foreground">
              Custom AI development and intelligent automation solutions
            </p>
            <Link
              href="#ai-solutions"
              className="mt-4 flex items-center text-sm font-medium text-blue-600 hover:underline dark:text-blue-400"
            >
              Learn more <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </Card>
          <Card className="flex flex-col p-8">
            <Code2 className="h-12 w-12 text-green-600" />
            <h3 className="mt-4 text-xl font-semibold">Blockchain Strategy</h3>
            <p className="mt-2 flex-1 text-muted-foreground">
              Web3 integration and smart contract development
            </p>
            <Link
              href="#blockchain"
              className="mt-4 flex items-center text-sm font-medium text-green-600 hover:underline dark:text-green-400"
            >
              Learn more <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </Card>
          <Card className="flex flex-col p-8">
            <LineChart className="h-12 w-12 text-purple-600" />
            <h3 className="mt-4 text-xl font-semibold">Digital Marketing</h3>
            <p className="mt-2 flex-1 text-muted-foreground">
              Marketing automation and SEO optimization
            </p>
            <Link
              href="#marketing"
              className="mt-4 flex items-center text-sm font-medium text-purple-600 hover:underline dark:text-purple-400"
            >
              Learn more <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </Card>
          <Card className="flex flex-col p-8">
            <Sparkles className="h-12 w-12 text-orange-600" />
            <h3 className="mt-4 text-xl font-semibold">API Integration</h3>
            <p className="mt-2 flex-1 text-muted-foreground">
              Custom API development and system integration
            </p>
            <Link
              href="#api"
              className="mt-4 flex items-center text-sm font-medium text-orange-600 hover:underline dark:text-orange-400"
            >
              Learn more <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </Card>
        </div>
      </section>

      {/* AI Solutions Section */}
      <section id="ai-solutions" className="border-t bg-muted/50">
        <div className="container py-24">
          <div className="mx-auto max-w-5xl">
            <div className="rounded-lg bg-blue-600/10 p-4">
              <Brain className="h-12 w-12 text-blue-600" />
            </div>
            <h2 className="mt-8 text-3xl font-bold tracking-tighter sm:text-4xl">
              AI Solutions
            </h2>
            <p className="mt-4 text-muted-foreground sm:text-xl sm:leading-8">
              Harness the power of artificial intelligence to automate processes,
              gain insights, and drive innovation in your business.
            </p>
            <div className="mt-12 grid gap-8 sm:grid-cols-2">
              <ServiceFeature
                icon={<Bot className="h-6 w-6 text-blue-600" />}
                title="Natural Language Processing"
                description="Advanced text analysis, sentiment analysis, and language understanding capabilities"
              />
              <ServiceFeature
                icon={<MessageSquareCode className="h-6 w-6 text-blue-600" />}
                title="Custom AI Development"
                description="Tailored AI solutions designed to address your specific business challenges"
              />
              <ServiceFeature
                icon={<Database className="h-6 w-6 text-blue-600" />}
                title="Machine Learning Models"
                description="Predictive analytics and pattern recognition systems"
              />
              <ServiceFeature
                icon={<ChartBar className="h-6 w-6 text-blue-600" />}
                title="AI-Powered Analytics"
                description="Intelligent data analysis and business intelligence solutions"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Blockchain Section */}
      <section id="blockchain" className="border-t">
        <div className="container py-24">
          <div className="mx-auto max-w-5xl">
            <div className="rounded-lg bg-green-600/10 p-4">
              <Code2 className="h-12 w-12 text-green-600" />
            </div>
            <h2 className="mt-8 text-3xl font-bold tracking-tighter sm:text-4xl">
              Blockchain Strategy
            </h2>
            <p className="mt-4 text-muted-foreground sm:text-xl sm:leading-8">
              Transform your business with secure, transparent, and efficient
              blockchain solutions.
            </p>
            <div className="mt-12 grid gap-8 sm:grid-cols-2">
              <ServiceFeature
                icon={<Wallet className="h-6 w-6 text-green-600" />}
                title="Smart Contract Development"
                description="Secure and efficient smart contracts for automated business processes"
              />
              <ServiceFeature
                icon={<Share2 className="h-6 w-6 text-green-600" />}
                title="Web3 Integration"
                description="Seamless integration of Web3 technologies into your existing systems"
              />
              <ServiceFeature
                icon={<Database className="h-6 w-6 text-green-600" />}
                title="DApp Development"
                description="Custom decentralized applications for various use cases"
              />
              <ServiceFeature
                icon={<Link2 className="h-6 w-6 text-green-600" />}
                title="Blockchain Consulting"
                description="Strategic guidance on blockchain implementation and optimization"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Digital Marketing Section */}
      <section id="marketing" className="border-t bg-muted/50">
        <div className="container py-24">
          <div className="mx-auto max-w-5xl">
            <div className="rounded-lg bg-purple-600/10 p-4">
              <LineChart className="h-12 w-12 text-purple-600" />
            </div>
            <h2 className="mt-8 text-3xl font-bold tracking-tighter sm:text-4xl">
              Digital Marketing
            </h2>
            <p className="mt-4 text-muted-foreground sm:text-xl sm:leading-8">
              Drive growth with data-driven digital marketing strategies and
              automation.
            </p>
            <div className="mt-12 grid gap-8 sm:grid-cols-2">
              <ServiceFeature
                icon={<ChartBar className="h-6 w-6 text-purple-600" />}
                title="Marketing Automation"
                description="Streamlined marketing workflows and campaign management"
              />
              <ServiceFeature
                icon={<Search className="h-6 w-6 text-purple-600" />}
                title="SEO Optimization"
                description="Technical SEO and content optimization for better visibility"
              />
              <ServiceFeature
                icon={<Database className="h-6 w-6 text-purple-600" />}
                title="Analytics & Reporting"
                description="Comprehensive analytics and performance tracking"
              />
              <ServiceFeature
                icon={<Bot className="h-6 w-6 text-purple-600" />}
                title="AI-Powered Marketing"
                description="Intelligent marketing solutions using AI and machine learning"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t">
        <div className="container py-24">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              Ready to Transform Your Business?
            </h2>
            <p className="mt-4 text-muted-foreground sm:text-xl sm:leading-8">
              Let's discuss how our services can help you achieve your goals.
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <Button asChild size="lg">
                <Link href="/contact">Get Started</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/portfolio">View Our Work</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}