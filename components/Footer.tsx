import Image from 'next/image'
import { FacebookIcon, GithubIcon, LinkedinIcon, TwitterIcon } from './icons'
import Link from 'next/link'

export const Footer = () => {
  return (
    <footer className='w-full p-8'>
      <section className='flex justify-between items-center'>
        <article className='flex items-center'>
          <Link className='flex items-center' href='/'>
            <Image
              className='mb-5'
              src='/logo.jpg'
              width={40}
              height={40}
              alt='LogoImage'
            />
            <p className='text-xl font-bold '>XPRAI</p>
          </Link>
          <span className='ml-3 p-2'>
            <b className='text-xl mr-1'>©</b>2023-2024
          </span>
        </article>

        <article className='flex gap-4'>
          <Link href='#'>
            <LinkedinIcon />
          </Link>
          <Link href='#'>
            <FacebookIcon />
          </Link>
          <Link href='#'>
            <TwitterIcon />
          </Link>{' '}
          <Link href='#'>
            <GithubIcon />
          </Link>
        </article>
      </section>
    </footer>
  )
}
