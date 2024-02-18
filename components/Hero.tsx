import Image from 'next/image'

export const Hero = () => {
  return (
    <Image
      height={1920}
      width={1282}
      src='/hero.jpg'
      className='rounded-none w-screen p-0 my-16'
      alt='Hero Image'
    />
  )
}
