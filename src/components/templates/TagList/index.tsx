import { Tag } from '../../../utils/microcms';
import TagListItem from '../TagListItem';
import styles from './index.module.css';

type Props = {
  hasLink?: boolean;
  tags?: Tag[];
};

export default function TagList({ hasLink = true, tags }: Props) {
  if (!tags) {
    return null;
  }
  return (
    <ul className={styles.tags}>
      {tags.map((tag) => (
        <li key={tag.id}>
          <TagListItem
            tag={tag}
            hasLink={hasLink}
          />
        </li>
      ))}
    </ul>
  );
}
