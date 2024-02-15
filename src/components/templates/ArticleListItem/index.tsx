import Image from 'next/image';
import Link from 'next/link';

import { Article } from '../../../utils/microcms';
import TagList from '../TagList';

type Props = {
  article: Article;
};

export default function ArticleListItem({ article }: Props) {
  return (
    <li className={'mb-10'}>
      <Link
        href={`/works/${article.id}`}
        className={'gap-6 transition-opacity hover:opacity-30'}
      >
        {article.thumbnail ? (
          <picture>
            <source
              type='image/webp'
              media='(max-width: 640px)'
              //srcSet={`${article.thumbnail?.url}?fm=webp&w=414 1x, ${article.thumbnail?.url}?fm=webp&w=414&dpr=2 2x`}
              srcSet={`${article.thumbnail?.url}`}
            />
            <source
              type='image/webp'
              //srcSet={`${article.thumbnail?.url}?fm=webp&fit=crop&w=240&h=126 1x, ${article.thumbnail?.url}?fm=webp&fit=crop&w=240&h=126&dpr=2 2x`}
              srcSet={`${article.thumbnail?.url}`}
            />
            <img
              src={article.thumbnail?.url || `/noimage.png`}
              alt=''
              className={'mb-5 lg:mb-4'}
              width={article.thumbnail?.width}
              height={article.thumbnail?.height}
            />
          </picture>
        ) : (
          <Image
            src='/no-image.png'
            alt='No Image'
            width={1200}
            height={630}
          />
        )}
        <dl>
          <dt className={'text-xl font-bold'}>{article.title}</dt>
          <dd>
            <TagList
              tags={article.tags}
              hasLink={false}
            />
          </dd>
        </dl>
      </Link>
    </li>
  );
}
