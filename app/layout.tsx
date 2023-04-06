import Navbar from "@/components/Navbar";
import "./globals.css";
import Scroll from "@/pages/Scrollbar";

export const metadata = {
  title: "Tell",
  description: "Tell your story",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
