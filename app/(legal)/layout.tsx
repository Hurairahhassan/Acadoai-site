import type { Metadata } from "next";
import { RootDocument } from "../../components/RootDocument";
import { baseMetadata } from "../seo";
import "../globals.css";

export { viewport } from "../seo";

// Legal pages are published in English only.
export const metadata: Metadata = baseMetadata;

export default function LegalLayout({ children }: { children: React.ReactNode }) {
  return <RootDocument lang="en">{children}</RootDocument>;
}
