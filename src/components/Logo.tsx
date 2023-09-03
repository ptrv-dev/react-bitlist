import { FC } from 'react';
import cn from 'classnames';

interface Props {
  className?: string;
}

const Logo: FC<Props> = ({ className }) => {
  return (
    <a href="/" className={cn('', className)}>
      <img src="/assets/img/logo.svg" alt="" height="35px" />
    </a>
  );
};

export default Logo;
