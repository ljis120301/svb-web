import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

export function EligibilityCta({ className }: { className?: string }) {
  return (
    <div className={className}>
      <div className="rounded-lg border border-neutral-200 bg-white p-6 dark:border-neutral-800 dark:bg-neutral-950">
        <h3 className="text-xl font-semibold">Check Availability</h3>
        <p className="mt-1 text-neutral-600 dark:text-neutral-400">
          To check if service is available at your address, please contact our sales team.
        </p>
        <div className="mt-4">
          <Link href="/contact" className={buttonVariants({ variant: "default" })}>
            Contact Sales
          </Link>
        </div>
      </div>
    </div>
  );
}


