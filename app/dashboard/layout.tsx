'use client'
import { usePathname } from "next/navigation";
import Sidebar from "../_Components/Navegacion/sidebar";
export default function Layout_dashboard({ children }: Readonly<{ children: React.ReactNode }>) {

    return (
        <div className=" bg-orange-50">
            <div className="flex flex-row items-center">
                <Sidebar/>
                {children}   

            </div>
            
        </div>
    );
}
