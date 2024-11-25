import { NextUIProvider } from "@nextui-org/react"; // Asegúrate de usar el paquete correcto

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <NextUIProvider>
      {children}
    </NextUIProvider>
  );
}
