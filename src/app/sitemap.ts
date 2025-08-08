import { MetadataRoute } from "next";

const baseUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/About-Us`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/Feedback`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/Notice`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/School-Gallery`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/Academic-Activities`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/Programs`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/Sports-Events`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/Tour`,
      lastModified: new Date(),
    },
  ];
}
