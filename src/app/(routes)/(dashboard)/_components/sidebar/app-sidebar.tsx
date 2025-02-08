import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarRail,
  SidebarSeparator,
} from "@/components/ui/sidebar";
import Header from "./header";
import CreateNewBtn from "./create-new-btn";
import ManageMenu from "./manage-menu";
import ExploreMenu from "./explore-menu";
import CoursesMenu from "./courses-menu";

export function AppSidebar() {
  return (
    <Sidebar collapsible="icon">
      <Header />
      <SidebarContent>
        <CreateNewBtn />
        <SidebarSeparator />
        <ExploreMenu />
        <SidebarSeparator />
        <ManageMenu />
        <SidebarSeparator />
        <CoursesMenu />
      </SidebarContent>
      <SidebarFooter />
      <SidebarRail />
    </Sidebar>
  );
}
