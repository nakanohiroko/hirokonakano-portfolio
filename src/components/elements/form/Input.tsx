/**
 * Input
 */

interface Props {
  name: string;
}

export default function Input({ name }: Props) {
  return <input type="text" name={name} />;
}
