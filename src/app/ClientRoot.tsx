"use client";

import React, { useState } from "react";
import Main from "./Main";
import ResponsiveAppBar from "@/components/ResponsiveAppBar/ResponsiveAppBar";

export default function ClientRoot({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <ResponsiveAppBar />
      <Main>{children}</Main>
    </>
  );
}
