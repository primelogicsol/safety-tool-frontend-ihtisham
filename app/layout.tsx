import "@/node_modules/react-modal-video/css/modal-video.css";
import "public/assets/css/fixnix.css";
import "swiper/css";
// import "swiper/css/navigation"
import "swiper/css/pagination";
import "swiper/css/free-mode";
import { saira, nunitoSans } from "@/lib/font";
import { ReactNode } from "react";

export const metadata = {
  title: "Safetyl Tool",
  description: "Safety Tool products buy and sell",
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className={`${saira.variable} ${nunitoSans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
