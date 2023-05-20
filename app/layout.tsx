import './globals.css';
import { Inter } from 'next/font/google'; //update import to chosen font
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] }); //Change this line to your chosen font

export const metadata = {
  title: 'YOUR APP NAME', //Change this to the title of your app
  description: 'Generated with create next app with custom template', //Add a small description of your app here
};

//Change this layout to whatever base layout for each pages
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* import your navbar/footer∂ layout component here (replace the div too) */}
        <div className="flex gap-x-2">
          <Link href={'/'} className="">
            Home
          </Link>
          <Link href={'/other-page'}>Other page</Link>
        </div>
        <div className={inter.className}>{children}</div>
        {/* import your footer layout component here */}
      </body>
    </html>
  );
}
