import { useNavigate, Link } from 'react-router-dom';
import { Disclosure } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import React, { Fragment } from 'react';

import logo from 'assets/logo.svg';

import NAV_ITEMS from 'config/navs';

export const Header = () => {
  const navigate = useNavigate();
  const { pathname } = window.location;
  const connectWallet = () => {
    navigate('/connect');
  };
  return (
    <Disclosure as="nav" className="bg-transparent">
      {({ open }) => (
        <>
          <div className="py-8 sm:px-16 xl:px-32">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 right-0 flex items-center lg:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 text-gray-400 rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block w-6 h-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block w-6 h-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex items-center justify-center flex-1 sm:justify-between lg:justify-between">
                <div className="flex items-center flex-shrink-0">
                  <img className="block w-48 h-auto lg:block" src={logo} alt="META PLACE" />
                  {/* <img
                        className="hidden w-auto h-8 lg:block"
                        src="https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg"
                        alt="Workflow"
                    /> */}
                </div>
                <div className="hidden lg:block sm:ml-6 ">
                  <div className="flex items-center space-x-4">
                    {/* Search box */}
                    <div className="relative flex items-center mx-auto text-gray-600">
                      <button type="button" className="absolute left-2" aria-label="logo">
                        <svg
                          className="w-4 h-4 text-gray-600 fill-current"
                          xmlns="http://www.w3.org/2000/svg"
                          version="1.1"
                          x="0px"
                          y="0px"
                          viewBox="0 0 56.966 56.966"
                          xmlSpace="preserve"
                          width="512px"
                          height="512px"
                        >
                          <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
                        </svg>
                      </button>
                      <input
                        type="search"
                        name="query"
                        placeholder="Search"
                        className="w-full h-8 pl-8 pr-4 text-gray-300 bg-gray-600 bg-opacity-50 border border-transparent rounded-lg pl-8ext-sm lg:w-40 xl:transition-all xl:duration-300 xl:w-40 xl:focus:w-44 lg:h-8 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-teal-500 dark:focus:border-teal-500 focus:outline-none focus:ring focus:ring-primary dark:placeholder-gray-400 focus:ring-opacity-40"
                      />
                    </div>
                    {NAV_ITEMS.map((item) => (
                      <Link
                        key={item.title}
                        to={item.path}
                        className="text-white hover:text-blue-500 focus:text-blue-500 text-sm p-1"
                      >
                        {item.title}
                      </Link>
                    ))}
                  </div>
                </div>
                <div className="hidden lg:flex">
                  <div className="text-center">
                    <button
                      type="button"
                      className="px-6 py-2 font-medium text-center bg-white rounded-full"
                      onClick={connectWallet}
                    >
                      Connect Wallet
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {/* Search box */}
              <div className="relative flex items-center max-w-xs mx-auto text-gray-600">
                <button type="submit" className="absolute left-2" aria-label="logo">
                  <svg
                    className="w-4 h-4 text-gray-600 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    //   xmlns:xlink="http://www.w3.org/1999/xlink"
                    version="1.1"
                    id="Capa_1"
                    x="0px"
                    y="0px"
                    viewBox="0 0 56.966 56.966"
                    //   style="enable-background:new 0 0 56.966 56.966;"
                    xmlSpace="preserve"
                    width="512px"
                    height="512px"
                  >
                    <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
                  </svg>
                </button>
                <input
                  type="search"
                  name="query"
                  placeholder="Search..."
                  className="w-full h-8 pl-8 pr-4 text-gray-300 bg-gray-600 bg-opacity-50 border border-transparent rounded-lg pl-8ext-sm lg:w-30 xl:transition-all xl:duration-300 xl:w-30 lg:h-8 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-teal-500 dark:focus:border-teal-500 focus:outline-none focus:ring focus:ring-primary dark:placeholder-gray-400 focus:ring-opacity-40"
                />
              </div>
              {NAV_ITEMS.map((item) => (
                <Link to={item.path} className="text-white block text-center focus:text-blue-500 py-1">
                  {item.title}
                </Link>
              ))}
              <div className="text-center">
                <button
                  type="button"
                  className="px-6 py-2 font-medium text-center bg-white rounded-full"
                  onClick={connectWallet}
                >
                  Connect Wallet
                </button>
              </div>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default Header;
