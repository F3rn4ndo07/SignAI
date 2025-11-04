import Link from 'next/link';
import Image from 'next/image';
import { Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const TikTokIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M16.6 5.82h2.53V0.64h-3.66c-4.44 0-7.48 2.66-7.48 7.48v3.47H5.47v5.12h2.52v8.64h5.12v-8.64h3.42l.53-5.12h-3.95v-2.8c0-1.26.63-2.35 2.48-2.35z"></path>
    </svg>
  );

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
                <Link href="https://www.instagram.com/signai_upc/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                    <Instagram className="h-5 w-5 text-muted-foreground hover:text-primary" />
                </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
                <Link href="https://www.tiktok.com/@signai_upc" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
                    <TikTokIcon className="h-5 w-5 text-muted-foreground hover:text-primary" />
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
