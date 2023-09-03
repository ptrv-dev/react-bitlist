import { ChangeEventHandler, FC, HTMLProps, ReactNode } from 'react';
import cn from 'classnames';

interface Props extends HTMLProps<HTMLInputElement> {
  onChange?: ChangeEventHandler<HTMLInputElement>;
  icon?: ReactNode;
}

const Input: FC<Props> = ({ onChange, icon, ...props }) => {
  return (
    <div className="bg-gradient-dark flex rounded-md overflow-hidden text-lg w-[400px]">
      {icon && <div className="flex items-center ml-4 mr-2">{icon}</div>}
      <input
        className={cn(
          'bg-transparent outline-none py-[10px] pr-6 w-full font-medium placeholder:font-medium',
          { 'px-6': !icon }
        )}
        onChange={onChange}
        {...props}
      />
    </div>
  );
};

export default Input;