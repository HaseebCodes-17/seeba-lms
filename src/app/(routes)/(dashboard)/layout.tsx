import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { AppSidebar } from "./_components/sidebar/app-sidebar";
import Navbar from "./_components/navbar/navbar";
import { CoursesProvider } from "./_contexts/courses-provider";
import Footer from "@/components/footer/footer";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <CoursesProvider>
      <SidebarProvider>
        <AppSidebar />
        <SidebarInset>
          <Navbar />
          <SidebarTrigger />
          <main className="px-2 pt-6 pb-16">{children}</main>
          <Footer />
        </SidebarInset>
      </SidebarProvider>
    </CoursesProvider>
  );
}
