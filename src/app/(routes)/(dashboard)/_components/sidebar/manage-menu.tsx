"use client";

import { usePathname } from "next/navigation";
import { UserCircle, List } from "lucide-react";
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import Link from "next/link";

const ManageMenu = () => {
  const pathname = usePathname();

  const items = [
    { title: "Courses", icon: List },
    { title: "Profile", icon: UserCircle },
  ];

  return (
    <SidebarGroup>
      <SidebarGroupLabel>Manage</SidebarGroupLabel>
      <SidebarGroupContent>
        <SidebarMenu>
          {items.map(({ title, icon: Icon }) => {
            const URL = `/dashboard/${title.toLowerCase()}`;

            return (
              <SidebarMenuItem key={title}>
                <SidebarMenuButton isActive={pathname === URL} asChild>
                  <Link href={URL}>
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

export default ManageMenu;
