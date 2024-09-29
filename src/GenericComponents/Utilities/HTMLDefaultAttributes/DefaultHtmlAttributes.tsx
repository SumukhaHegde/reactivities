import { FocusEventHandler, MouseEventHandler } from "react";

export interface DefaultHtmlAttributes {
  alt?: string;
  title?: string;
  className?: string;
  disable?: boolean;
  form?: string;
  id?: string;
  name?: string;
  readOnly?: boolean;
  style?: React.CSSProperties;
  tabIndex?: number;
  type?: string;
  onClick?: MouseEventHandler;
  onFocus?: FocusEventHandler;
  onBlur?: FocusEventHandler;
  immediateRender?: boolean;
  onChange?: any;
}
