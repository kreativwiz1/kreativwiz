import { SectionHeader } from "@/components/section-header";
import { StatCard } from "@/components/stat-card";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Award,
  Brain,
  Code2,
  FileCode2,
  LineChart,
  Users,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="container py-24">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-24">
          <div className="flex flex-col justify-center space-y-8">
            <div>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Empowering Businesses Through Technology
              </h1>
              <p className="mt-4 text-muted-foreground sm:text-xl sm:leading-8">
                KreativWIZ is a technology consulting firm specializing in AI solutions, blockchain strategy, 
                and digital marketing automation. Founded by Yahaya Kenny, we're committed to driving 
                innovation and digital transformation.
              </p>
            </div>
            <div className="flex flex-col gap-4 min-[400px]:flex-row">
              <Button asChild size="lg">
                <Link href="/contact">Work with Us</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/portfolio">View Portfolio</Link>
              </Button>
            </div>
          </div>
          <div className="relative aspect-square overflow-hidden rounded-xl bg-muted lg:aspect-auto">
            <Image
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c"
              alt="Team collaboration"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="container py-24">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <StatCard
            icon={Brain}
            value="50+"
            label="AI Solutions Delivered"
          />
          <StatCard
            icon={Code2}
            value="30+"
            label="Blockchain Projects"
          />
          <StatCard
            icon={LineChart}
            value="100+"
            label="Marketing Campaigns"
          />
          <StatCard
            icon={Users}
            value="200+"
            label="Happy Clients"
          />
        </div>
      </section>

      {/* Mission Section */}
      <section className="container py-24">
        <SectionHeader
          title="Our Mission"
          description="To empower businesses with cutting-edge technology solutions that drive growth and innovation"
          className="mb-12"
        />
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <Card className="flex flex-col p-8">
            <Award className="h-12 w-12 text-primary" />
            <h3 className="mt-4 text-xl font-semibold">Excellence</h3>
            <p className="mt-2 text-muted-foreground">
              Delivering high-quality solutions that exceed expectations and drive real business value
            </p>
          </Card>
          <Card className="flex flex-col p-8">
            <FileCode2 className="h-12 w-12 text-primary" />
            <h3 className="mt-4 text-xl font-semibold">Innovation</h3>
            <p className="mt-2 text-muted-foreground">
              Staying at the forefront of technology to provide cutting-edge solutions
            </p>
          </Card>
          <Card className="flex flex-col p-8">
            <Users className="h-12 w-12 text-primary" />
            <h3 className="mt-4 text-xl font-semibold">Partnership</h3>
            <p className="mt-2 text-muted-foreground">
              Building long-term relationships based on trust and mutual success
            </p>
          </Card>
        </div>
      </section>

      {/* Team Section */}
      <section className="container py-24">
        <SectionHeader
          title="Leadership"
          description="Meet the visionary behind KreativWIZ"
          className="mb-12"
        />
        <div className="mx-auto max-w-2xl">
          <Card className="overflow-hidden">
            <div className="aspect-[4/3] relative">
              <Image
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d"
                alt="Yahaya Kenny"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-semibold">Yahaya Kenny</h3>
              <p className="text-muted-foreground">Founder & CEO</p>
              <p className="mt-4">
                A technology enthusiast and innovator with extensive experience in AI, blockchain, 
                and digital marketing. Yahaya has led numerous successful projects and continues 
                to drive KreativWIZ's mission of empowering businesses through technology.
              </p>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
}