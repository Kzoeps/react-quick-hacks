import { InputProps } from 'antd';

export interface GenericInputInterface extends InputProps {
  name: string;
}

export interface BasicOption<T> {
  display: string;
  value: T;
}

export interface BaseNavItem {
  label: string;
  href?: string;
}

export interface SubItems extends BaseNavItem {
  subLabel?: string;
}

export interface NavItem extends BaseNavItem {
  children?: SubItems[];
}

export type NavItems = NavItem[];
