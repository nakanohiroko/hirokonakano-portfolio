/**
 * フッター
 */
import { mulish } from '../../../styles/fonts';

export default function Footer() {
  function gotop() {
    document.body.scrollTo({
      behavior: 'smooth',
      top: 0,
    });

    document.documentElement.scrollTo({
      behavior: 'smooth',
      top: 0,
    });
  }
  return (
    <>
      <footer
        className={`${mulish.className} lg:grid lg:grid-cols-2`}
        id='contact'
      >
        <div className='px-6 py-8 lg:col-span-2 lg:px-16'>
          <div className='grid grid-cols-1 gap-8 sm:grid-cols-2'>
            <div>
              <p>
                <span className='text-xs uppercase tracking-wider text-gray-500'>Contact me</span>

                <a
                  href='mailto:hello@corleonis.net'
                  className='block text-xl font-medium text-gray-900 underline-offset-4 hover:underline hover:opacity-75 sm:text-2xl'
                >
                  hello@corleonis.net
                </a>
              </p>
            </div>

            <div className='gap-4'>
              <div>
                <ul className='mt-1 flex gap-6 md:flex-row-reverse'>
                  <li>
                    <a
                      href='https://github.com/nakanohiroko'
                      rel='noreferrer'
                      target='_blank'
                      className='text-gray-700 transition hover:opacity-75'
                      data-te-toggle='tooltip'
                      title='GitHub'
                    >
                      <span className='sr-only'>GitHub</span>

                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 24 24'
                        width='24'
                        height='24'
                        fill='none'
                        stroke='currentColor'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                      >
                        <path d='M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22' />
                      </svg>
                    </a>
                  </li>

                  <li>
                    <a
                      href='https://daily.corleonis.net'
                      rel='noreferrer'
                      target='_blank'
                      className='text-gray-700 transition hover:opacity-75'
                      data-te-toggle='tooltip'
                      title='Diary'
                    >
                      <span className='sr-only'>Diary</span>

                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 24 24'
                        width='24'
                        height='24'
                        fill='none'
                        stroke='currentColor'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                      >
                        <path d='M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z' />
                        <polyline points='14 2 14 8 20 8' />
                        <line
                          x1='16'
                          x2='8'
                          y1='13'
                          y2='13'
                        />
                        <line
                          x1='16'
                          x2='8'
                          y1='17'
                          y2='17'
                        />
                        <polyline points='10 9 9 9 8 9' />
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className='mt-12 border-t border-gray-100 pt-8'>
            <div className='sm:flex sm:items-center sm:justify-between'>
              <p className='mt-8 text-xl sm:mt-0'>&copy; 2024 hiroko nakano</p>
            </div>
          </div>
        </div>
      </footer>
      {/*
      <button
        className='fixed bottom-10 right-10 flex items-center justify-center rounded-full p-2 transition duration-200 hover:opacity-30 focus:outline-none'
        title='Back to Top'
      >
        <svg
          className='size-6'
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            d='M5 10l7-7m0 0l7 7m-7-7v18'
          />
        </svg>
      </button>
      */}
    </>
  );
}
