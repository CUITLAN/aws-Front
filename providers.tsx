import * as React from "react"
import { NextUIProvider } from "@nextui-org/system";


export default function Providers ({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
        <NextUIProvider>
            {children}
        </NextUIProvider>
    )
}