import { InputProps } from 'antd';

export interface GenericInputInterface extends InputProps {
  name: string;
}

export interface BasicOption<T> {
  display: string;
  value: T;
}
