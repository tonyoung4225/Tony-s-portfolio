import type { Metadata } from "next";
import { Outfit, DM_Sans } from "next/font/google";
import "./globals.css";

const outfit = Outfit({ subsets: ["latin"], variable: "--font-heading" });
const dmSans = DM_Sans({ subsets: ["latin"], variable: "--font-body" });

export const metadata: Metadata = {
  title: "Portfolio | 홈",
  description: "개발자 포트폴리오",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={`${outfit.variable} ${dmSans.variable}`}>
      <body>
        <nav className="nav">
          <div className="container nav-inner">
            <a href="#" className="nav-logo">
              Portfolio
            </a>
            <ul className="nav-links">
              <li><a href="#about">소개</a></li>
              <li><a href="#skills">기술</a></li>
              <li><a href="#projects">프로젝트</a></li>np
              <li><a href="#contact">연락처</a></li>
            </ul>
          </div>
        </nav>
        {children}
        <footer className="footer">
          <div className="container">
            © {new Date().getFullYear()} Portfolio. All rights reserved.
          </div>
        </footer>
      </body>
    </html>
  );
}
