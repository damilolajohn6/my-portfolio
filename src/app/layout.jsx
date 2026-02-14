import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";

const JetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

export const metadata = {
  title: "Damilola John — Full Stack Engineer",
  description:
    "Full Stack Software Engineer specializing in Next.js, Node.js, React Native, and scalable backend systems. 5+ years building production-grade web and mobile applications.",
  keywords: [
    "Full Stack Developer",
    "Software Engineer",
    "Next.js Developer",
    "React Developer",
    "Node.js Developer",
    "React Native Developer",
    "Backend Engineer",
    "Frontend Engineer",
    "Lagos Nigeria",
    "Damilola John",
  ],
  authors: [{ name: "Damilola John" }],
  openGraph: {
    title: "Damilola John — Full Stack Engineer",
    description:
      "Full Stack Software Engineer specializing in Next.js, Node.js, React Native, and scalable backend systems.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Damilola John — Full Stack Engineer",
    description:
      "Full Stack Software Engineer specializing in Next.js, Node.js, React Native, and scalable backend systems.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${JetbrainsMono.variable} font-primary antialiased`}>
        <Header />
        <StairTransition />
        <PageTransition>{children}</PageTransition>
        <Footer />
      </body>
    </html>
  );
}
