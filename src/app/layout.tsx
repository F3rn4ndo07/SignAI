
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { cn } from '@/lib/utils';
import Script from 'next/script';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });
const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_ID ?? 'G-YQJWCPH5FJ';
const GOOGLE_SITE_VERIFICATION = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION;


export const metadata: Metadata = {
  title: 'SignAI: Traducción de Lengua de Señas con IA',
  description:
    'Mejore la accesibilidad y eficiencia en su institución con SignAI. Traducción en tiempo real de lengua de señas a voz y texto. Solicite su piloto de 30 días.',
  openGraph: {
    title: 'SignAI: Traducción de Lengua de Señas con IA',
    description:
      'Descubra cómo SignAI potencia la inclusión en hospitales, universidades y gobiernos con tecnología de vanguardia.',
    url: 'https://signai-app.com', // Replace with actual URL
    siteName: 'SignAI',
    images: [
      {
        url: 'https://picsum.photos/seed/og-image/1200/630', // Replace with actual OG image
        width: 1200,
        height: 630,
        alt: 'Una persona usando el dispositivo SignAI para comunicarse',
      },
    ],
    locale: 'es_PE',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="!scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        {GOOGLE_SITE_VERIFICATION && (
          <meta name="google-site-verification" content={GOOGLE_SITE_VERIFICATION} />
        )}
        {GA_MEASUREMENT_ID && (
          <>
            <Script
              async
              strategy="afterInteractive"
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_MEASUREMENT_ID}');
              `}
            </Script>
          </>
        )}
      </head>
      <body className={cn('min-h-screen bg-background font-body antialiased', inter.variable)}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
