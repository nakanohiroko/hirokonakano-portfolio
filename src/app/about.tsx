/**
 * トップページ
 */

import Link from 'next/link';

import Meta from '../components/templates/_Base/Meta/Meta';

export default function Home() {
  return (
    <>
      <Meta pageTitle='About' />
      <main className='p-8'>
        <h2>About!</h2>
        <p>
          I design and build beautiful websites and apps for businesses around the globe. If you
          need a modern and powerful website, send me an email. If we are a good fit, I will give
          you a time and cost estimate.
        </p>
        <button>see my work</button>
        <p className='ex1 mt-4 flex-0'>ex1</p>
        <Link
          href=''
          className='ex2 mt-4'
        >
          ex2
        </Link>
      </main>
    </>
  );
}
