'use client'

import { NextUIProvider } from "@nextui-org/react";
import { ReactNode } from "react";

export function Providers({ children }: { children: ReactNode }) {
    return (
        <NextUIProvider locale="es-ES">
                {children}
        </NextUIProvider>
    )
}