import type { MetadataRoute } from "next";
import { site } from "../content/pages";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "AcadoAI – AI School Management",
    short_name: site.name,
    description: site.description,
    start_url: "/",
    display: "standalone",
    background_color: "#f6f8fc",
    theme_color: "#040e45",
    icons: [{ src: "/images/acado-icon.svg", sizes: "any", type: "image/svg+xml" }],
  };
}
