/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

const Footer = ({logo}) => {
  return (
    <div id="contact" className="flex flex-row flex-wrap items-center justify-around p-10">
      <a href="/" className="w-1/2 pl-5 mb-2 lg:visible lg:w-auto lg:pl-0 lg:mb-0">
        <img width="70%" src={logo} alt="logo"/>
      </a>
      <div className="flex items-center justify-around w-2/3 pt-5 lg:pt-0 lg:w-1/3 ">
        <a href="#">
            <svg className="text-orange-600 hover:text-orange-700" width="30" height="30" viewBox="0 0 35 29" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M34.145 4.1787C32.9202 4.70704 31.5873 5.08729 30.2144 5.23539C31.6398 4.38858 32.7072 3.05077 33.2164 1.47295C31.8788 2.26862 30.4136 2.82656 28.8855 3.12202C28.2469 2.43928 27.4745 1.89538 26.6165 1.52421C25.7585 1.15304 24.8332 0.962551 23.8983 0.964616C20.1159 0.964616 17.0739 4.03061 17.0739 7.79305C17.0739 8.32139 17.1379 8.84973 17.242 9.35806C11.5783 9.06187 6.52705 6.35611 3.16887 2.21343C2.55697 3.25857 2.23632 4.44858 2.24026 5.65966C2.24026 8.0292 3.44505 10.1186 5.28224 11.3474C4.19955 11.3047 3.14222 11.0071 2.19624 10.4788V10.5628C2.19624 13.881 4.54176 16.6308 7.66779 17.2632C7.08084 17.4157 6.47704 17.4936 5.87062 17.4953C5.42633 17.4953 5.00606 17.4513 4.58178 17.3913C5.44634 20.097 7.96398 22.0623 10.9619 22.1263C8.6164 23.9635 5.67849 25.0442 2.48843 25.0442C1.91605 25.0442 1.38771 25.0242 0.839355 24.9602C3.86532 26.9014 7.45565 28.0222 11.3222 28.0222C23.8743 28.0222 30.7428 17.6234 30.7428 8.59757C30.7428 8.30138 30.7428 8.00518 30.7227 7.70899C32.0516 6.73636 33.2164 5.53158 34.145 4.1787Z" fill="currentColor"/></svg>
        </a>
        <a href="#">
            <svg className="text-orange-600 hover:text-orange-700" width="30" height="30" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M31.2106 0.48291H1.75153C1.04307 0.48291 0.470703 1.05528 0.470703 1.76374V31.2229C0.470703 31.9313 1.04307 32.5037 1.75153 32.5037H31.2106C31.9191 32.5037 32.4915 31.9313 32.4915 31.2229V1.76374C32.4915 1.05528 31.9191 0.48291 31.2106 0.48291ZM27.5122 9.82897H24.9546C22.9493 9.82897 22.561 10.7816 22.561 12.1825V15.2685H27.3481L26.7237 20.0996H22.561V32.5037H17.5698V20.1036H13.3951V15.2685H17.5698V11.7062C17.5698 7.57151 20.0954 5.31805 23.7858 5.31805C25.555 5.31805 27.072 5.45013 27.5163 5.51017V9.82897H27.5122Z" fill="currentColor"/></svg>
        </a>
        <a href="#">
            <svg className="text-orange-600 hover:text-orange-700" width="30" height="30" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M31.198 0.48291H1.73884C1.03038 0.48291 0.458008 1.05528 0.458008 1.76374V31.2229C0.458008 31.9313 1.03038 32.5037 1.73884 32.5037H31.198C31.9064 32.5037 32.4788 31.9313 32.4788 31.2229V1.76374C32.4788 1.05528 31.9064 0.48291 31.198 0.48291ZM9.95617 27.7686H5.20509V12.4867H9.95617V27.7686ZM7.58263 10.3973C7.03798 10.3973 6.50557 10.2358 6.05271 9.93325C5.59985 9.63066 5.24689 9.20057 5.03846 8.69738C4.83004 8.1942 4.7755 7.6405 4.88176 7.10632C4.98801 6.57214 5.25029 6.08146 5.63541 5.69634C6.02053 5.31121 6.51121 5.04894 7.04539 4.94268C7.57958 4.83643 8.13327 4.89096 8.63646 5.09939C9.13965 5.30782 9.56973 5.66078 9.87232 6.11363C10.1749 6.56649 10.3364 7.09891 10.3364 7.64356C10.3324 9.16454 9.09962 10.3973 7.58263 10.3973ZM27.7437 27.7686H22.9966V20.3358C22.9966 18.5626 22.9646 16.2852 20.527 16.2852C18.0574 16.2852 17.6772 18.2144 17.6772 20.2077V27.7686H12.9341V12.4867H17.4891V14.5761H17.5531C18.1855 13.3753 19.7345 12.1065 22.048 12.1065C26.8591 12.1065 27.7437 15.2725 27.7437 19.3872V27.7686Z" fill="currentColor"/></svg>
        </a>
      </div>
      <div className="mt-10 text-lg text-blue-800 lg:mt-0">
          Copyright 2024
      </div>
    </div>
  );
};

export default Footer;
