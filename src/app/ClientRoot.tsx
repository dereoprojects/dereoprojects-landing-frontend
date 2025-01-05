"use client";

import React, { useState } from "react";
import { Toolbar } from "@mui/material";
import MainWithDrawer from "./MainWithDrawer";
import ResponsiveAppBar from "@/components/ResponsiveAppBar/ResponsiveAppBar";

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
      <ResponsiveAppBar
        isDrawerOpen={isDrawerOpen}
        drawerChange={handleDrawerChange}
      />
      {/* Spacer to account for AppBar's height */}
      <Toolbar sx={{ width: "100%" }} />
      <MainWithDrawer
        drawerOpen={isDrawerOpen}
        drawerChange={handleDrawerChange}
      >
        {children}
      </MainWithDrawer>
    </>
  );
}
