import HomePage from "@/components/home-page/HomePage";
import { getBlogsSetttings } from "@/data/loaders";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const data = await getBlogsSetttings();
  // console.log(data);

  if (!data) return {};
  return {
    title: data.data?.title,
    description: data.data?.description,
    openGraph: {
      title: data.data?.title,
      description: data.data?.description,
      url: "http://localhost:3000/",
      siteName: "eduSpark",
      images: [
        {
          url: data.data?.image || "/images/eduspark.png",
          width: 1200,
          height: 630,
          alt: data.data?.title || "eduSpark",
        },
      ],
      type: "website",
    },
    robots: {
      index: true,
      follow: true,
      nocache: false,
      googleBot: {
        index: true,
        follow: true,
        noimageindex: false,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    alternates: {
      canonical: "http://localhost:3000/",
    },
  };
}

export default function Home() {
  return (
    <main style={{ position: "relative" }}>
      <HomePage />
    </main>
  );
}
