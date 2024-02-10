/**
 * LinkBtn
 */

import Link from 'next/link';

interface Props {
  name: string;
  href: string;
}

export default function Input({ name, href }: Props) {
  return (
    <Link href={href}>
      <button className='group relative inline-block px-10 py-4 font-medium'>
        <span className='absolute inset-0 size-full translate-x-1 translate-y-1 bg-black transition duration-200 ease-out group-hover:-translate-x-0 group-hover:-translate-y-0'></span>
        <span className='absolute inset-0 size-full border-2 border-black bg-white group-hover:bg-black'></span>
        <span className='relative text-black group-hover:text-white'>{name}</span>
      </button>
    </Link>
  );
}
