import Navbar from "./_components/navbar/navbar";
import Footer from "@/components/footer/footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navbar />
      <main>
        <section className="px-2 py-12 md:py-8 grid place-items-center">
          {children}
        </section>
      </main>
      <Footer />
    </>
  );
}
