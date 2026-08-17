import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://diengventura.com";
  
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/documents/private/", "/api/"],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
