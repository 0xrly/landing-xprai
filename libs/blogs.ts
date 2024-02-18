import { type BlogPost } from '@/types'

export const blog: BlogPost[] = [
  {
    id: 1,
    name: 'Introduction to Machine Learning',
    image: '/blog/1.jpg',
    date: new Date('2024-02-18'),
  },
  {
    id: 2,
    name: 'Types of Machine Learning Algorithms',
    image: '/blog/2.jpg',
    date: new Date('2024-02-15'),
  },
  {
    id: 3,
    name: 'Building a Machine Learning Model',
    image: '/blog/3.jpg',
    date: new Date('2024-02-10'),
  },
  {
    id: 4,
    name: 'Deploying a Machine Learning Model',
    image: '/blog/4.jpg',
    date: new Date('2024-02-05'),
  },
]
