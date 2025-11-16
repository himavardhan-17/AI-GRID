import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Info } from "lucide-react";

export default function RegisterPage() {
  const registrationUrl = "https://forms.gle/ViamdwKmREaeMBsw6";

  return (
    <div className="container mx-auto py-12 md:py-16">
      <div className="mx-auto max-w-4xl text-center mb-12 animate-in fade-in-0 slide-in-from-top-10 duration-500">
        <div className="flex justify-center items-center gap-4">
          <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl">
            Register for AI-GRID
          </h1>
        </div>
        <p className="mt-4 text-lg text-muted-foreground">
          Secure your place at the intersection of AI and energy.
        </p>
      </div>

      <div className="max-w-4xl mx-auto animate-in fade-in-0 slide-in-from-bottom-10 duration-500 delay-200">
        <Card className="overflow-hidden">
            <CardContent className="p-0">
                <div className="aspect-w-1 aspect-h-1 md:aspect-w-4 md:aspect-h-3">
                <iframe
                    src={registrationUrl}
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    marginWidth={0}
                    marginHeight={0}
                    style={{ border: 'none', minHeight: '800px' }}
                    allowFullScreen
                    className="w-full h-full"
                >
                    Loading registration form...
                </iframe>
                </div>
            </CardContent>
        </Card>
        <Alert className="mt-8 bg-primary/5 border-primary/20">
            <Info className="h-4 w-4 text-primary" />
            <AlertTitle className="text-primary">Having trouble with the form?</AlertTitle>
            <AlertDescription>
                If the embedded form does not load, you can access it directly by clicking here: 
                <a href={registrationUrl} target="_blank" rel="noopener noreferrer" className="font-semibold underline hover:text-primary/80">
                    Registration Link
                </a>.
            </AlertDescription>
        </Alert>
      </div>
    </div>
  );
}
