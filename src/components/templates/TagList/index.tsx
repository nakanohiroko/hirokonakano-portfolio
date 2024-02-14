import { Tag } from '../../../utils/microcms';
import TagListItem from '../TagListItem';

type Props = {
  hasLink?: boolean;
  tags?: Tag[];
};

export default function TagList({ hasLink = true, tags }: Props) {
  if (!tags) {
    return null;
  }
  return (
    <ul className={'my-3 flex flex-wrap gap-2'}>
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
