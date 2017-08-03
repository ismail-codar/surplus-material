import S, { DataSignal } from "s-js";
import { SStyleType } from "surplus-mixins/style";
import { SMouseEventType } from "surplus-mixins/mouse";
import { SClassType } from "surplus-mixins/class";
import { SAttributeType } from "surplus-mixins/attribute";
import mixins, { ISurplusMixins } from "surplus-mixins/all";
var extend = require('extend');

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


export type ElevationType = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24
export const elevation = (elevation: DataSignal<ElevationType> | ElevationType) =>
    "mdc-elevation--z" + sDataValue(elevation)