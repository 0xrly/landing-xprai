'use client'
import { blog } from '@/libs/blogs'
import { BlogPost } from '@/types'
import { title } from './primitives'
import { Card, CardBody, CardFooter, Image } from '@nextui-org/react'

export const Blog = () => {
  return (
    <section className='container mx-auto'>
      <h2
        className={`${title({
          color: 'violet',
        })} grid place-content-center md:place-content-start`}
      >
        Blog
      </h2>
      <article className='grid place-content-center md:grid-cols-4 md:gap-5 mt-14 gap-8'>
        {blog.map((blog: BlogPost) => {
          return (
            <Card
              className='hover:opacity-80 md:mb-4'
              shadow='sm'
              key={blog.id}
              isPressable
              onPress={() => console.log('item pressed')}
            >
              <CardBody className='overflow-visible p-0'>
                <Image
                  shadow='sm'
                  radius='lg'
                  width='100%'
                  alt={blog.name}
                  className='w-full object-cover h-[180px]'
                  src={blog.image}
                />
              </CardBody>
              <CardFooter className='mt-3 text-small flex flex-col justify-center items-center space-y-3'>
                <b className='self-center justify-self-center text-nowrap'>
                  {blog.name}
                </b>
                <p className='text-default-500'>
                  {blog.date.toLocaleDateString()}
                </p>
              </CardFooter>
            </Card>
          )
        })}
      </article>
    </section>
  )
}
