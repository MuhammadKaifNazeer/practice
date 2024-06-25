import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-white pb-10" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8">
            <a href="/" className="relative z-10">
              <img
                src="https://www.userogue.com/_next/image?url=%2Fimages%2Flogo-v3-dark%2Flogo.png&w=128&q=75"
                width="120"
                height="120"
                alt="hero image"
                loading="lazy"
                className="transition duration-500 scale-100 blur-0 h-[40px] w-[100px] object-contain md:h-[50px] md:w-[124px]"
              />
            </a>
            <p className="text-sm leading-6 text-gray-600">
              Never say no bid again.
            </p>
            <div className="flex space-x-6">
              <a
                href="https://twitter.com/UseRogue"
                className="text-gray-400 hover:text-gray-500"
              >
                <span className="sr-only">Twitter</span>
                <svg
                  viewBox="0 0 24 24"
                  className="h-6 w-6"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/company/userogue/"
                className="text-gray-400 hover:text-gray-500"
              >
                <span className="sr-only">LinkedIn</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="tabler-icon tabler-icon-brand-linkedin"
                >
                  <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path>
                  <path d="M8 11l0 5"></path>
                  <path d="M8 8l0 .01"></path>
                  <path d="M12 16l0 -5"></path>
                  <path d="M16 16v-3a2 2 0 0 0 -4 0"></path>
                </svg>
              </a>
            </div>
          </div>
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-gray-900">
                  Pages
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li>
                    <a
                      href="/features"
                      className="text-sm leading-6 text-gray-600 hover:text-gray-900"
                    >
                      Features
                    </a>
                  </li>
                  <li>
                    <a
                      href="/pricing"
                      className="text-sm leading-6 text-gray-600 hover:text-gray-900"
                    >
                      Pricing
                    </a>
                  </li>
                  <li>
                    <a
                      href="/blog"
                      className="text-sm leading-6 text-gray-600 hover:text-gray-900"
                    >
                      Blog
                    </a>
                  </li>
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-gray-900">
                  Learn
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li>
                    <a
                      href="/gpt-masterclass"
                      className="text-sm leading-6 text-gray-600 hover:text-gray-900"
                    >
                      GPT Masterclass
                    </a>
                  </li>
                  <li>
                    <a
                      href="/rogue-masterclass"
                      className="text-sm leading-6 text-gray-600 hover:text-gray-900"
                    >
                      Rogue Masterclass
                    </a>
                  </li>
                  <li>
                    <a
                      href="/how-to-sell-technology-to-the-government"
                      className="text-sm leading-6 text-gray-600 hover:text-gray-900"
                    >
                      How to sell technology to the government
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-gray-900">
                  Support
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li>
                    <a
                      href="https://trust.userogue.com"
                      className="text-sm leading-6 text-gray-600 hover:text-gray-900"
                    >
                      Security
                    </a>
                  </li>
                  <li>
                    <a
                      href="mailto:success@userogue.com"
                      className="text-sm leading-6 text-gray-600 hover:text-gray-900"
                    >
                      Contact Us
                    </a>
                  </li>
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-gray-900">
                  Product
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li>
                    <a
                      href="https://app.userogue.com"
                      className="text-sm leading-6 text-gray-600 hover:text-gray-900"
                    >
                      Sign up
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://app.userogue.com"
                      className="text-sm leading-6 text-gray-600 hover:text-gray-900"
                    >
                      Login
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
