import type { Metadata } from "next";
import React from 'react'
import DashboardSection from './_components/dashboard-section'

export const metadata: Metadata = {
  title: "Dashboard",
  description: "SeebaLMS Dashboard - Your ultimate path of learning.",
};

const DashboardPage = () => {
  return (
    <DashboardSection />
  )
}

export default DashboardPage