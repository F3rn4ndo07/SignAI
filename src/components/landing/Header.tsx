'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

const navLinks = [
  { href: '#como-funciona', label: 'Cómo funciona' },
  { href: '#beneficios', label: 'Beneficios' },
  { href: '#sectores', label: 'Sectores' },
  { href: '#cumplimiento', label: 'Cumplimiento' },
  { href: '#testimonios', label: 'Testimonios' },
  { href: '#faq', label: 'FAQ' },
];

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <div className="mr-6 flex items-center">
          <Link href="/">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://i.ibb.co/3YfRRdwr/sign-ai-logo.png"
              alt="SignAI Logo"
              style={{ height: '32px' }}
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex flex-1 items-center justify-end space-x-2">
          <Button asChild className="hidden md:inline-flex" size="sm">
            <Link href="#contacto">Solicitar Piloto</Link>
          </Button>
          
          {/* Mobile Navigation */}
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                className="md:hidden px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0"
              >
                <Menu className="h-6 w-6" />
                <span className="sr-only">Abrir menú</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="pr-0">
              <div className='mb-6'>
                  <Link href="/">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="https://i.ibb.co/3YfRRdwr/sign-ai-logo.png"
                      alt="SignAI Logo"
                      style={{ height: '30px' }}
                    />
                  </Link>
              </div>
              <div className="flex flex-col space-y-3">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="transition-colors hover:text-primary p-2 rounded-l-md"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
               <Button asChild className="mt-6" size="sm">
                <Link href="#contacto" onClick={() => setIsMobileMenuOpen(false)}>Solicitar Piloto</Link>
              </Button>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
