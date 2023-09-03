import { FC, HTMLProps } from 'react';

const MailIcon: FC<HTMLProps<SVGSVGElement>> = ({
  width = 24,
  height = 24,
  ...props
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M19.7083 16.5L13.619 11M8.38095 11L2.29169 16.5M1.83333 6.41669L9.31784 11.6558C9.92391 12.0801 10.2269 12.2922 10.5566 12.3744C10.8477 12.447 11.1523 12.447 11.4434 12.3744C11.773 12.2922 12.0761 12.0801 12.6822 11.6558L20.1667 6.41669M6.23333 18.3334H15.7667C17.3068 18.3334 18.0769 18.3334 18.6651 18.0336C19.1826 17.77 19.6033 17.3493 19.8669 16.8318C20.1667 16.2436 20.1667 15.4735 20.1667 13.9334V8.06669C20.1667 6.52654 20.1667 5.75647 19.8669 5.16821C19.6033 4.65077 19.1826 4.23007 18.6651 3.96642C18.0769 3.66669 17.3068 3.66669 15.7667 3.66669H6.23333C4.69318 3.66669 3.92311 3.66669 3.33485 3.96642C2.81741 4.23007 2.39671 4.65077 2.13306 5.16821C1.83333 5.75647 1.83333 6.52654 1.83333 8.06669V13.9334C1.83333 15.4735 1.83333 16.2436 2.13306 16.8318C2.39671 17.3493 2.81741 17.77 3.33485 18.0336C3.92311 18.3334 4.69318 18.3334 6.23333 18.3334Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default MailIcon;
