import Link from 'next/link';

import { Tag } from '../../../utils/microcms';

type Props = {
  hasLink?: boolean;
  tag: Tag;
};

export default function TagListItem({ hasLink = true, tag }: Props) {
  if (hasLink) {
    return (
      <Link
        href={`/tags/${tag.id}`}
        className={'whitespace-nowrap rounded-xl bg-[#03FFC5] px-3 py-1 text-sm'}
      >
        {tag.name}
      </Link>
    );
  }
  return (
    <span className={'whitespace-nowrap rounded-xl bg-[#03FFC5] px-3 py-1 text-sm'}>
      {tag.name}
    </span>
  );
}
