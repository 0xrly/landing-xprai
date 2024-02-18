'use client'
import { Product } from '@/types'
import { products } from '../libs/products'
import { Card, CardBody, CardFooter, Divider, Image } from '@nextui-org/react'
import { title } from './primitives'

export const Products = () => {
  return (
    <section className='container mx-auto mb-4'>
      <h2
        className={`${title({
          color: 'violet',
        })} grid place-content-center md:place-content-start`}
      >
        Products
      </h2>
      <article className='grid place-content-center md:grid-cols-4  md:gap-4 mt-14 gap-8'>
        {products.map((product: Product) => {
          return (
            <Card
              className='hover:opacity-80 md:mb-8'
              shadow='sm'
              key={product.id}
              isPressable
              onPress={() => console.log('item pressed')}
            >
              <CardBody className='overflow-visible p-0'>
                <Image
                  shadow='sm'
                  radius='lg'
                  width='100%'
                  alt={product.name}
                  className='w-full object-cover h-[180px]'
                  src={product.image}
                />
              </CardBody>
              <CardFooter className='mt-3 text-small flex flex-col justify-center items-center space-y-3'>
                <b className='self-center justify-self-center text-nowrap'>
                  {product.name}
                </b>
                <p className='text-default-500'>
                  {product.date.toLocaleDateString()}
                </p>
              </CardFooter>
            </Card>
          )
        })}
      </article>
    </section>
  )
}
