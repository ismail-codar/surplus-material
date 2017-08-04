import S, { DataSignal } from "s-js";
import { SStyleType } from "surplus-mixins/style";
import { SMouseEventType } from "surplus-mixins/mouse";
import { SClassType } from "surplus-mixins/class";
import { SAttributeType } from "surplus-mixins/attribute";
import mixins, { ISurplusMixins } from "surplus-mixins/all";
import { MdcIntentitonType } from "./button";
var extend = require('extend');

export type DeviceSizeType = "" | "phone" | "tablet" | "desktop"

export interface MdcBaseProps {
    children?: HTMLElement[] | string[] | string
    attrs?: SAttributeType
    classes?: SClassType
    styles?: SStyleType
    mouseEvents?: SMouseEventType
}

export const sDataValue = <T>(val: DataSignal<T> | T): T => {
    return typeof val == "function" ? (val as any)() : val
}

export const propsMixins = (props: MdcBaseProps, extra: ISurplusMixins) => {
    const target = {
        classes: props.classes,
        attrs: props.attrs,
        styles: props.styles,
        onmouse: props.mouseEvents
    }
    extend(target, extra)
    return mixins(target)
}