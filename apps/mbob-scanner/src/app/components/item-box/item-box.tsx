import './item-box.module.scss';

/* eslint-disable-next-line */
export interface ItemBoxProps<T> {
  label: string;
  icon?: string;
  value?: T;
  onBoxClick?: (value: T | string) => void;
}

export function ItemBox<T>({label, value, onBoxClick = (val) => undefined,  ...props}: ItemBoxProps<T>) {
  return (
    <div onClick={() => onBoxClick(value || label)}>
      <p>
        {label}
      </p>
    </div>
  );
}

export default ItemBox;
