import { DataSignal } from "s-js";
import { SStyleType } from "surplus-mixins/style";
import { SMouseEventType } from "surplus-mixins/mouse";
import { SClassType } from "surplus-mixins/class";

export interface MdcBaseProps {
    children?: HTMLElement[] | string[] | string
    disabled?: DataSignal<boolean> | boolean
    mouseEvents?: SMouseEventType
    classes?: SClassType
    styles?: SStyleType
}

export const sDataValue = <T>(val: DataSignal<T> | T): boolean => {
    return typeof val == "function" ? (val as any)() : val
}