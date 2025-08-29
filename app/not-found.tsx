import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-[70vh] flex-col items-center justify-center px-4 text-center">
      <div className="mb-6">
        <Image
          src="/favicon-32x32.png"
          alt="Sun Valley Broadband logo"
          width={320}
          height={118}
          priority
        />
      </div>
      <h1 className="text-3xl font-bold tracking-tight">Page not found</h1>
      <p className="mt-2 max-w-xl text-neutral-600 dark:text-neutral-400">
        Sorry, we couldn’t find that page. Sun Valley Broadband proudly serves Yuma, AZ
        with fast, reliable internet.
      </p>
      <nav className="mt-6 flex flex-wrap items-center justify-center gap-3">
        <Link href="/" className="rounded border px-4 py-2 text-sm hover:bg-neutral-50 dark:hover:bg-neutral-800">
          Go to Home
        </Link>
        <Link href="/services" className="rounded border px-4 py-2 text-sm hover:bg-neutral-50 dark:hover:bg-neutral-800">
          View Services
        </Link>
        <Link href="/support" className="rounded border px-4 py-2 text-sm hover:bg-neutral-50 dark:hover:bg-neutral-800">
          Get Support
        </Link>
        <Link href="/contact" className="rounded border px-4 py-2 text-sm hover:bg-neutral-50 dark:hover:bg-neutral-800">
          Contact Sales
        </Link>
      </nav>
    </main>
  );
}


