import { type Article } from '../../../utils/microcms';
import { formatRichText } from '../../../utils/util';
import LinkBtn from '../../elements/btn/LinkBtn';
import TagList from '../TagList';
import styles from './index.module.css';

type Props = {
  data: Article;
};

export default function Article({ data }: Props) {
  return (
    <main className='mb-20 flex flex-col items-center justify-between px-6 pt-28 lg:px-16'>
      <h1 className='mb-3 text-3xl font-bold lg:mb-4 lg:text-4xl'>{data.title}</h1>
      <h3 className='mb-4 text-sm text-gray-500 lg:mb-5'>{data.year}</h3>
      <TagList
        tags={data.tags}
        hasLink={false}
      />
      <p className='mx-10 mb-20 mt-6 text-sm'>{data.description}</p>
      <picture>
        <source
          type='image/webp'
          srcSet={`${data.screenshot?.url}`}
        />
        <img
          src={data.screenshot?.url}
          alt=''
          className={styles.thumbnail}
          width={data.screenshot?.width}
          height={data.screenshot?.height}
        />
      </picture>
      <div
        className='mb-20 text-sm leading-7'
        dangerouslySetInnerHTML={{
          __html: `${formatRichText(data.credit)}`,
        }}
      />
      <div
        className={styles.content}
        dangerouslySetInnerHTML={{
          __html: `${formatRichText(data.content)}`,
        }}
      />
      {data.url && (
        <LinkBtn
          name='Visit Website'
          href={data.url}
          target='_blank'
        ></LinkBtn>
      )}
    </main>
  );
}
