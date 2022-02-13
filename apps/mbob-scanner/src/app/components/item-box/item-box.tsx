import './item-box.module.scss';

/* eslint-disable-next-line */
export interface ItemBoxProps<T> {
  label: string;
  icon?: JSX.Element;
  value?: T;
  onBoxClick?: (value: T | string) => void;
}

export function ItemBox<T>({icon, label, value, onBoxClick = (val) => undefined,  ...props}: ItemBoxProps<T>) {
  return (
    <div onClick={() => onBoxClick(value || label)}>
      {icon || undefined}
      <p>
        {label}
      </p>
    </div>
  );
}

export default ItemBox;
