import Link from 'next/link';
import Image from 'next/image';
import { Twitter, Linkedin, Facebook } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';


export function Footer() {
  const logoImage = PlaceHolderImages.find((img) => img.id === 'sign-ai-logo');
  return (
    <footer className="bg-primary/5 border-t">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <Link href="/" aria-label="SignAI Home">
             {logoImage && (
                <Image
                  src={logoImage.imageUrl}
                  alt="SignAI Logo"
                  width={316}
                  height={120}
                  className="h-10 w-auto object-contain"
                />
              )}
          </Link>
          <div className="flex items-center space-x-6 text-sm text-muted-foreground mt-4 md:mt-0">
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
