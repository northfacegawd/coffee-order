import React from 'react';
import { useRouter } from 'next/router';
import Home from '@components/icons/home';
import Favorite from '@components/icons/favorites';
import Profile from '@components/icons/profile';
import Link from 'next/link';
import classnames from '@lib/utils';

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
  const { pathname } = useRouter();

  return (
    <footer
      className="md:hidden fixed w-full h-14 bottom-0 border-t-gray-300 border-t-[1px]min-w-[320px]
    "
    >
      <nav className="flex justify-around items-center h-full bg-white">
        {NAV_ITEMS.map(({ href, icon, title }) => {
          return (
            <Link key={href} href={href}>
              <a
                key={href}
                href={href}
                className={classnames(
                  'flex flex-col items-center text-center cursor-pointer',
                  pathname.startsWith(href)
                    ? 'text-orange-500 font-semibold'
                    : '',
                )}
              >
                {icon}
                <div className="text-xs">{title}</div>
              </a>
            </Link>
          );
        })}
      </nav>
    </footer>
  );
}
