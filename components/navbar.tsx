'use client'
import { FaAngleDown } from 'react-icons/fa'
import { Button } from '@nextui-org/button'
import {
  Navbar,
  NavbarContent,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
} from '@nextui-org/navbar'
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from '@nextui-org/react'
import Image from 'next/image'

import { useState } from 'react'
import Link from 'next/link'

export const NavbarComponent = () => {
  const menuItems = [
    'Profile',
    'Dashboard',
    'Activity',
    'Analytics',
    'System',
    'Deployments',
    'My Settings',
    'Team Settings',
    'Help & Feedback',
    'Log Out',
  ]
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} position='static'>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          className='sm:hidden'
        />
        <NavbarBrand>
          <Link className='flex items-center gap-2' href='/'>
            {' '}
            <Image
              className='mb-4'
              src='/logo.jpg'
              alt='Logo'
              width={35}
              height={35}
            />
            <p className='font-bold text-xl text-inherit'>XPRAI</p>
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className='hidden sm:flex gap-4' justify='center'>
        <Dropdown>
          <NavbarItem className='hover:underline'>
            <DropdownTrigger>
              <Button
                disableRipple
                className='p-0 text-sm font-normal bg-transparent hover:underline data-[hover=true]:bg-transparent'
                endContent={<FaAngleDown />}
                radius='sm'
                variant='solid'
              >
                Research
              </Button>
            </DropdownTrigger>
          </NavbarItem>
          <DropdownMenu variant='shadow' aria-label='Static Actions'>
            <DropdownItem key='overview'>
              {' '}
              <Link href='/overview'>Overview</Link>
            </DropdownItem>
            <DropdownItem key='index'>
              {' '}
              <Link href='/index'>Index</Link>
            </DropdownItem>
            <DropdownItem key='codegpt'>
              <Link href='/codegpt'>CodeGpt</Link>
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>

        <NavbarItem className='text-sm bg-transparent font-normal hover:underline'>
          <Link href='/products'>Products</Link>
        </NavbarItem>
        <Dropdown>
          <NavbarItem className='hover:underline'>
            <DropdownTrigger>
              <Button
                disableRipple
                className='p-0 text-sm font-normal bg-transparent hover:underline data-[hover=true]:bg-transparent'
                endContent={<FaAngleDown />}
                radius='sm'
                variant='solid'
              >
                Company
              </Button>
            </DropdownTrigger>
          </NavbarItem>
          <DropdownMenu aria-label='Static Actions'>
            <DropdownItem key='new'>New file</DropdownItem>
            <DropdownItem key='copy'>Copy link</DropdownItem>
            <DropdownItem key='edit'>Edit file</DropdownItem>
            <DropdownItem key='delete' className='text-danger' color='danger'>
              Delete file
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </NavbarContent>
      <NavbarContent justify='end'>
        <NavbarItem className='hidden hover:underline font-normal text-sm lg:flex'>
          <Link href='#'>Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color='default' href='#' variant='ghost'>
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={
                index === 2
                  ? 'primary'
                  : index === menuItems.length - 1
                  ? 'danger'
                  : 'foreground'
              }
              className='w-full'
              href='#'
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  )
}
