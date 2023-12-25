import logo from "/public/logo.webp";
import Image from "next/image";
export const Footer = () => {
  return (
    <footer className="text-gray-600 body-font pl-12  ">
      <div className="container px-5  pt-52  mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col ">
        <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left md:mt-0 mt-10  ">
          <Image src={logo} alt="logo" className="mb-3 w-40" />

          <p className="mt-2 text-lg text-gray-500 pt-4">
          Small, artisan label that offers a thoughtfully curated collection of high quality everyday essentials made.
          </p>
          <span className=" inline-flex   pt-8">
            <a className="text-gray-500">
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
              </svg>
            </a>
            <a className="ml-3 text-gray-500">
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
              </svg>
            </a>
            <a className="ml-3 text-gray-500">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <rect width={20} height={20} x={2} y={2} rx={5} ry={5} />
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
              </svg>
            </a>
            <a className="ml-3 text-gray-500">
              <svg
                fill="currentColor"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={0}
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="none"
                  d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                />
                <circle cx={4} cy={4} r={2} stroke="none" />
              </svg>
            </a>
          </span>
        </div>
        <div className="flex-grow flex flex-wrap md:pr-20 -mb-10  md:text-left text-center">
          <div className="pl-72">
            <h2 className="title-font font-medium text-gray-900 text-2xl mb-3">
              Company
            </h2>
            <ul className="list-none">
              <li className="my-3">
                <a className="text-gray-600 hover:text-gray-800 ">About</a>
              </li>
              <li className="my-3">
                <a className="text-gray-600 hover:text-gray-800 ">
                  Terms of Use
                </a>
              </li>
              <li className="my-3">
                <a className="text-gray-600 hover:text-gray-800 ">
                  Privacy Policy
                </a>
              </li>
              <li className="my-3">
                <a className="text-gray-600 hover:text-gray-800 ">
                  How it Works
                </a>
              </li>
              <li className="my-3">
                <a className="text-gray-600 hover:text-gray-800 ">Contact Us</a>
              </li>
            </ul>  
          </div>
          <div className="pl-32 "> 
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-2xl ">
              Support
            </h2>
            <nav className="list-none my-3 ">
              <li className="text-gray-600 hover:text-gray-800">Quick Chat</li>
              <li className="my-3">
                <a className="text-gray-600 hover:text-gray-800 ">
                  Support Carrer
                </a>
              </li>
              <li className="my-3">
                <a className="text-gray-600 hover:text-gray-800">24h Service</a>
              </li>
            </nav>
          </div>
          <div className="pl-32">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-2xl mb-3 ">
              Contact
            </h2>
            <nav className="list-none ">
              <li className="my-3">
                <a className="text-gray-600 hover:text-gray-800">Whatsapp</a>
              </li>
              <li className="my-3">
                <a className="text-gray-600 hover:text-gray-800 pt-4 my-3">
                  Support 24h
                </a>
              </li>
            </nav>
          </div>
        </div>
      </div>
 
      <div className="text-gray-600 body-font  pt-24">
        <div className="bg-gray-100">
          <div className="container px-5 py-6  flex flex-wrap flex-col sm:flex-row  ">
            <div className="">Copyright © 2023 Dine Market</div>

            <div className="md:pl-80">
              
              Design By :<span className="font-bold "> Muhammad Hassan</span>
            </div>
            <p className="md:pl-56">
           
              Code by :
              <span className="font-bold  "> hassanrao786 on github</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

