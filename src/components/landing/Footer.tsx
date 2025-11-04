import Link from 'next/link';
import { Twitter, Linkedin, Facebook } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

export function Footer() {
  return (
    <footer className="bg-primary/5 border-t">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="https://i.ibb.co/mS1m3Nf/sign-ai-logo-672x222-1.png"
                alt="SignAI Logo"
                width={120}
                height={40}
              />
            </Link>
          </div>
          <div className="flex items-center space-x-6 text-sm text-muted-foreground">
            <Link href="#" className="hover:text-primary transition-colors">Política de Privacidad</Link>
            <Link href="#contacto" className="hover:text-primary transition-colors">Contacto</Link>
          </div>
          <div className="flex items-center space-x-2 mt-4 md:mt-0">
             <Button variant="ghost" size="icon" asChild>
                <Link href="#" aria-label="Twitter">
                    <Twitter className="h-5 w-5 text-muted-foreground hover:text-primary" />
                </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
                <Link href="#" aria-label="LinkedIn">
                    <Linkedin className="h-5 w-5 text-muted-foreground hover:text-primary" />
                </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
                <Link href="#" aria-label="Facebook">
                    <Facebook className="h-5 w-5 text-muted-foreground hover:text-primary" />
                </Link>
            </Button>
          </div>
        </div>
        <div className="text-center text-sm text-muted-foreground mt-8 pt-8 border-t">
          &copy; {new Date().getFullYear()} SignAI. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}
