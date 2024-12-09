"use client";

import React, { useState } from "react";
import { Toolbar } from "@mui/material";
import ResponsiveAppBar from "@/components/ResponsiveAppBar";
import MainWithDrawer from "./MainWithDrawer";

export default function ClientRoot({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleDrawerChange = (value: boolean) => {
    setIsDrawerOpen(value);
  };

  return (
    <>
      <ResponsiveAppBar isDrawerOpen={isDrawerOpen} drawerChange={handleDrawerChange} />
      {/* Spacer to account for AppBar's height */}
      <Toolbar />
      <MainWithDrawer
        children={children}
        drawerOpen={isDrawerOpen}
        drawerChange={handleDrawerChange}
      />
    </>
  );
}
