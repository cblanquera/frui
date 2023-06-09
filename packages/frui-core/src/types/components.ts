import type { ReactNode } from 'react';

import type { 
  AnyReactChildren,
  ExtendsType, 
  HTMLButtonProps 
} from './common';

// Alert component
export type AlertProps = {
  color?: string,
  error?: boolean, 
  warning?: boolean, 
  info?: boolean, 
  success?: boolean, 
  muted?: boolean, 
  solid?: boolean, 
  outline?: boolean,
  curved?: boolean,
  rounded?: boolean, 
  pill?: boolean,
  style?: React.CSSProperties,
  className?: string,
  children?: React.ReactNode
};

// Badge component
export type BadgeProps = {
  color?: string,
  error?: boolean,  
  warning?: boolean,
  info?: boolean, 
  success?: boolean, 
  muted?: boolean, 
  solid?: boolean, 
  outline?: boolean,
  curved?: boolean,
  rounded?: boolean,
  pill?: boolean,
  style?: React.CSSProperties,
  className?: string,
  children?: React.ReactNode
};

// Button component
export type ButtonProps = HTMLButtonProps & {
  block?: boolean,
  color?: string,
  xs?: boolean, 
  sm?: boolean, 
  md?: boolean, 
  lg?: boolean, 
  xl?: boolean, 
  curved?: boolean,
  rounded?: boolean,
  pill?: boolean,
  danger?: boolean, 
  warning?: boolean, 
  success?: boolean,
  info?: boolean,
  muted?: boolean, 
  outline?: boolean, 
  transparent?: boolean, 
  solid?: boolean, 
  style?: React.CSSProperties|false
};

// Control component
export type ControlProps = {
  label?: string,
  error?: string,
  errorColor?: string,
  style?: React.CSSProperties,
  className?: string,
  styles?: Record<string, React.CSSProperties|false|undefined>|false,
  classNames?: Record<string, string|false|undefined>|false,
  children?: React.ReactNode
};

// Fieldset component
export type FieldsetConfig<ValueType = any> = {
  value?: ValueType[],
  defaultValue?: ValueType[],
  emptyValue?: ValueType,
  onChange?: (values: ValueType[]) => void,
  onUpdate?: (values: ValueType[]) => void
}
//use this type in your custom fieldset wrapper
//ex. const Custom: React.FC<FieldsetProps<YOUR ROW TYPE>> = (props) => {}
export type FieldsetProps<ValueType = any> = ExtendsType<ButtonProps, {
  add?: string,
  data?: Record<string, any>,
  value?: ValueType[],
  defaultValue?: ValueType[],
  emptyValue?: ValueType,
  error?: boolean,
  errorColor?: string,
  styles?: Record<string, React.CSSProperties|false|undefined>|false,
  classNames?: Record<string, string|false|undefined>|false,
  onChange?: (values: ValueType[]) => void,
  onUpdate?: (values: ValueType[]) => void
}>;
//use this type in your custom fields component
//ex. const Fields: React.FC<FieldsProps<YOUR ROW TYPE>> = (props) => {}
export type FieldsProps<ValueType = any> = {
  type?: string,
  data?: Record<string, any>,
  min?: number|string,
  max?: number|string,
  step?: number|string,
  values?: (ValueType|undefined)[],
  index: number,
  error?: boolean,
  errorColor: string,
  styles?: Record<string, React.CSSProperties|false|undefined>|false,
  classNames?: Record<string, string|false|undefined>|false,
  set: (values: (ValueType|undefined)[]) => void
};

// Loading component
export type LoaderProps = {
  color?: string,
  show?: boolean,
  label?: string,
  style?: React.CSSProperties,
  className?: string,
};

// Modal component
export type ModalProps = {
  opened: boolean,
  onClose: Function,
  title?: string,
  style?: React.CSSProperties,
  className?: string,
  styles?: Record<string, React.CSSProperties|false|undefined>|false,
  classNames?: Record<string, string|false|undefined>|false,
  children?: React.ReactNode
};

// Table component
export type TableRuleProps = { width: string };

export type TableColProps = {
  style?: React.CSSProperties,
  className?: string,
  children?: AnyReactChildren,
  stickyBottom?: boolean,
  stickyLeft?: boolean,
  stickyRight?: boolean,
  stickyTop?: boolean,
  noWrap?: boolean,
  rowSpan?: number,
  colSpan?: number,
  wrap1?: boolean,
  wrap2?: boolean,
  wrap3?: boolean,
  wrap4?: boolean,
  wrap5?: boolean
};

export type TableFootProps = {
  style?: React.CSSProperties,
  className?: string,
  children?: AnyReactChildren,
  stickyBottom?: boolean,
  stickyLeft?: boolean,
  stickyRight?: boolean,
  noWrap?: boolean,
  rowSpan?: number,
  colSpan?: number,
};

export type TableHeadProps = {
  style?: React.CSSProperties,
  className?: string,
  children?: AnyReactChildren,
  stickyLeft?: boolean,
  stickyRight?: boolean,
  stickyTop?: boolean,
  noWrap?: boolean,
  rowSpan?: number,
  colSpan?: number,
};

export type TableRowProps = {
  style?: React.CSSProperties,
  className?: string,
  children?: AnyReactChildren,
  noWrap?: boolean,
  rowSpan?: number,
  colSpan?: number,
};

export type TableProps = {
  children?: ReactNode|ReactNode[]
};