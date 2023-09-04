import { ChangeEventHandler, FC, HTMLProps, ReactNode } from 'react';
import cn from 'classnames';

interface Props extends HTMLProps<HTMLInputElement> {
  onChange?: ChangeEventHandler<HTMLInputElement>;
  icon?: ReactNode;
}

const Input: FC<Props> = ({ onChange, icon, className, ...props }) => {
  return (
    <div
      className={cn(
        'bg-gradient-dark flex rounded-md overflow-hidden text-lg w-[400px]',
        className
      )}
    >
      {icon && <div className="flex items-center ml-4 mr-[10px]">{icon}</div>}
      <input
        className={cn(
          'leading-none bg-transparent outline-none py-[10px] pr-6 w-full font-medium placeholder:font-medium placeholder:text-[#6D799C]',
          { 'px-6': !icon }
        )}
        onChange={onChange}
        {...props}
      />
    </div>
  );
};

export default Input;
