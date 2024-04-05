import { CSSProperties, MouseEventHandler, ReactNode } from "react";

export interface Loader {
    title: String;
}

export interface ButtonI {
    styleType: String;
    children?: ReactNode;
    onClick?: ReactNode;
    style?: CSSProperties | undefined;
}

export interface ModalI {
    children?: ReactNode;
    open?: Boolean;
}

export interface IconI {
    name?: String;
    color?: String;
    size?: Number;
    class?: String;
    style?: React.CSSProperties;
    title?: String;
    onClick?: MouseEventHandler<HTMLSpanElement>;
}

export interface DivisionI {
    variant: String;
    style?: CSSProperties;
}