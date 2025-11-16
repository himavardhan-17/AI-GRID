
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="container mx-auto py-12 md:py-16">
      <div className="mx-auto max-w-4xl text-center mb-12 animate-in fade-in-0 slide-in-from-top-10 duration-500">
        <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl">
          Get in Touch
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          We're here to help. Reach out with any questions you may have.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 max-w-6xl mx-auto">
        <div className="animate-in fade-in-0 slide-in-from-left-10 duration-500 delay-200">
          <Card className="h-full">
            <CardHeader>
              <CardTitle className="font-headline text-2xl">Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 mt-1">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">Venue</h3>
                  <p className="text-muted-foreground">
                    Vardhaman College of Engineering,
                    <br />
                    Kacharam, Shamshabad,
                    <br />
                    Hyderabad, Telangana 501218
                  </p>
                </div>
              </div>
              {/* <div className="flex items-start gap-4">
                <div className="flex-shrink-0 mt-1">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">General Inquiries</h3>
                  <a href="mailto:contact@aigridsummit.com" className="text-muted-foreground hover:text-primary transition-colors">
                    contact@aigridsummit.com
                  </a>
                </div>
              </div> */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 mt-1">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">Organizers</h3>
                  <p className="text-muted-foreground">Dr MD Asif – Dean student affairs cell, VCE 9701526805</p>
                  <p className="text-muted-foreground">Dr.T Anuradha Devi – Associate Dean,IQAC, VCE 8886545663</p>
                  <p className="text-muted-foreground">Dr. S. Ravi Teja. Assistant Professor, EEE, KLEF 8500916362</p>
                  <p className="text-muted-foreground">Dr.Patil Mounica – Asst proff ,eee, VCE 7702691053</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="animate-in fade-in-0 slide-in-from-right-10 duration-500 delay-300">
            <Card className="overflow-hidden h-full">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3810.370535390772!2d78.3070993148744!3d17.25368388815984!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcbbc332898953d%3A0x25140228b375b436!2sVardhaman%20College%20of%20Engineering!5e0!3m2!1sen!2sin!4v1689234567890!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0, minHeight: '400px' }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Venue Location"
                ></iframe>
            </Card>
        </div>
      </div>
    </div>
  );
}
