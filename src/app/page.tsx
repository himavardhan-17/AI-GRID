
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CountdownTimer } from "@/components/countdown-timer";
import { Calendar, Users, Lightbulb, Mail, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const highlights = [
  {
    icon: Calendar,
    title: "Event Schedule",
    description: "Explore three days of talks, workshops, and panels.",
    link: "/schedule",
  },
  {
    icon: Users,
    title: "Our Speakers",
    description: "Meet the experts and pioneers shaping our future.",
    link: "/speakers",
  },
  {
    icon: Lightbulb,
    title: "Student Projects",
    description: "Witness innovative projects from the next generation.",
    link: "/projects",
  },
  {
    icon: Mail,
    title: "Contact Us",
    description: "Get in touch with the organizers for any queries.",
    link: "/contact",
  },
];

const logos = [
    { src: "https://firebasestorage.googleapis.com/v0/b/inspire-x-1c8c6.firebasestorage.app/o/channels4_profile__1___2_-removebg-preview.png?alt=media&token=959d85e2-9d67-484b-ab6d-86d815305a4e", alt: "Vardhaman College Logo", width: 100, height: 100 },
    { src: "https://firebasestorage.googleapis.com/v0/b/inspire-x-1c8c6.firebasestorage.app/o/KLH_Logo.png?alt=media&token=5296f729-efdf-491f-9179-5ed4c2132d0e", alt: "KLU HYD Logo", width: 120, height: 60 },
    { src: "https://firebasestorage.googleapis.com/v0/b/inspire-x-1c8c6.firebasestorage.app/o/govt.png?alt=media&token=1da33bb8-c069-476b-b07d-ccf0f5235d74", alt: "MeitY Logo", width: 120, height: 60 },
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="relative w-full pt-20 pb-24 md:pt-32 md:pb-40 text-center overflow-hidden grid-bg">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-4xl space-y-6">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm font-medium">
              January 6-8, 2025 | Vardhaman College of Engineering
            </div>
            <div className="flex justify-center items-center gap-4">
              <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl leading-tight">
                AI-GRID
              </h1>
            </div>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Global Resilience & Intelligence in Distribution – AI for Smart Grid (AI-GRID)
            </p>
             <p className="text-lg md:text-xl text-primary font-semibold">
              Resilience • Innovation • Efficiency (RIE)
            </p>
            <div className="pt-8">
              <CountdownTimer />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-background pb-16 pt-4">
        <div className="container">
          <h3 className="text-sm font-semibold tracking-wider text-muted-foreground uppercase mb-6 text-center">Our Organizers</h3>
          <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
              <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
                  {logos.map(logo => (
                      <li key={logo.alt}>
                          <Image src={logo.src} alt={logo.alt} width={logo.width} height={logo.height} className="object-contain" />
                      </li>
                  ))}
                   {logos.map(logo => (
                      <li key={`${logo.alt}-2`} aria-hidden="true">
                          <Image src={logo.src} alt={logo.alt} width={logo.width} height={logo.height} className="object-contain" />
                      </li>
                  ))}
              </ul>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {highlights.map((item, index) => (
              <div key={item.title} className="animate-in fade-in-0 slide-in-from-bottom-10 duration-500" style={{ animationDelay: `${index * 100}ms`}}>
                <Card className="h-full bg-background/50 hover:bg-background transition-colors duration-300 group hover:-translate-y-2">
                  <CardHeader className="flex flex-row items-center gap-4 pb-4">
                    <div className="rounded-md bg-primary/10 p-2 border border-primary/20">
                      <item.icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="font-headline text-xl">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{item.description}</p>
                    <Button variant="link" asChild className="p-0 h-auto mt-4 text-primary">
                      <Link href={item.link}>
                        Learn More <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">Join the Forefront of Innovation</h2>
            <p className="mt-4 text-muted-foreground md:text-lg">
              The AI-GRID conference is a premier event for researchers, industry professionals, and students to explore the latest advancements in AI and smart grid technologies.
            </p>
            <Button asChild size="lg" className="mt-8 group transition-all duration-300 futuristic-glow">
              <Link href="/register">
                Secure Your Spot
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
