import { features } from "../../../../content/pages";
import { ogImage, ogSize } from "../../../og";

export const size = ogSize;
export const contentType = "image/png";
export const alt = "AcadoAI feature";
export const generateStaticParams = () => features.map((f) => ({ slug: f.slug }));

export default async function Image({ params }: { params: Promise<{ lang: string; slug: string }> }) {
  const { slug } = await params;
  const f = features.find((x) => x.slug === slug);
  return ogImage(f?.name ?? "AcadoAI", f?.h1 ?? "AI school management software");
}
