import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Brain, Code2, LineChart, Sparkles } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative">
        <div className="container flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center py-24 text-center">
          <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
          <div className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-100 via-transparent to-pink-100 opacity-20 dark:from-blue-950 dark:to-pink-950"></div>
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
            Innovating with{" "}
            <span className="bg-gradient-to-r from-blue-600 to-pink-600 bg-clip-text text-transparent">
              AI, Blockchain & Digital Marketing
            </span>
          </h1>
          <p className="mt-4 max-w-[42rem] text-muted-foreground sm:text-xl sm:leading-8">
            Building intelligent solutions for a smarter tomorrow. Expert consulting in AI, blockchain
            strategy, and digital marketing automation.
          </p>
          <div className="mt-8 flex gap-4">
            <Button asChild size="lg">
              <Link href="/services">Explore Services</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/contact">Get Free Consultation</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="container py-24">
        <h2 className="text-center text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          Our Services
        </h2>
        <p className="mx-auto mt-4 max-w-[42rem] text-center text-muted-foreground sm:text-xl sm:leading-8">
          Comprehensive solutions tailored to your business needs
        </p>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <Card className="flex flex-col p-8">
            <Brain className="h-12 w-12 text-blue-600" />
            <h3 className="mt-4 text-xl font-semibold">AI Solutions</h3>
            <p className="mt-2 text-muted-foreground">
              Custom AI development, NLP, and intelligent automation solutions
            </p>
          </Card>
          <Card className="flex flex-col p-8">
            <Code2 className="h-12 w-12 text-green-600" />
            <h3 className="mt-4 text-xl font-semibold">Blockchain Strategy</h3>
            <p className="mt-2 text-muted-foreground">
              Web3 integration, dApps development, and smart contract solutions
            </p>
          </Card>
          <Card className="flex flex-col p-8">
            <LineChart className="h-12 w-12 text-purple-600" />
            <h3 className="mt-4 text-xl font-semibold">Digital Marketing</h3>
            <p className="mt-2 text-muted-foreground">
              Marketing automation, analytics, and SEO optimization
            </p>
          </Card>
          <Card className="flex flex-col p-8">
            <Sparkles className="h-12 w-12 text-orange-600" />
            <h3 className="mt-4 text-xl font-semibold">API Integration</h3>
            <p className="mt-2 text-muted-foreground">
              Custom API development, cloud services, and system integration
            </p>
          </Card>
        </div>
      </section>
    </div>
  );
}