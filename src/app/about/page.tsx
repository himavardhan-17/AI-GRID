
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Building, Users } from "lucide-react";
import Image from "next/image";

export default function AboutPage() {
  const objectives = [
    "Promote awareness on AI-driven Smart Grids",
    "Strengthen RIE: Resilience, Innovation & Efficiency",
    "Provide expert interactions & student engagement",
    "Support learning through talks and project demonstrations",
    "Bridge academia–industry knowledge",
  ];

  const organizers = [
    "Vardhaman college",
    "KLU HYD",
    "Department of Electrical & Electronics Engineering",
  ];

  const logos = [
    { src: "https://firebasestorage.googleapis.com/v0/b/inspire-x-1c8c6.firebasestorage.app/o/channels4_profile__1___2_-removebg-preview.png?alt=media&token=f90e0552-cfd6-4be0-817c-ed49793f402b", alt: "Vardhaman College Logo", width: 100, height: 100 },
    { src: "https://firebasestorage.googleapis.com/v0/b/inspire-x-1c8c6.firebasestorage.app/o/govt.png?alt=media&token=1da33bb8-c069-476b-b07d-ccf0f5235d74", alt: "MeitY Logo", width: 120, height: 60 },
    { src: "https://firebasestorage.googleapis.com/v0/b/inspire-x-1c8c6.firebasestorage.app/o/Ai%20logo.jpeg?alt=media&token=8d59fb2c-3812-4acf-a7ca-8f472a6aaaee", alt: "Ai Logo", width: 120, height: 60 },
    { src: "https://firebasestorage.googleapis.com/v0/b/inspire-x-1c8c6.firebasestorage.app/o/KLH_Logo.png?alt=media&token=5296f729-efdf-491f-9179-5ed4c2132d0e", alt: "KLU HYD Logo", width: 120, height: 60 },
    { src: "https://firebasestorage.googleapis.com/v0/b/inspire-x-1c8c6.firebasestorage.app/o/vec.jpeg?alt=media&token=41e0a80c-09fd-4554-82a8-bd17ead91b02", alt: "VEC Logo", width: 120, height: 60 },
];

  return (
    <div className="container mx-auto py-12 md:py-16">
      <div className="mx-auto max-w-4xl text-center mb-12 animate-in fade-in-0 slide-in-from-top-10 duration-500">
        <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl">
          About AI-GRID
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Fostering Resilience, Innovation, and Efficiency in Power Distribution.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-3 max-w-6xl mx-auto">
        <div className="lg:col-span-3 animate-in fade-in-0 slide-in-from-bottom-10 duration-500 delay-100">
          <Card>
            <CardHeader>
              <CardTitle className="font-headline text-2xl">About the Event</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                AI-GRID Summit is a 3-day hybrid event focusing on how Artificial Intelligence is transforming
                power distribution networks to become resilient, innovative, and efficient. It brings together
                IIT/NIT experts, industry leaders, and students.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="lg:col-span-2 animate-in fade-in-0 slide-in-from-bottom-10 duration-500 delay-200">
          <Card className="h-full">
            <CardHeader>
              <CardTitle className="font-headline text-2xl flex items-center gap-2">
                <Check className="h-6 w-6 text-primary" /> Objectives
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {objectives.map((objective) => (
                  <li key={objective} className="flex items-start">
                    <div className="flex-shrink-0 mt-1 mr-3">
                      <div className="h-2 w-2 rounded-full bg-primary/50" />
                    </div>
                    <span className="text-muted-foreground">{objective}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="lg:col-span-1 animate-in fade-in-0 slide-in-from-bottom-10 duration-500 delay-300">
          <Card className="h-full">
            <CardHeader>
              <CardTitle className="font-headline text-2xl flex items-center gap-2">
                <Users className="h-6 w-6 text-primary" /> Organizers
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)] mb-6">
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
              <ul className="space-y-3">
                {organizers.map((organizer) => (
                  <li key={organizer} className="flex items-start">
                     <div className="flex-shrink-0 mt-1 mr-3">
                      <Building className="h-4 w-4 text-primary/80" />
                    </div>
                    <span className="text-muted-foreground">{organizer}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
