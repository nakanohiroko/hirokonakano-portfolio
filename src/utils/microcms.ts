import type {
  MicroCMSContentId,
  MicroCMSDate,
  MicroCMSImage,
  MicroCMSQueries,
} from 'microcms-js-sdk';
import { createClient } from 'microcms-js-sdk';
import { notFound } from 'next/navigation';

// タグの型定義
export type Tag = {
  name: string;
} & MicroCMSContentId &
  MicroCMSDate;

// Worksの型定義
export type Works = {
  title: string;
  content: string;
  credit: string;
  description: string;
  screenshot?: MicroCMSImage;
  tags?: Tag[];
  thumbnail?: MicroCMSImage;
  url: string;
  year: string;
};

export type Article = Works & MicroCMSContentId & MicroCMSDate;
if (!process.env.NEXT_PUBLIC_MICROCMS_SERVICE_DOMAIN) {
  throw new Error('NEXT_PUBLIC_MICROCMS_SERVICE_DOMAIN is required');
}

if (!process.env.NEXT_PUBLIC_MICROCMS_API_KEY) {
  throw new Error('NEXT_PUBLIC_MICROCMS_API_KEY is required');
}

// Initialize Client SDK.
export const client = createClient({
  apiKey: process.env.NEXT_PUBLIC_MICROCMS_API_KEY,
  serviceDomain: process.env.NEXT_PUBLIC_MICROCMS_SERVICE_DOMAIN,
});

// Works一覧を取得
export const getList = async (queries?: MicroCMSQueries) => {
  const listData = await client
    .getList<Works>({
      endpoint: 'works',
      queries,
    })
    .catch(notFound);
  return listData;
};

// Worksの詳細を取得
export const getDetail = async (contentId: string, queries?: MicroCMSQueries) => {
  const detailData = await client
    .getListDetail<Works>({
      contentId,
      endpoint: 'works',
      queries,
    })
    .catch(notFound);
  return detailData;
};

// タグの一覧を取得
export const getTagList = async (queries?: MicroCMSQueries) => {
  const listData = await client
    .getList<Tag>({
      endpoint: 'tags',
      queries,
    })
    .catch(notFound);

  return listData;
};

// タグの詳細を取得
export const getTag = async (contentId: string, queries?: MicroCMSQueries) => {
  const detailData = await client
    .getListDetail<Tag>({
      contentId,
      endpoint: 'tags',
      queries,
    })
    .catch(notFound);

  return detailData;
};
