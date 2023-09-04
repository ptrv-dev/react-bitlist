import { FC } from 'react';
import { Button, Input } from './ui';
import { MailIcon } from './icons';

const SignInSection: FC = () => {
  return (
    <section className="py-20 pb-40 border-b border-secondary relative overflow-hidden">
      <svg
        width="1018"
        height="1262"
        viewBox="0 0 1018 1262"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute top-1/2 left-1/2 -translate-x-[60%] -translate-y-1/2 pointer-events-none"
      >
        <g filter="url(#filter0_f_1001_187)">
          <path
            d="M993.757 1088.27L778.285 1237.33L23.9999 173.06L239.472 24L993.757 1088.27Z"
            fill="url(#paint0_radial_1001_187)"
            fillOpacity="0.72"
          />
        </g>
        <defs>
          <filter
            id="filter0_f_1001_187"
            x="-6.10352e-05"
            y="-3.05176e-05"
            width="1017.76"
            height="1261.33"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="12"
              result="effect1_foregroundBlur_1001_187"
            />
          </filter>
          <radialGradient
            id="paint0_radial_1001_187"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(717.329 425.827) rotate(140.161) scale(397.932 397.062)"
          >
            <stop stopColor="#00BAF4" />
            <stop offset="1" stopColor="#12131A" stopOpacity="0" />
          </radialGradient>
        </defs>
      </svg>
      <div className="sign-in-light1 absolute left-[20%] -top-[168px]" />
      <div className="sign-in-light2 absolute right-[20%] -top-[24px]" />
      <div className="container flex flex-col items-center relative z-10">
        <h2 className="text-center font-medium text-3xl md:text-4xl xl:text-5xl mb-4 leading-snug max-w-2xl">
          Register your account now and start to trade
        </h2>
        <div className="flex w-full max-w-md">
          <Input
            className="w-full"
            placeholder="example@gmail.com"
            icon={<MailIcon width={20} height={20} />}
          />
          <Button className="-ml-2 flex-shrink-0">Sign in</Button>
        </div>
      </div>
    </section>
  );
};

export default SignInSection;
