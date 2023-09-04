import { FC, useEffect, useState } from 'react';
import cn from 'classnames';

import { SearchIcon } from './icons';
import { Button, Input } from './ui';
import { BurgerButton, Logo } from '.';

export const NAVIGATION_ITEMS = [
  { href: '#!', title: 'Trade' },
  { href: '#!', title: 'P2P' },
  { href: '#!', title: 'Partners' },
  { href: '#!', title: 'Mining' },
  { href: '#!', title: 'Academy' },
];

const Header: FC = () => {
  const [query, setQuery] = useState('');
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (active) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
  }, [active]);

  return (
    <div className="py-7 bg-dark relative z-20">
      <div className="absolute left-0 right-0 h-px bottom-0 bg-gradient-separator" />
      <div className="container flex items-center relative z-20">
        <Logo className="mr-8" />
        <div className="separator mr-10 hidden lg:block" />
        <Input
          className="hidden lg:flex"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search"
          icon={<SearchIcon width={20} height={20} />}
        />
        <nav className="items-center gap-8 ml-auto text-lg hidden 2xl:flex">
          {NAVIGATION_ITEMS.map(({ href, title }, idx) => (
            <a
              key={idx}
              className="transition-colors text-[#464E62] hover:text-primary"
              href={href}
            >
              {title}
            </a>
          ))}
        </nav>
        <div className="separator ml-auto 2xl:ml-8 xl:mr-10" />
        <div className="gap-2 hidden xl:flex">
          <Button variant="secondary">Register</Button>
          <Button>Log in</Button>
        </div>
        <BurgerButton
          onClick={() => setActive((prev) => !prev)}
          active={active}
        />
      </div>
      <div
        className={cn(
          'fixed z-10 right-0 top-0 w-full max-w-sm h-screen mt-[98px] bg-dark bg-opacity-90 p-8 overflow-y-auto 2xl:hidden transition-transform duration-500 translate-x-full',
          { 'translate-x-0 ': active }
        )}
      >
        <Input
          className="flex lg:hidden mb-8 w-full"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search"
          icon={<SearchIcon width={20} height={20} />}
        />
        <nav className="items-center gap-6 ml-auto text-lg flex flex-col">
          {NAVIGATION_ITEMS.map(({ href, title }, idx) => (
            <a
              key={idx}
              className="transition-colors hover:text-primary"
              href={href}
            >
              {title}
            </a>
          ))}
        </nav>
        <div className="gap-2 flex xl:hidden justify-center mt-8">
          <Button variant="secondary">Register</Button>
          <Button>Log in</Button>
        </div>
      </div>
    </div>
  );
};

export default Header;
