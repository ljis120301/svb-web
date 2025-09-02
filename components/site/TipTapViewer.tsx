import { generateHTML } from "@tiptap/html";
import StarterKit from "@tiptap/starter-kit";
import Link from "@tiptap/extension-link";
import Image from "@tiptap/extension-image";

export function TipTapViewer({ json, html }: { json?: any; html?: string }) {
  const contentHtml = html || (json ? generateHTML(json, [StarterKit, Link, Image]) : "");
  return <div className="prose dark:prose-invert max-w-none" dangerouslySetInnerHTML={{ __html: contentHtml }} />;
}


