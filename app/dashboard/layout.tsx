'use client'
import { usePathname } from "next/navigation";
import Sidebar from "../_Components/Navegacion/sidebar";
export default function Layout_dashboard({ children,locations }: Readonly<{ children: React.ReactNode, locations: React.ReactNode }>) {
    const path = usePathname();

    return (
        <div className=" bg-orange-50">
            <div className="flex flex-row items-center">
                <Sidebar/>
                {children}   
                {path === "/dashboard" ? locations: null}

            </div>
            
        </div>
    );
}
