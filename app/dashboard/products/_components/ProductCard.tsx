import { Product } from '../../../../entities'
import { Card, CardBody, CardHeader, Divider, Link } from '@nextui-org/react';
import React from 'react'

const ProductCard2 = ({ product }: { product: Product }) => {
  return (
    <Card className='max-w-[350px] '>
      <CardHeader>
        {product.name}
      </CardHeader>
      <Divider />
      <CardBody>
        <p>Nombre del Producto: <b>{product?.name} </b></p>
        <p>Precio : {product?.price}</p>
        <p>Clave Sat : {product?.sat_key}</p>
        <p></p>
      </CardBody>
      {/* <Link className='font-bold underline' href={`/dashboard/providers/${product.provider.providerId}`}>{product.provider.providerName} </Link> */}
    </Card>
  )
}

export default ProductCard2
