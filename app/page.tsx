import { Link } from '@nextui-org/link'
import { Snippet } from '@nextui-org/snippet'
import { Code } from '@nextui-org/code'
import { button as buttonStyles } from '@nextui-org/theme'
import { siteConfig } from '@/config/site'
import { title, subtitle } from '@/components/primitives'
import { GithubIcon } from '@/components/icons'
import { url } from 'inspector'
import { Hero } from '@/components/Hero'
import { Products } from '@/components/Products'
import { DividerComponent } from '@/components/DividerComponent'
import { Blog } from '@/components/Blog'

export default function Home() {
  return (
    <section className='flex w-full flex-col items-center justify-center  gap-4 py-8 md:py-10'>
      <div className='inline-block max-w-lg text-center justify-center'>
        <h1 className={title()}>Fast and easy</h1>
        <br />
        <h1 className={title({ color: 'violet' })}>AI for your</h1>
        <br />
        <h1 className={title()}>everyday life</h1>
        <h2 className={subtitle({ class: 'mt-4' })}>
          We build useful and modern applications that use artificial
          intelligence
        </h2>
        <h1 className={title({ color: 'violet' })}>&lt;/&gt;</h1>
      </div>

      <Hero />
      <DividerComponent />
      <Products />
      <DividerComponent />
      <Blog />
    </section>
  )
}
