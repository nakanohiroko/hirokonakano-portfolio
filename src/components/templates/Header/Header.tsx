/**
 * ヘッダー
 */

import { mulish } from '../../../styles/fonts';

export default function Header() {
  return (
    <>
      <header className={`${mulish.className} fixed z-20 w-full`}>
        <div className='mx-auto px-6'>
          <div className='mx-auto max-w-screen-xl px-4 py-6 sm:px-6 lg:px-8'>
            <div className='flex h-16 items-center justify-between'>
              <h1 className='absolute left-10 top-10 lg:left-16'>
                <a
                  className='block transition duration-200 hover:opacity-30'
                  href='#'
                >
                  hiroko nakano
                </a>
              </h1>

              <div className='absolute right-10 lg:hidden'>
                <button
                  id='menu-toggle'
                  type='button'
                  className='-m-2.5 inline-flex items-center justify-center rounded-md p-1.5 text-gray-300'
                >
                  <span className='sr-only'>Open main menu</span>
                  <svg
                    className='size-6'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth='1.5'
                    stroke='currentColor'
                    aria-hidden='true'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
                    />
                  </svg>
                </button>
              </div>

              <div className='hidden lg:flex lg:gap-x-12'>
                <nav className='absolute right-16 top-10'>
                  <ul className='flex justify-center gap-4'>
                    <li>
                      <a
                        href=''
                        className='relative z-10 inline-block px-1 font-bold after:absolute after:-bottom-2 after:right-0 after:-z-10 after:h-2 after:w-full after:-translate-y-2 after:bg-[#03FFC5] hover:after:w-0'
                      >
                        my works
                      </a>
                    </li>
                    <li>
                      <a
                        href=''
                        className='relative z-10 inline-block px-1 font-bold after:absolute after:-bottom-2 after:right-0 after:-z-10 after:h-2 after:w-full after:-translate-y-2 after:bg-[#03FFC5] hover:after:w-0'
                      >
                        my favs
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>

              {/* Mobile menu, show/hide based on menu open state */}
              <div
                className='hidden'
                role='dialog'
                aria-modal='true'
                id='menu'
              >
                <div className='fixed inset-0 z-10'>
                  <div className='fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-10 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10'>
                    <div className='flex items-center justify-between px-8 lg:hidden'>
                      <a
                        href='#'
                        className='-m-1.5 p-1.5'
                      >
                        <span className='sr-only'>Home</span>
                      </a>
                      <button
                        type='button'
                        id='close-menu'
                        className='inline-flex items-center justify-center rounded-md p-1.5 text-gray-700'
                      >
                        <span className='sr-only'>Close menu</span>
                        <svg
                          className='size-6'
                          fill='none'
                          viewBox='0 0 24 24'
                          strokeWidth='1.5'
                          stroke='currentColor'
                          aria-hidden='true'
                        >
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            d='M6 18L18 6M6 6l12 12'
                          />
                        </svg>
                      </button>
                    </div>

                    <div className='mt-6 flow-root'>
                      <div className='-my-6 divide-y divide-gray-500/10'>
                        <div className='space-y-2 py-6'>
                          <a
                            href='#'
                            className='-mx-3 block px-4 py-2 text-center text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100'
                          >
                            About
                          </a>
                          <a
                            href='#'
                            className='-mx-3 block px-4 py-2 text-center text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100'
                          >
                            Projects
                          </a>
                          <a
                            href='#'
                            className='-mx-3 block px-4 py-2 text-center text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100'
                          >
                            Contact
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* End of Mobile menu, show/hide based on menu open state */}
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
