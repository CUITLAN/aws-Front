import React from 'react';
import { p } from 'framer-motion/client';

export default function Dashboard({ searchParams }: { searchParams: { [key: string]: string | string[] | undefined } }) {
  
  return (
    <div className="h-full w-4/12 ">
      <h2 className='text-center'>Bienvenido Seleccione una opcion </h2>
    </div>
  );
}
