import { EligibilityCta } from "@/components/site/EligibilityCta";
import { ProductBanner } from "@/components/site/Banners";
import { Table, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export const metadata = { title: "Cable TV | Sun Valley Broadband" };

export default function CablePage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <ProductBanner src="/web-images/istockphoto-184281306-612x612-1.jpg" alt="Living room TV" title="Cable TV" />
      <h1 className="text-3xl font-bold pt-4">Cable TV</h1>
      <p className="mt-2 max-w-2xl text-neutral-600 dark:text-neutral-400">
        Entertainment for the whole family with popular channels and HD picture quality.
      </p>
      <p className="mt-2 text-neutral-600 dark:text-neutral-400">
        We offer Cable Internet and TV options to the following areas:
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Areas Covered</TableHead>
            </TableRow>
            <TableRow>
              <TableCell>Sun Vista</TableCell>
              <TableCell>River's Edge</TableCell>
              <TableCell>Tier Drop</TableCell>
            </TableRow>
          </TableHeader>
        </Table>
      </p>
      <p className="mt-4 text-neutral-600 dark:text-neutral-400">
        For current package options and pricing, please contact our sales team.
      </p>
      <EligibilityCta className="mt-8" />
    </div>
  );
}


