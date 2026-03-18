import type { Metadata } from 'next';
import { Inter, Playfair_Display, JetBrains_Mono } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  style: ['normal', 'italic'],
  variable: '--font-serif',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
});

export const metadata: Metadata = {
  title: 'Golden Estética | España',
  description: 'Clínica estética premium en España. Redefinimos la perfección con ciencia y lujo absoluto.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${inter.variable} ${playfair.variable} ${jetbrainsMono.variable} antialiased`}>
      <body className="bg-obsidian text-ivory font-sans selection:bg-champagne selection:text-obsidian" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
