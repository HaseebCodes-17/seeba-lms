import { Home, ServerIcon, Contact } from "lucide-react";
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import Link from "next/link";

const ExploreMenu = () => {
  const items = [
    { title: "Home", icon: Home },
    { title: "Services", icon: ServerIcon },
    { title: "Contact", icon: Contact },
  ];

  return (
    <SidebarGroup>
      <SidebarGroupLabel>Explore</SidebarGroupLabel>
      <SidebarGroupContent>
        <SidebarMenu>
          {items.map(({ title, icon: Icon }) => {
            const name = title.toLowerCase();

            return (
              <SidebarMenuItem key={title}>
                <SidebarMenuButton asChild>
                  <Link href={`/${name === "home" ? "" : `${name}`}`}>
                    <Icon />
                    <span>{title}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            );
          })}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
};

export default ExploreMenu;
