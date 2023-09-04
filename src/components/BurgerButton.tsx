import { FC } from 'react';
import cn from 'classnames';

interface Props {
  onClick: () => void;
  active: boolean;
}

const BurgerButton: FC<Props> = ({ onClick, active }) => {
  return (
    <button
      className="ml-8 lg:ml-10 flex flex-col w-8 h-6 justify-between relative 2xl:hidden"
      onClick={onClick}
    >
      <div
        className={cn('w-full h-[3px] rounded bg-secondary', {
          'absolute top-3 rotate-45': active,
        })}
      ></div>
      {!active && <div className="w-full h-[3px] rounded bg-secondary"></div>}
      <div
        className={cn('w-full h-[3px] rounded bg-secondary', {
          'absolute top-3 -rotate-45': active,
        })}
      ></div>
    </button>
  );
};

export default BurgerButton;
