import Link from 'next/link';

import { Tag } from '../../../utils/microcms';
import styles from './index.module.css';

type Props = {
  hasLink?: boolean;
  tag: Tag;
};

export default function TagListItem({ hasLink = true, tag }: Props) {
  if (hasLink) {
    return (
      <Link
        href={`/tags/${tag.id}`}
        className={styles.tag}
      >
        #{tag.name}
      </Link>
    );
  }
  return <span className={styles.tag}>#{tag.name}</span>;
}
