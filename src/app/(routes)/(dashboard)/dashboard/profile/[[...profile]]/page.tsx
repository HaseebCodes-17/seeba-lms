import type { Metadata } from "next";
import { UserProfile } from "@clerk/nextjs";

export const metadata: Metadata = {
  title: "Profile",
  description: "Profile - Check & edit your profile",
};

const UserProfilePage = () => <UserProfile path="/dashboard/profile" />;

export default UserProfilePage;
