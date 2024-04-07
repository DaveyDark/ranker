import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "@/components/ui/toaster";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ranker",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider
      appearance={{
        variables: {
          colorPrimary: "#3e8af7",
          colorBackground: "#253143",
          colorText: "white",
          colorTextSecondary: "#d9d9d9",
          colorInputBackground: "#526580",
          colorInputText: "white",
          colorAlphaShade: "white",
          colorShimmer: "#d9d9d9",
        },
        elements: {
          formFieldInput:
            "focus:outline-none focus:ring-0 bg-transparent border-2 focus:border-primary rounded-lg p-2",
        },
        userProfile: {
          variables: {
            colorPrimary: "#5eaaff",
            colorBackground: "#253143",
          },
        },
      }}
    >
      <html lang="en">
        <body
          className={`${montserrat.className} min-h-screen bg-secondary-foreground`}
        >
          {children}
          <Toaster />
        </body>
      </html>
    </ClerkProvider>
  );
}
