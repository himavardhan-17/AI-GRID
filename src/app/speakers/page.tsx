import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { speakersData } from "@/lib/data";
import { cn } from "@/lib/utils";
import Image from "next/image";

export default function SpeakersPage() {
  return (
    <div className="container mx-auto py-12 md:py-16">
      <div className="mx-auto max-w-4xl text-center mb-12 animate-in fade-in-0 slide-in-from-top-10 duration-500">
        <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl">
          Meet Our Speakers
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Leading experts and innovators in AI and smart grid technology.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {speakersData.map((speaker, index) => (
          <div key={speaker.id} className="animate-in fade-in-0 slide-in-from-bottom-10 duration-500" style={{ animationDelay: `${index * 100}ms` }}>
            <Card className="h-full overflow-hidden group transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
              <CardHeader className="flex flex-col items-center gap-4 p-4 text-center">
                  <Avatar className="h-20 w-20">
                    <AvatarImage asChild src={speaker.imageUrl}>
                        <Image src={speaker.imageUrl} alt={`Photo of ${speaker.name}`} width={80} height={80} data-ai-hint={speaker.imageHint} />
                    </AvatarImage>
                    <AvatarFallback>{speaker.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <CardTitle className="font-headline text-xl">{speaker.name}</CardTitle>
                    <CardDescription>{speaker.affiliation}</CardDescription>
                  </div>
              </CardHeader>
              <CardContent className="p-4 pt-0">
                <p className="text-sm text-foreground/80 italic text-center">"{speaker.topic}"</p>
              </CardContent>
              <CardFooter className="justify-center p-4 pt-0">
                 <Badge variant={
                    speaker.mode === "Hybrid" ? "default"
                    : speaker.mode === "Online" ? "secondary"
                    : "outline"
                  } className={cn(
                      'transition-all duration-300',
                      speaker.mode === 'Hybrid' && 'bg-primary/80',
                      speaker.mode === 'Online' && 'bg-blue-500'
                  )}>
                    {speaker.mode} Presentation
                  </Badge>
              </CardFooter>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}
