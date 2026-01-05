import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-100 text-gray-900">
      <div className="max-w-[1170px] mx-auto px-4 sm:px-8 xl:px-0">
        {/* <!-- footer menu start --> */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 xl:gap-12 pt-17.5 xl:pt-22.5 pb-10 xl:pb-15">

          {/* <!-- Help & Support Section --> */}
          <div className="w-full">
            <h2 className="mb-7.5 text-xl font-semibold text-gray-900">
              Help & Support
            </h2>

            <ul className="flex flex-col gap-4">
              <li className="flex gap-4.5">
                <span className="flex-shrink-0 text-blue-500">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M4.25 8.51464C4.25 4.45264 7.77146 1.25 12 1.25C16.2285 1.25 19.75 4.45264 19.75 8.51464C19.75 12.3258 17.3871 16.8 13.5748 18.4292C12.574 18.8569 11.426 18.8569 10.4252 18.4292C6.61289 16.8 4.25 12.3258 4.25 8.51464ZM12 2.75C8.49655 2.75 5.75 5.38076 5.75 8.51464C5.75 11.843 7.85543 15.6998 11.0147 17.0499C11.639 17.3167 12.361 17.3167 12.9853 17.0499C16.1446 15.6998 18.25 11.843 18.25 8.51464C18.25 5.38076 15.5034 2.75 12 2.75Z"
                      fill="currentColor"
                    />
                    <circle cx="12" cy="8.5" r="2.5" fill="currentColor" />
                  </svg>
                </span>
                <div className="text-gray-600 text-sm">
                  <p className="font-medium text-gray-900">Address</p>
                  <p>685 Market Street, Las Vegas, LA 95820, United States.</p>
                </div>
              </li>

              <li className="flex gap-4.5">
                <span className="flex-shrink-0 text-green-500">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M4.7177 3.0919C5.94388 1.80096 7.9721 2.04283 8.98569 3.47641L10.2467 5.25989C11.0574 6.40656 10.9889 8.00073 10.0214 9.0194L9.7765 9.27719C9.77582 9.27897 9.7751 9.2809 9.77436 9.28299C9.76142 9.31935 9.7287 9.43513 9.7609 9.65489C9.82765 10.1104 10.1793 11.0361 11.607 12.5392C13.0391 14.0469 13.9078 14.4023 14.3103 14.4677C14.484 14.4959 14.5748 14.4714 14.6038 14.4612L15.0124 14.031C15.8862 13.111 17.2485 12.9298 18.347 13.5621L20.2575 14.6617C21.8904 15.6016 22.2705 17.9008 20.9655 19.2747L19.545 20.7703C19.1016 21.2371 18.497 21.6355 17.75 21.7092C15.9261 21.8893 11.701 21.6548 7.27161 16.9915C3.13844 12.64 2.35326 8.85513 2.25401 7.00591L2.92011 6.97016L2.25401 7.00591C2.20497 6.09224 2.61224 5.30855 3.1481 4.7444L4.7177 3.0919ZM12 2.75C8.49655 2.75 5.75 5.38076 5.75 8.51464C5.75 11.843 7.85543 15.6998 11.0147 17.0499C11.639 17.3167 12.361 17.3167 12.9853 17.0499C16.1446 15.6998 18.25 11.843 18.25 8.51464C18.25 5.38076 15.5034 2.75 12 2.75Z"
                      fill="currentColor"
                    />
                  </svg>
                </span>
                <div className="text-gray-600 text-sm">
                  <p className="font-medium text-gray-900">Phone</p>
                  <a href="tel:+0995327869843" className="hover:text-gray-800 transition-colors">+099 532-786-9843</a>
                </div>
              </li>

              <li className="flex gap-4.5">
                <span className="flex-shrink-0 text-red-500">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M9.94358 3.25H14.0564C15.8942 3.24998 17.3498 3.24997 18.489 3.40314C19.6614 3.56076 20.6104 3.89288 21.3588 4.64124C22.1071 5.38961 22.4392 6.33856 22.5969 7.51098C22.75 8.65019 22.75 10.1058 22.75 11.9436V12.0564C22.75 13.8942 22.75 15.3498 22.5969 16.489C22.4392 17.6614 22.1071 18.6104 21.3588 19.3588C20.6104 20.1071 19.6614 20.4392 18.489 20.5969C17.3498 20.75 15.8942 20.75 14.0564 20.75H9.94359C8.10583 20.75 6.65019 20.75 5.51098 20.5969C4.33856 20.4392 3.38961 20.1071 2.64124 19.3588C1.89288 18.6104 1.56076 17.6614 1.40314 16.489C1.24997 15.3498 1.24998 13.8942 1.25 12.0564V11.9436C1.24998 10.1058 1.24997 8.65019 1.40314 7.51098C1.56076 6.33856 1.89288 5.38961 2.64124 4.64124C3.38961 3.89288 4.33856 3.56076 5.51098 3.40314C6.65019 3.24997 8.10582 3.24998 9.94358 3.25Z"
                      fill="currentColor"
                    />
                  </svg>
                </span>
                <div className="text-gray-600 text-sm">
                  <p className="font-medium text-gray-900">Email</p>
                  <a href="mailto:support@example.com" className="hover:text-gray-800 transition-colors">support@example.com</a>
                </div>
              </li>
            </ul>

            {/* <!-- Social Links start --> */}
            <div className="flex items-center gap-3 mt-7.5">
              <a
                href="#"
                aria-label="Facebook Social Link"
                className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 hover:bg-blue-100 transition-colors duration-200"
              >
                <svg
                  className="fill-current w-5 h-5 text-gray-700"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.99984 0.666504C7.48706 0.666504 6.09165 1.04648 4.81361 1.80644C3.53557 2.54019 2.51836 3.5491 1.76197 4.83317C1.03166 6.11724 0.666504 7.51923 0.666504 9.03915C0.666504 10.428 0.966452 11.7252 1.56635 12.9307C2.19233 14.1099 3.04 15.0926 4.10938 15.8788C5.17876 16.6649 6.37855 17.1497 7.70876 17.3332V11.4763H5.59608V9.03915H7.70876V7.19166C7.70876 6.16965 7.98262 5.37038 8.53035 4.79386C9.10417 4.21734 9.8736 3.92908 10.8386 3.92908C11.4646 3.92908 12.0906 3.98149 12.7166 4.08632V6.16965H11.6602C11.1908 6.16965 10.8386 6.30068 10.6039 6.56273C10.3952 6.79858 10.2909 7.09994 10.2909 7.46682V9.03915H12.6383L12.2471 11.4763H10.2909V17.3332C11.6472 17.1235 12.86 16.6256 13.9294 15.8395C14.9988 15.0533 15.8334 14.0706 16.4333 12.8913C17.0332 11.6859 17.3332 10.4018 17.3332 9.03915C17.3332 7.51923 16.955 6.11724 16.1986 4.83317C15.4683 3.5491 14.4641 2.54019 13.1861 1.80644C11.908 1.04648 10.5126 0.666504 8.99984 0.666504Z"
                    fill=""
                  />
                </svg>
              </a>

              <a
                href="#"
                aria-label="Twitter Social Link"
                className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 hover:bg-blue-100 transition-colors duration-200"
              >
                <svg
                  className="fill-current w-5 h-5 text-gray-700"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18.3332 4.91293C17.7353 5.18229 17.0875 5.36594 16.39 5.46389C17.1124 5.02312 17.6107 4.39869 17.8847 3.59061C17.2121 3.98241 16.4896 4.25177 15.7173 4.39869C15.0447 3.68856 14.1976 3.3335 13.1762 3.3335C12.2544 3.3335 11.4572 3.66407 10.7846 4.32523C10.1119 4.98639 9.77562 5.78223 9.77562 6.71274C9.77562 6.95762 9.81299 7.21473 9.88773 7.48409C8.49261 7.41063 7.17223 7.06781 5.92659 6.45563C4.70587 5.81896 3.67198 4.98639 2.82495 3.95792C2.526 4.47216 2.37652 5.03536 2.37652 5.64755C2.37652 6.23524 2.51354 6.77396 2.78758 7.26371C3.06162 7.75345 3.42286 8.14525 3.87129 8.4391C3.34812 8.4391 2.83741 8.30442 2.33915 8.03506V8.07179C2.33915 8.87987 2.60073 9.59 3.1239 10.2022C3.64707 10.8144 4.29481 11.2062 5.0671 11.3776C4.79306 11.451 4.49411 11.4878 4.17024 11.4878C3.97094 11.4878 3.75918 11.4633 3.53496 11.4143C3.75918 12.0999 4.15778 12.6632 4.73078 13.1039C5.32869 13.5202 5.98888 13.7406 6.71135 13.7651C5.49062 14.7201 4.08305 15.1976 2.48863 15.1976C2.21459 15.1976 1.94054 15.1853 1.6665 15.1609C3.26092 16.1648 5.00482 16.6668 6.89819 16.6668C8.89122 16.6668 10.66 16.1648 12.2046 15.1609C13.6247 14.2793 14.7333 13.0794 15.5305 11.5612C16.2779 10.1165 16.6516 8.635 16.6516 7.11678L16.6142 6.67601C17.2868 6.21075 17.8598 5.62306 18.3332 4.91293Z"
                    fill=""
                  />
                </svg>
              </a>

              <a
                href="#"
                aria-label="Instagram Social Link"
                className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 hover:bg-pink-100 transition-colors duration-200"
              >
                <svg
                  className="fill-current w-5 h-5 text-gray-700"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_317_501)">
                    <path
                      d="M19.6562 6C19.625 5 19.4375 4.28125 19.2187 3.625C19 2.96875 18.6562 2.4375 18.125 1.90625C17.5937 1.375 17.0625 1.0625 16.4375 0.8125C15.8125 0.5625 15.125 0.40625 14.0625 0.375C12.9687 0.3125 12.6562 0.3125 10 0.3125C7.34375 0.3125 7.0625 0.3125 6 0.34375C4.9375 0.375 4.28125 0.5625 3.625 0.78125C2.96875 1 2.4375 1.375 1.90625 1.90625C1.375 2.4375 1.03125 2.96875 0.8125 3.625C0.5625 4.25 0.40625 4.9375 0.375 6C0.34375 7.0625 0.3125 7.34375 0.3125 10C0.3125 12.6562 0.3125 12.9375 0.34375 14C0.375 15.0625 0.5625 15.7188 0.78125 16.375C1 17.0312 1.34375 17.5625 1.875 18.0938C2.40625 18.625 2.96875 18.9688 3.59375 19.1875C4.21875 19.4062 4.90625 19.5938 5.96875 19.625C7.03125 19.6875 7.3125 19.6875 9.96875 19.6875C12.625 19.6875 12.9062 19.6875 13.9687 19.6562C15.0312 19.625 15.6875 19.4375 16.3437 19.2188C17 19 17.5312 18.6562 18.0625 18.125C18.5937 17.5938 18.9375 17.0312 19.1562 16.4062C19.375 15.7812 19.5625 15.0938 19.5937 14.0312C19.625 13.0312 19.625 12.7188 19.625 10.0625C19.625 7.40625 19.6875 7.0625 19.6562 6ZM17.9062 13.9062C17.875 14.8438 17.6875 15.3438 17.5625 15.7188C17.375 16.1562 17.1562 16.5 16.8125 16.8125C16.4687 17.1562 16.1562 17.3438 15.7187 17.5625C15.375 17.6875 14.875 17.875 13.9062 17.9062C12.9062 17.9062 12.5937 17.9062 10.0312 17.9062C7.46875 17.9062 7.125 17.9062 6.125 17.875C5.1875 17.8438 4.6875 17.6562 4.3125 17.5312C3.875 17.3438 3.53125 17.125 3.21875 16.7812C2.875 16.4375 2.6875 16.125 2.46875 15.6875C2.34375 15.3438 2.15625 14.8438 2.125 13.875C2.125 12.9063 2.125 12.5938 2.125 10C2.125 7.40625 2.125 7.09375 2.15625 6.09375C2.1875 5.15625 2.375 4.65625 2.5 4.28125C2.6875 3.84375 2.90625 3.5 3.21875 3.1875C3.5625 2.84375 3.875 2.65625 4.3125 2.46875C4.65625 2.34375 5.15625 2.15625 6.125 2.125C7.125 2.09375 7.4375 2.09375 10.0312 2.09375C12.625 2.09375 12.9375 2.09375 13.9375 2.125C14.875 2.15625 15.375 2.34375 15.75 2.46875C16.1875 2.65625 16.5312 2.875 16.8437 3.1875C17.1875 3.53125 17.375 3.84375 17.5937 4.28125C17.7187 4.625 17.9062 5.125 17.9375 6.09375C17.9687 7.09375 17.9687 7.40625 17.9687 10C17.9687 12.5938 17.9375 12.9062 17.9062 13.9062Z"
                      fill=""
                    />
                    <path
                      d="M10.0005 5.03125C7.21924 5.03125 5.03174 7.28125 5.03174 10C5.03174 12.7812 7.28174 14.9688 10.0005 14.9688C12.7192 14.9688 15.0005 12.7812 15.0005 10C15.0005 7.21875 12.7817 5.03125 10.0005 5.03125ZM10.0005 13.25C8.18799 13.25 6.75049 11.7812 6.75049 10C6.75049 8.21875 8.21924 6.75 10.0005 6.75C11.813 6.75 13.2505 8.1875 13.2505 10C13.2505 11.8125 11.813 13.25 10.0005 13.25Z"
                      fill=""
                    />
                    <path
                      d="M15.2188 5.96875C15.8573 5.96875 16.375 5.45106 16.375 4.8125C16.375 4.17391 15.8573 3.65625 15.2188 3.65625C14.5802 3.65625 14.0625 4.17391 14.0625 4.8125C14.0625 5.45106 14.5802 5.96875 15.2188 5.96875Z"
                      fill=""
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_317_501">
                      <rect width="20" height="20" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </a>

              <a
                href="#"
                aria-label="Linkedin Social Link"
                className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 hover:bg-blue-100 transition-colors duration-200"
              >
                <svg
                  className="fill-current w-5 h-5 text-gray-700"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.6535 1.6665C17.1222 1.6665 17.5129 1.83577 17.8254 2.17432C18.1639 2.48682 18.3332 2.87744 18.3332 3.34619V16.6535C18.3332 17.1222 18.1639 17.5259 17.8254 17.8644C17.5129 18.1769 17.1222 18.3332 16.6535 18.3332H3.34619C2.87744 18.3332 2.4738 18.1769 2.13525 17.8644C1.82275 17.5259 1.6665 17.1222 1.6665 16.6535V3.34619C1.6665 2.87744 1.82275 2.48682 2.13525 2.17432C2.4738 1.83577 2.87744 1.6665 3.34619 1.6665H16.6535ZM15.4295 15.4295V11.0155C15.4295 10.2603 15.1561 9.62223 14.6092 9.1014C14.0884 8.55452 13.4504 8.28109 12.6952 8.28109C12.3306 8.28109 11.966 8.38525 11.6014 8.59359C11.2368 8.80192 10.9634 9.06234 10.7811 9.37484V8.43734H8.43734V15.4295H10.7811V11.2889C10.7811 10.9764 10.8853 10.716 11.0936 10.5077C11.328 10.2733 11.6014 10.1561 11.9139 10.1561C12.2524 10.1561 12.5259 10.2733 12.7342 10.5077C12.9686 10.716 13.0858 10.9764 13.0858 11.2889V15.4295H15.4295ZM5.74202 7.14827C6.13265 7.14827 6.45817 7.01807 6.71859 6.75765C7.00505 6.47119 7.14827 6.13265 7.14827 5.74202C7.14827 5.3514 7.00505 5.02588 6.71859 4.76546C6.45817 4.479 6.13265 4.33577 5.74202 4.33577C5.3514 4.33577 5.01286 4.479 4.7264 4.76546C4.46598 5.02588 4.33577 5.3514 4.33577 5.74202C4.33577 6.13265 4.46598 6.47119 4.7264 6.75765C5.01286 7.01807 5.3514 7.14827 5.74202 7.14827ZM6.87484 15.4295V8.43734H4.57015V15.4295H6.87484Z"
                    fill=""
                  />
                </svg>
              </a>
            </div>
            {/* <!-- Social Links end --> */}
          </div>

          {/* <!-- Menu Section --> */}
          <div className="w-full">
            <h2 className="mb-7.5 text-xl font-semibold text-gray-900">
              Menu
            </h2>

            <ul className="flex flex-col gap-3">
              <li>
                <Link className="text-gray-600 hover:text-gray-900 transition-colors duration-200 text-sm" href="/">
                  Home
                </Link>
              </li>
              <li>
                <Link className="text-gray-600 hover:text-gray-900 transition-colors duration-200 text-sm" href="/shop-with-sidebar">
                  Shop
                </Link>
              </li>
              <li>
                <Link className="text-gray-600 hover:text-gray-900 transition-colors duration-200 text-sm" href="/all-categories">
                  All Categories
                </Link>
              </li>
              <li>
                <Link className="text-gray-600 hover:text-gray-900 transition-colors duration-200 text-sm" href="/blog-grid">
                  Blog
                </Link>
              </li>
              <li>
                <Link className="text-gray-600 hover:text-gray-900 transition-colors duration-200 text-sm" href="/contact">
                  Contact
                </Link>
              </li>
              <li>
                <Link className="text-gray-600 hover:text-gray-900 transition-colors duration-200 text-sm" href="/my-account">
                  My Account
                </Link>
              </li>
            </ul>
          </div>

          {/* <!-- Quick Link Section 1 --> */}
          <div className="w-full">
            <h2 className="mb-7.5 text-xl font-semibold text-gray-900">
              Quick Link
            </h2>

            <ul className="flex flex-col gap-3">
              <li>
                <a className="text-gray-600 hover:text-gray-900 transition-colors duration-200 text-sm" href="#">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-900 transition-colors duration-200 text-sm" href="#">
                  Terms of Use
                </a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-900 transition-colors duration-200 text-sm" href="#">
                  FAQ
                </a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-900 transition-colors duration-200 text-sm" href="#">
                  Contact
                </a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-900 transition-colors duration-200 text-sm" href="#">
                  Help Center
                </a>
              </li>
            </ul>
          </div>

          {/* <!-- Quick Link Section 2 --> */}
          <div className="w-full">
            <h2 className="mb-7.5 text-xl font-semibold text-gray-900">
              Services
            </h2>

            <ul className="flex flex-col gap-3">
              <li>
                <a className="text-gray-600 hover:text-gray-900 transition-colors duration-200 text-sm" href="#">
                  Free Shipping
                </a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-900 transition-colors duration-200 text-sm" href="#">
                  Easy Returns
                </a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-900 transition-colors duration-200 text-sm" href="#">
                  24/7 Support
                </a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-900 transition-colors duration-200 text-sm" href="#">
                  Secure Payment
                </a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-900 transition-colors duration-200 text-sm" href="#">
                  Order Tracking
                </a>
              </li>
            </ul>
          </div>

        </div>
        {/* <!-- footer menu end --> */}
      </div>

      {/* <!-- footer bottom start --> */}
      <div className="border-t border-gray-300">
        <div className="max-w-[1170px] mx-auto px-4 sm:px-8 xl:px-0">
          <div className="flex flex-col md:flex-row justify-between items-center py-6">
            <p className="text-gray-600 text-sm mb-4 md:mb-0">
              &copy; {year}. All rights reserved by PimjoLabs.
            </p>

            <div className="flex items-center gap-6">
              <span className="text-gray-600 text-sm">We Accept:</span>
              <div className="flex items-center gap-3">
                <div className="w-8 h-5 bg-gray-400 rounded"></div>
                <div className="w-8 h-5 bg-gray-400 rounded"></div>
                <div className="w-8 h-5 bg-gray-400 rounded"></div>
                <div className="w-8 h-5 bg-gray-400 rounded"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- footer bottom end --> */}
    </footer>
  );
};

export default Footer;
