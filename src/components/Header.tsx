import { FC, useState } from 'react';
import { Logo } from '.';
import Input from './ui/Input';
import { SearchIcon } from './icons';
import { Button } from './ui';

const NAVIGATION_ITEMS = [
  { href: '#!', title: 'Trade' },
  { href: '#!', title: 'P2P' },
  { href: '#!', title: 'Partners' },
  { href: '#!', title: 'Mining' },
  { href: '#!', title: 'Academy' },
];

const Header: FC = () => {
  const [query, setQuery] = useState('');
  return (
    <div className="py-7 bg-dark relative">
      <div className="absolute left-0 right-0 h-px bottom-0 bg-gradient-separator" />
      <div className="container flex items-center">
        <Logo className="mr-8" />
        <div className="separator mr-10" />
        <Input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search"
          icon={<SearchIcon width={20} height={20} />}
        />
        <nav className="flex items-center gap-8 ml-auto text-lg">
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
        <div className="separator ml-8 mr-10" />
        <div className="flex gap-2">
          <Button variant="secondary">Register</Button>
          <Button>Log in</Button>
        </div>
      </div>
    </div>
  );
};

export default Header;
