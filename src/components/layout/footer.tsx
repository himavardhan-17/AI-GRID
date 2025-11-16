import { Twitter, Linkedin, Github } from 'lucide-react';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="border-t">
      <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            <span className="font-medium font-headline">AI-GRID</span> &copy; {new Date().getFullYear()}. All Rights Reserved.
          </p>
        </div>
        <div className="flex items-center gap-4">
            <Link href="#" className="text-muted-foreground hover:text-primary transition-colors"><Twitter size={18} /></Link>
            <Link href="#" className="text-muted-foreground hover:text-primary transition-colors"><Linkedin size={18} /></Link>
            <Link href="#" className="text-muted-foreground hover:text-primary transition-colors"><Github size={18} /></Link>
        </div>
      </div>
    </footer>
  );
}
