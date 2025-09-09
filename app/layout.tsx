import type React from "react"
import type { Metadata } from "next"
import { Space_Grotesk, DM_Sans } from "next/font/google"
import "./globals.css"

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space-grotesk",
})

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-sans",
})

export const metadata: Metadata = {
  title: "TQPay - Simplify Your Digital Payments",
  description:
    "Experience lightning-fast recharges, seamless bill payments, and secure financial services with TQPay - your trusted partner for everyday financial needs.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${dmSans.variable} antialiased`}>
      <body>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Remove browser extension attributes before React hydration
              (function() {
                const removeExtensionAttributes = () => {
                  const elements = document.querySelectorAll('[fdprocessedid], [data-lastpass-icon-root]');
                  elements.forEach(el => {
                    el.removeAttribute('fdprocessedid');
                    el.removeAttribute('data-lastpass-icon-root');
                  });
                };
                if (document.readyState === 'loading') {
                  document.addEventListener('DOMContentLoaded', removeExtensionAttributes);
                } else {
                  removeExtensionAttributes();
                }
              })();
            `,
          }}
        />
        {children}
      </body>
    </html>
  )
}
