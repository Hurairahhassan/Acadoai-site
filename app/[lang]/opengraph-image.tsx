import { ogImage, ogSize } from "../og";

export const alt = "AcadoAI – AI-powered education management";
export const size = ogSize;
export const contentType = "image/png";

export default function Image() {
  return ogImage("AI-powered education management", "Education management software, connected by AI.");
}
