import localFont from "next/font/local";
import "./studio.css";


const font = localFont({
  src: "../../../public/fonts/untitled-sans.woff2",
  variable: "--font-untitled-sans",
  display: "swap",
});

export default function StudioLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${font.className} font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
