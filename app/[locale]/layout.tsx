import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "../globals.css";
import { notFound } from "next/navigation";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { ThemeProvider } from "@/components/theme-provider";
import { Particles } from "@/components/ui/particles";
import { routing } from "@/i18n/routing";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Pedro Brandão",
  description: "Front-end Developer Website",
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html className={poppins.className} lang={locale}>
      <body className={`${poppins.variable} h-full antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="relative h-full">
            <NextIntlClientProvider>{children}</NextIntlClientProvider>
            <Particles
              className="absolute inset-0 z-0"
              ease={80}
              quantity={100}
              refresh
            />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
