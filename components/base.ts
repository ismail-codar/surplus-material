import { DataSignal } from "s-js";
import { SStyleType } from "surplus-mixins/style";
import { SMouseEventType } from "surplus-mixins/mouse";
import { SClassType } from "surplus-mixins/class";
import { SAttributeType } from "surplus-mixins/attribute";

export interface MdcBaseProps {
    children?: HTMLElement[] | string[] | string
    attrs?: SAttributeType
    classes?: SClassType
    styles?: SStyleType
    mouseEvents?: SMouseEventType
}

export const sDataValue = <T>(val: DataSignal<T> | T): boolean => {
    return typeof val == "function" ? (val as any)() : val
}