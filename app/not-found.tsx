import Image from 'next/image';
import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="flex items-center justify-between px-32 h-screen">
      <div className="flex-col gap-2">
        <h1 className="text-5xl font-semibold">404 Not Found</h1>
        <p className="text-xl font-light">Could not find requested resource</p>
        <Link
          href="/"
          className="text-lg text-blue-700 hover:text-blue-500 hover:underline transition-all duration-200 ease-in-out"
        >
          Return Home
        </Link>
      </div>
      <Image src="/404humaan.svg" width={400} height={200} alt="404 Humaan" />
    </main>
  );
}
