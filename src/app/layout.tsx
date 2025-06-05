// import type { Metadata } from "next";
import { Sora, Epilogue } from "next/font/google";
import "../styles/globals.css";
import "../styles/index.css";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import { getGlobalSetttings } from "@/data/loaders";

const geistSans = Sora({
  subsets: ["latin"],
});

const geistMono = Epilogue({
  subsets: ["latin"],
});

// export const metadata: Metadata = {
//   title: "EduLearn - Online Learning Platform",
//   description:
//     "EduLearn offers high-quality online courses, interactive tutorials, and expert-led learning paths to help students and professionals grow their skills.",
//   openGraph: {
//     title: "Next.js",
//     description: "The React Framework for the Web",
//     url: "http://localhost:3000/",
//     siteName: "Next.js",
//     images: [
//       {
//         url: "https://nextjs.org/og-image.png",
//         width: 1200,
//         height: 630,
//         alt: "Next.js",
//       },
//     ],
//     type: "website",
//   },
//   robots: {
//     index: true,
//     follow: true,
//     nocache: false,
//     googleBot: {
//       index: true,
//       follow: true,
//       noimageindex: false,
//       "max-video-preview": -1,
//       "max-image-preview": "large",
//       "max-snippet": -1,
//     },
//   },
//   alternates: {
//     canonical: "http://localhost:3000/",
//   },
// };

async function loader() {
  const data = await getGlobalSetttings();

  if (!data) throw new Error("Failed to fetch global settings");
  return { footer: data.data.Footer };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { footer } = await loader();
  // console.log(footer);

  return (
    <html lang="en">
      <body className={`${geistSans.className} ${geistMono.className}`}>
        <Header />
        {children}
        <Footer data={footer} />
      </body>
    </html>
  );
}
