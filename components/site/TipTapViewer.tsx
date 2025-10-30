import { generateHTML } from "@tiptap/html";
import StarterKit from "@tiptap/starter-kit";
import Link from "@tiptap/extension-link";
import Image from "@tiptap/extension-image";

export function TipTapViewer({ json, html }: { json?: any; html?: string }) {
  const contentHtml = html || (json ? generateHTML(json, [StarterKit, Link, Image]) : "");
  return (
    <div 
      className="prose dark:prose-invert max-w-none [&_h1]:text-4xl [&_h1]:md:text-5xl [&_h1]:font-bold [&_h1]:mb-4 [&_h1]:mt-6 [&_h2]:text-3xl [&_h2]:sm:text-4xl [&_h2]:md:text-5xl [&_h2]:font-semibold [&_h2]:mb-3 [&_h2]:mt-5 [&_h3]:text-2xl [&_h3]:md:text-3xl [&_h3]:font-semibold [&_h3]:mb-2 [&_h3]:mt-4" 
      dangerouslySetInnerHTML={{ __html: contentHtml }} 
    />
  );
}


