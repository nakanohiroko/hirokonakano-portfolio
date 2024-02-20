/**
 * worksページ
 */

import ArticleList from '../../components/templates/ArticleList';
import { getList } from '../../utils/microcms';

export const metadata = {
  title: 'My works',
  alternates: {
    canonical: '/works',
  },
  description: '制作実績です',
  metadataBase: new URL(process.env.BASE_URL + '/works' || 'http://localhost:3000/works'),
  openGraph: {
    title: 'My works',
    description: '制作実績です',
    images: '/placeholder-social.jpg',
  },
};

export default async function Page() {
  const data = await getList({
    limit: 10,
  });
  return (
    <>
      <main className='mb-20 flex flex-col items-center justify-between px-6 pt-28 lg:px-16'>
        <section
          id='works'
          className=''
        >
          <h2 className='mb-16 text-center text-4xl font-bold lg:text-5xl'>My works</h2>
          <ArticleList articles={data.contents} />
        </section>
      </main>
    </>
  );
}
