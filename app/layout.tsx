import './globals.css';
import { Suspense } from 'react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google'; // update import to chosen font
import Loading from './loading';

const inter = Inter({ subsets: ['latin'] }); // change this to your chosen font

export const metadata: Metadata = {
  title: 'YOUR APP NAME', // change this to the title of your app
  description: 'Generated by create next app with custom template', // add a small description of your app
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* import your navbar/header component here */}
        <Suspense fallback={<Loading />}>{children}</Suspense>
        {/* import your footer component here */}
      </body>
    </html>
  );
}
