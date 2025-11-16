
"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';
import { cn } from '@/lib/utils';
import React from 'react';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/schedule', label: 'Schedule' },
  { href: '/speakers', label: 'Speakers' },
  { href: '/projects', label: 'Projects' },
  { href: '/contact', label: 'Contact' },
];

export function Header() {
  const pathname = usePathname();

  const NavLink = ({ href, label, className }: { href: string; label: string, className?: string }) => {
    const isActive = pathname === href;
    return (
      <Link href={href} className={cn(
        "text-sm font-medium transition-colors hover:text-primary",
        isActive ? "text-primary" : "text-foreground/60",
        className
      )}>
        {label}
      </Link>
    );
  };

  const MobileNavLink = ({ href, label }: { href: string; label: string }) => {
    const isActive = pathname === href;
    return (
        <SheetClose asChild>
            <Link href={href} className={cn(
                "block rounded-lg py-2 px-3 text-base font-semibold transition-colors",
                isActive ? "bg-accent text-accent-foreground" : "hover:bg-muted"
            )}>
                {label}
            </Link>
        </SheetClose>
    );
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="flex items-center md:hidden">
          {/* Mobile Nav */}
          <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left">
                  <div className="p-4">
                      <Link href="/" className="mb-8 flex items-center space-x-2">
                          <span className="font-bold font-headline">AI-GRID</span>
                      </Link>
                      <nav className="flex flex-col gap-3">
                          {navLinks.map((link) => (
                          <MobileNavLink key={link.href} {...link} />
                          ))}
                      </nav>
                  </div>
              </SheetContent>
            </Sheet>
        </div>
        
        <div className="flex flex-1 items-center justify-center">
            <div className="hidden md:flex items-center gap-x-6">
                <Link href="/" className="flex items-center space-x-2">
                    <span className="font-bold sm:inline-block font-headline">
                    AI-GRID
                    </span>
                </Link>
                <nav className="flex items-center gap-6 text-sm">
                    {navLinks.map((link) => (
                    <NavLink key={link.href} {...link} />
                    ))}
                </nav>
            </div>
        </div>

        <div className="flex items-center justify-end">
          <Button asChild className="group transition-all duration-300 futuristic-glow-sm hover:futuristic-glow">
            <Link href="/register">
              Register Now
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
