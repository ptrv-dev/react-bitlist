import { FC, HTMLProps } from 'react';
import cn from 'classnames';

interface Props extends HTMLProps<HTMLButtonElement> {
  type?: 'button' | 'submit' | 'reset' | undefined;
  variant?: 'primary' | 'secondary' | 'outlined';
}

const Button: FC<Props> = ({
  className,
  variant = 'primary',
  children,
  ...props
}) => {
  return (
    <button
      className={cn(
        'leading-none flex outline-none md:text-lg font-medium py-[10px] px-6 rounded-md transition-opacity hover:opacity-80',
        {
          'bg-gradient-primary text-dark': variant === 'primary',
        },
        { 'bg-gradient-dark': variant === 'secondary' },
        { 'text-primary border border-primary': variant === 'outlined' },
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
