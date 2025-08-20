import { StickyBanner } from "@/components/ui/sticky-banner";

export function StickyBannerDemo() {
  return (
    <StickyBanner className="bg-gradient-to-b from-blue-500 to-blue-600">
      <p className="mx-0 max-w-[90%] text-white drop-shadow-md">
      Visiting Yuma This Winter? {" "}
        <a href="#" className="transition duration-200 hover:underline">
        Start Here.
        </a>
      </p>
    </StickyBanner>
  );
}
