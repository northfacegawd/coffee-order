import React from 'react';
import { useRouter } from 'next/router';
import Home from '@components/icons/home';
import Favorite from '@components/icons/favorites';
import Profile from '@components/icons/profile';

const NAV_ITEMS = [
  {
    href: '/',
    icon: <Home />,
    title: 'Home',
  },
  {
    href: '/favorites',
    icon: <Favorite />,
    title: 'Favorites',
  },
  {
    href: '/profile',
    icon: <Profile />,
    title: 'Profile',
  },
];

export default function Footer() {
  const router = useRouter();

  return (
    <footer
      className="md:hidden fixed w-full  h-14 bottom-0 border-t-gray-300 
    border-t-[1px]
    min-w-[320px]
    "
    >
      <nav className="flex justify-around  items-center  h-full bg-white">
        {NAV_ITEMS.map(({ href, icon, title }) => {
          return (
            <a
              key={href}
              href={href}
              className="flex flex-col items-center text-center cursor-pointer"
              onClick={() => router.push(href)}
            >
              {icon}
              <div className="text-xs">{title}</div>
            </a>
          );
        })}
      </nav>
    </footer>
  );
}
