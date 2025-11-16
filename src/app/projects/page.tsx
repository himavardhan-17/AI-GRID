import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, Award } from "lucide-react";

const eligibleAreas = [
  "AI in Smart Grids",
  "EV Systems",
  "Renewable Energy",
  "Power Electronics",
  "IoT in Energy",
];

export default function ProjectsPage() {
  return (
    <div className="container mx-auto py-12 md:py-16">
      <div className="mx-auto max-w-4xl text-center mb-12 animate-in fade-in-0 slide-in-from-top-10 duration-500">
        <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl">
          Student Project Demo
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Showcase your innovation at AI-GRID.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 max-w-6xl mx-auto">
        <div className="animate-in fade-in-0 slide-in-from-left-10 duration-500 delay-200">
            <Card className="h-full">
            <CardHeader>
                <CardTitle className="font-headline text-2xl">Format & Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
                <p>
                The Student Project Demonstration provides a platform for students to present their innovative work to experts and peers.
                </p>
                <ul className="space-y-2">
                <li><strong>Timing:</strong> 2:15 – 4:00 PM (Day 3)</li>
                <li><strong>Mode:</strong> Offline + Online</li>
                <li><strong>Format:</strong> 5–7 minutes per team</li>
                </ul>
            </CardContent>
            </Card>
        </div>

        <div className="animate-in fade-in-0 slide-in-from-right-10 duration-500 delay-300">
            <Card className="h-full">
            <CardHeader>
                <CardTitle className="font-headline text-2xl">Eligible Areas</CardTitle>
            </CardHeader>
            <CardContent>
                <ul className="space-y-3">
                {eligibleAreas.map((area) => (
                    <li key={area} className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-foreground/80">{area}</span>
                    </li>
                ))}
                </ul>
            </CardContent>
            </Card>
        </div>

        <div className="md:col-span-2 animate-in fade-in-0 slide-in-from-bottom-10 duration-500 delay-400">
            <Card>
            <CardHeader>
              <CardTitle className="font-headline text-2xl flex items-center gap-2">
                <Award className="h-6 w-6 text-primary" />
                Certificates
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-muted-foreground">
                <p>Certificates will be provided to all participating teams in recognition of their hard work and contribution to the event.</p>
            </CardContent>
            </Card>
        </div>
      </div>
    </div>
  );
}
