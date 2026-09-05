import type { Metadata } from "next";
import "./globals.css";
import { COLORS } from "@/ui/tokens";

export const metadata: Metadata = {
  title: "glinks",
  description: "glakulin links",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body
        style={{
          backgroundColor: COLORS.gray[9]
        }}
      >
        {children}
      </body>
    </html>
  );
}
