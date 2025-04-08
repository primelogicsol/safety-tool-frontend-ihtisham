import "@/node_modules/react-modal-video/css/modal-video.css";
import "public/assets/css/fixnix.css";
import "swiper/css";
// import "swiper/css/navigation"
import "swiper/css/pagination";
import "swiper/css/free-mode";
import { saira, nunitoSans } from "@/lib/font";
export const metadata = {
  title: "Fixnix",
  description: "Electronics & Gadgets Repair Next Js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${saira.variable} ${nunitoSans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
