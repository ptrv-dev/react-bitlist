import { FC } from 'react';
import { Button } from './ui';
import { NAVIGATION_ITEMS } from './Header';

const Footer: FC = () => {
  return (
    <footer className="pt-16 pb-8">
      <div className="container pb-16 flex flex-col gap-8 sm:flex-row justify-between">
        <div>
          <a className="inline-block mb-8 lg:mb-12" href="/">
            <img src="/assets/img/logo-dark.svg" alt="" />
          </a>
          <div className="flex gap-4 mb-8 lg:mb-16">
            <a className="text-[#3C4867]" href="https://t.me/ptrv_dev">
              <svg
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15 0C6.72 0 0 6.72 0 15C0 23.28 6.72 30 15 30C23.28 30 30 23.28 30 15C30 6.72 23.28 0 15 0ZM21.96 10.2C21.735 12.57 20.76 18.33 20.265 20.985C20.055 22.11 19.635 22.485 19.245 22.53C18.375 22.605 17.715 21.96 16.875 21.405C15.555 20.535 14.805 19.995 13.53 19.155C12.045 18.18 13.005 17.64 13.86 16.77C14.085 16.545 17.925 13.05 18 12.735C18.0104 12.6873 18.009 12.6378 17.996 12.5907C17.9829 12.5437 17.9585 12.5005 17.925 12.465C17.835 12.39 17.715 12.42 17.61 12.435C17.475 12.465 15.375 13.86 11.28 16.62C10.68 17.025 10.14 17.235 9.66 17.22C9.12 17.205 8.1 16.92 7.335 16.665C6.39 16.365 5.655 16.2 5.715 15.675C5.745 15.405 6.12 15.135 6.825 14.85C11.205 12.945 14.115 11.685 15.57 11.085C19.74 9.345 20.595 9.045 21.165 9.045C21.285 9.045 21.57 9.075 21.75 9.225C21.9 9.345 21.945 9.51 21.96 9.63C21.945 9.72 21.975 9.99 21.96 10.2Z"
                  fill="currentColor"
                />
              </svg>
            </a>
            <a className="text-[#3C4867]" href="https://t.me/ptrv_dev">
              <svg
                width="30"
                height="29"
                viewBox="0 0 30 29"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M30 14.5363C30 6.51228 23.28 0 15 0C6.72 0 0 6.51228 0 14.5363C0 21.5719 5.16 27.4301 12 28.782V18.8972H9V14.5363H12V10.9023C12 8.09674 14.355 5.81454 17.25 5.81454H21V10.1754H18C17.175 10.1754 16.5 10.8296 16.5 11.6291V14.5363H21V18.8972H16.5V29C24.075 28.2732 30 22.0807 30 14.5363Z"
                  fill="currentColor"
                />
              </svg>
            </a>
            <a className="text-[#3C4867]" href="https://t.me/ptrv_dev">
              <svg
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <mask
                  id="mask0_1001_426"
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="30"
                  height="30"
                >
                  <circle
                    cx="14.6154"
                    cy="14.6154"
                    r="14.6154"
                    fill="#D9D9D9"
                  />
                </mask>
                <g mask="url(#mask0_1001_426)">
                  <path
                    d="M14.6154 -4.61536C3.99442 -4.61536 -4.61536 3.99442 -4.61536 14.6154C-4.61536 25.2364 3.99442 33.8462 14.6154 33.8462C25.2364 33.8462 33.8462 25.2364 33.8462 14.6154C33.8462 3.99442 25.2364 -4.61536 14.6154 -4.61536ZM22.4379 11.1378C22.4459 11.3021 22.4479 11.4664 22.4479 11.6266C22.4479 16.6346 18.6399 22.4059 11.6727 22.4059C9.614 22.4093 7.59812 21.818 5.86742 20.7032C6.16189 20.7392 6.46437 20.7532 6.77086 20.7532C8.5457 20.7532 10.1783 20.1503 11.4744 19.1326C10.6846 19.1171 9.91924 18.8556 9.28511 18.3845C8.65097 17.9134 8.17961 17.2562 7.93673 16.5044C8.50395 16.6123 9.08827 16.5897 9.64546 16.4383C8.78819 16.265 8.01725 15.8005 7.46338 15.1236C6.90952 14.4466 6.60681 13.599 6.6066 12.7244V12.6783C7.11742 12.9608 7.70235 13.133 8.32335 13.1531C7.51966 12.6181 6.95072 11.7962 6.73289 10.8557C6.51506 9.91508 6.66479 8.92682 7.15147 8.09298C8.1029 9.26285 9.28941 10.2199 10.6342 10.9021C11.9789 11.5843 13.452 11.9765 14.958 12.0533C14.7665 11.2406 14.8489 10.3875 15.1924 9.62644C15.5358 8.86542 16.1211 8.23919 16.8571 7.84511C17.5932 7.45103 18.4389 7.31117 19.2626 7.44729C20.0864 7.5834 20.8421 7.98786 21.4123 8.59778C22.26 8.43007 23.0729 8.11913 23.8161 7.67831C23.5336 8.55599 22.9421 9.30126 22.1515 9.77567C22.9024 9.68523 23.6356 9.48336 24.327 9.17671C23.8191 9.93772 23.1794 10.6019 22.4379 11.1378Z"
                    fill="currentColor"
                  />
                </g>
              </svg>
            </a>
          </div>
          <div className="flex gap-2">
            <Button variant="secondary">Register</Button>
            <Button>Log in</Button>
          </div>
        </div>
        <div className="flex gap-16 justify-between sm:justify-normal">
          <nav className="flex flex-col gap-4 md:gap-7">
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
          <nav className="flex flex-col gap-4 md:gap-7">
            <a
              className="transition-colors text-[#464E62] hover:text-primary"
              href="#!"
            >
              Privacy policy
            </a>
            <a
              className="transition-colors text-[#464E62] hover:text-primary"
              href="#!"
            >
              Terms of rules
            </a>
          </nav>
        </div>
      </div>
      <div>
        <p className="text-[#27314A] md:text-lg font-medium text-center">
          Bitlist © All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
