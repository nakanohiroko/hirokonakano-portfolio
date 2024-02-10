/**
 * headタグのメタ情報
 */

import Head from 'next/head';

import { siteData } from '../../../../const/site';

const { meta } = siteData;

interface Props {
  noindex?: boolean;
  pageTitle?: string;
}

export default function Meta({ noindex, pageTitle }: Props) {
  // タイトル
  const metaTitle = pageTitle ? `${pageTitle} | ${meta.title}` : meta.title;

  return (
    <Head>
      <title>{metaTitle}</title>
      <meta
        name='description'
        content={meta.description}
      />
      {noindex && (
        <meta
          name='robots'
          content='noindex, nofollow'
        />
      )}
    </Head>
  );
}
