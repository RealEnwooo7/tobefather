import './globals.css';
import type { Metadata } from 'next';
import { Inter, Poppins } from 'next/font/google';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
});

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: 'To Be Father – L\'app copilote de la paternité',
  description: 'To Be Father accompagne les pères dès la grossesse jusqu\'aux premières années. IA spécialisée, checklists, conseils experts. Lancement juillet 2026.',
  keywords: 'paternité, application père, grossesse, accompagnement paternel, IA personnalisée, conseils parentaux',
  authors: [{ name: 'To Be Father' }],
  creator: 'To Be Father',
  publisher: 'To Be Father',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://tobefather.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://tobefather.com',
    title: 'To Be Father – L\'app copilote de la paternité',
    description: 'To Be Father accompagne les pères dès la grossesse jusqu\'aux premières années. IA spécialisée, checklists, conseils experts. Lancement juillet 2026.',
    siteName: 'To Be Father',
    images: [{
      url: '/image.png',
      width: 1200,
      height: 630,
      alt: 'To Be Father - Application copilote de la paternité',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'To Be Father – L\'app copilote de la paternité',
    description: 'To Be Father accompagne les pères dès la grossesse jusqu\'aux premières années. IA spécialisée, checklists, conseils experts.',
    images: ['/image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${inter.variable} ${poppins.variable}`}>
      <head>
        <link rel="icon" href="/image.png" />
        <link rel="apple-touch-icon" href="/image.png" />
        <meta name="theme-color" content="#2357AA" />
        <meta name="msapplication-TileColor" content="#2357AA" />
      </head>
      <body className={inter.className}>
        <a href="#main-content" className="skip-link">
          Aller au contenu principal
        </a>
        {children}
      </body>
    </html>
  );
}