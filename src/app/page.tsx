/**
 * トップページ
 */

import ArticleList from '@/components/templates/ArticleList';

import LinkBtn from '../components/elements/btn/LinkBtn';
import Meta from '../components/templates/_Base/Meta/Meta';
import { abrilfatface, mulish } from '../styles/fonts';
import { getList } from '../utils/microcms';

export default async function Test() {
  const data = await getList({
    limit: 1,
  });
  return (
    <>
      <Meta pageTitle='About' />
      <main className='p-3 lg:p-5'>
        <section className='flex h-dvh items-center bg-gray-200 p-16'>
          <div>
            <h2
              className={`${abrilfatface.className} mb-6 text-2xl leading-tight md:text-4xl lg:text-6xl`}
            >
              Hi,{' '}
              <span className='relative z-10 inline-block px-1 after:absolute after:-bottom-4 after:right-0 after:-z-10 after:h-2 after:w-full after:-translate-y-6 after:bg-[#03FFC5] lg:after:h-4'>
                I&apos;m Hiroko
              </span>
              ,
              <br />
              <span className='relative z-10 inline-block px-1 after:absolute after:-bottom-4 after:right-0 after:-z-10 after:h-2 after:w-full after:-translate-y-6 after:bg-[#03FFC5] lg:after:h-4'>
                Front-end web
              </span>{' '}
              developer
            </h2>
            <p className={`${mulish.className} mb-10 max-w-lg`}>
              I&apos;ve been working as a Front-end web developer for 15 years.
              <br />
              Now, based in Kobuchizawa, Yamanashi pref.
            </p>
            <LinkBtn
              name='see my work'
              href='/about'
            ></LinkBtn>
          </div>
        </section>
        {/* About Section */}
        <section id='works'>
          <ArticleList articles={data.contents} />
        </section>

        <section id='about'>
          <div className='mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8'>
            <div className='grid grid-cols-1 lg:h-screen lg:grid-cols-2'>
              <div className='relative z-10 lg:py-16'>
                <div className='relative h-64 sm:h-80 lg:h-full'>
                  <img
                    alt='my picture'
                    src='https://placehold.co/540x540'
                    className='absolute inset-0 size-full object-cover'
                  />
                </div>
              </div>

              <div className='relative flex items-center bg-gray-100'>
                <span className='hidden lg:absolute lg:inset-y-0 lg:-start-16 lg:block lg:w-16 lg:bg-gray-100'></span>

                <div className='p-8 sm:p-16 lg:p-24'>
                  <h2 className='text-2xl font-bold sm:text-3xl'>About me</h2>

                  <p className='mt-4 text-gray-600'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, molestiae!
                    Quidem est esse numquam odio deleniti, beatae, magni dolores provident quaerat
                    totam eos, aperiam architecto eius quis quibusdam fugiat dicta.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* End of About Section */}

        {/* Skillset Section */}

        <section className='bg-gray-100'>
          <div className='container mx-auto grid grid-cols-1 gap-10 px-6 py-12 lg:grid-cols-3'>
            <div>
              <h1 className='mt-2 text-2xl font-semibold text-gray-800 md:text-3xl '>
                My technical skillset
              </h1>
              <p className='mt-3 text-gray-500 '>Lorem, ipsum dolor sit amet consectetur.</p>
            </div>

            <div className='grid grid-cols-1 gap-12 sm:grid-cols-2 lg:col-span-2'>
              <div>
                <h2 className='text-lg font-semibold text-gray-800 '>Python</h2>
                <p className='mt-1 text-gray-500 '>Lorem, ipsum dolor sit amet consectetur</p>
              </div>

              <div>
                <h2 className='text-lg font-semibold text-gray-800 '>Java</h2>
                <p className='mt-1 text-gray-500 '>Lorem, ipsum dolor sit amet consectetur</p>
              </div>
              <div>
                <h2 className='text-lg font-semibold text-gray-800 '>C++</h2>
                <p className='mt-1 text-gray-500 '>Lorem, ipsum dolor sit amet consectetur</p>
              </div>
              <div>
                <h2 className='text-lg font-semibold text-gray-800 '>JavaScript</h2>
                <p className='mt-1 text-gray-500 '>Lorem, ipsum dolor sit amet consectetur</p>
              </div>
              <div>
                <h2 className='text-lg font-semibold text-gray-800 '>PHP</h2>
                <p className='mt-1 text-gray-500 '>Lorem, ipsum dolor sit amet consectetur</p>
              </div>
              <div>
                <h2 className='text-lg font-semibold text-gray-800 '>Git</h2>
                <p className='mt-1 text-gray-500 '>Lorem, ipsum dolor sit amet consectetur</p>
              </div>
            </div>
          </div>
        </section>

        {/* End of Skillset Section */}

        {/* Projects Section */}

        <section id='projects'>
          <div className='mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8'>
            <header className='text-center'>
              <h2 className='text-xl font-bold text-gray-900 sm:text-3xl'>My projects</h2>

              <p className='mx-auto mt-4 max-w-lg text-gray-500'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque praesentium cumque
                iure dicta incidunt est ipsam, officia dolor fugit natus
              </p>
            </header>

            <ul className='mt-8 grid grid-cols-1 gap-4 lg:grid-cols-3'>
              <li>
                <a
                  href='#'
                  className='group relative block'
                >
                  <img
                    src='https://placehold.co/350x300'
                    alt=''
                    className='aspect-square w-full object-cover transition duration-500 group-hover:opacity-90'
                  />
                </a>
              </li>

              <li>
                <a
                  href='#'
                  className='group relative block'
                >
                  <img
                    src='https://placehold.co/350x300'
                    alt=''
                    className='aspect-square w-full object-cover transition duration-500 group-hover:opacity-90'
                  />
                </a>
              </li>

              <li className='lg:col-span-2 lg:col-start-2 lg:row-span-2 lg:row-start-1'>
                <a
                  href='#'
                  className='group relative block'
                >
                  <img
                    src='https://placehold.co/640x640'
                    alt=''
                    className='aspect-square w-full object-cover transition duration-500 group-hover:opacity-90'
                  />
                </a>
              </li>
            </ul>
          </div>
        </section>

        {/* End of Projects Section */}

        {/* Work Experience Section */}

        <section className='bg-gray-100'>
          <div className='container mx-auto space-y-8 px-4 py-16 lg:max-w-3xl'>
            <h2 className='text-2xl font-bold md:text-4xl'>My work experience</h2>
            <div className='space-y-8'>
              <div>
                <h3 className='mb-3 text-lg font-bold md:text-xl'>2021</h3>
                <ul className='space-y-4'>
                  <li className='space-y-1'>
                    <div className='flex items-center space-x-2'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 512 512'
                        className='size-4 fill-current '
                      >
                        <path d='M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z'></path>
                        <polygon points='221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808'></polygon>
                      </svg>
                      <h4 className='font-medium'>
                        Quis velit quae similique maxime optio temporibus
                      </h4>
                    </div>
                    <p className='ml-7 '>
                      Illum hic placeat unde porro, cupiditate nesciunt? Numquam debitis eligendi
                      aspernatur mum.
                    </p>
                  </li>
                  <li className='space-y-1'>
                    <div className='flex items-center space-x-2'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 512 512'
                        className='size-4 fill-current '
                      >
                        <path d='M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z'></path>
                        <polygon points='221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808'></polygon>
                      </svg>
                      <h4 className='font-medium'>
                        Quis velit quae similique maxime optio temporibus
                      </h4>
                    </div>
                    <p className='ml-7 '>
                      Illum hic placeat unde porro, cupiditate nesciunt? Numquam debitis eligendi
                      aspernatur mum.
                    </p>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className='mb-3 text-lg font-bold md:text-xl'>2020</h3>
                <ul className='space-y-4'>
                  <li className='space-y-1'>
                    <div className='flex items-center space-x-2'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 512 512'
                        className='size-4 fill-current '
                      >
                        <path d='M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z'></path>
                        <polygon points='221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808'></polygon>
                      </svg>
                      <h4 className='font-medium'>
                        Quis velit quae similique maxime optio temporibus
                      </h4>
                    </div>
                    <p className='ml-7 '>
                      Illum hic placeat unde porro, cupiditate nesciunt? Numquam debitis eligendi
                      aspernatur mum.
                    </p>
                  </li>
                  <li className='space-y-1'>
                    <div className='flex items-center space-x-2'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 512 512'
                        className='size-4 fill-current '
                      >
                        <path d='M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z'></path>
                        <polygon points='221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808'></polygon>
                      </svg>
                      <h4 className='font-medium'>
                        Quis velit quae similique maxime optio temporibus
                      </h4>
                    </div>
                    <p className='ml-7 '>
                      Illum hic placeat unde porro, cupiditate nesciunt? Numquam debitis eligendi
                      aspernatur mum.
                    </p>
                  </li>
                  <li className='space-y-1'>
                    <div className='flex items-center space-x-2'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 512 512'
                        className='size-4 fill-current '
                      >
                        <path d='M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z'></path>
                        <polygon points='221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808'></polygon>
                      </svg>
                      <h4 className='font-medium'>
                        Quis velit quae similique maxime optio temporibus
                      </h4>
                    </div>
                    <p className='ml-7 '>
                      Illum hic placeat unde porro, cupiditate nesciunt? Numquam debitis eligendi
                      aspernatur mum.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* End of Work Experience Section */}
      </main>
    </>
  );
}
