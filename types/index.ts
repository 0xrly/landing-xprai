import { SVGProps } from 'react'

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number
}

export interface Product {
  id: number
  name: string
  image: string
  date: Date
}
export interface BlogPost {
  id: number
  name: string
  image: string
  date: Date
}
