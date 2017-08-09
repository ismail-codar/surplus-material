import * as Surplus from 'surplus';
Surplus;
import S from "s-js";
import { DataSignal } from "s-js";
import onmouse from "surplus-mixins/mouse";
import styles from "surplus-mixins/style";
import classes from "surplus-mixins/class";
import mixins from "surplus-mixins/all";
import { DeviceSizeType, MdcBaseProps, sDataValue } from "./_base";

export type ValueByDeviceSizeType = {[k in DeviceSizeType]?: DataSignal<number> | number}
export interface MdcLayoutGridProps extends MdcBaseProps {
    useMaxWidth?: DataSignal<boolean> | boolean
    columnWidth?: DataSignal<string> | string
    align?: DataSignal<"left" | "right"> | "left" | "right"
}
export interface MdcLayoutGridCellProps extends MdcBaseProps {
    cellSpan: DataSignal<number> | number | ValueByDeviceSizeType
}

export const MdcLayoutGrid = (props: MdcLayoutGridProps) =>
    <div fn={mixins({
        attrs: props.attrs,
        styles: props.styles,
        classes: [
            {
                "mdc-layout-grid": true,
                ["mdc-layout-grid--align-" + sDataValue(props.align)]: props.align !== null,
                "max-width": sDataValue(props.useMaxWidth)
            },
            props.classes
        ]
    }) }>
        <div className="mdc-layout-grid__inner">{props.children}</div>
    </div>


export const MdcLayoutGrid_Cell = (props: MdcLayoutGridCellProps) => {
    const classes = {
        "mdc-layout-grid__cell": true
    }
    if (typeof props.cellSpan === "function") {
        classes["mdc-layout-grid__cell--span-" + (props.cellSpan as any)()] = true
    } else if (typeof props.cellSpan == "object") {
        for (const key in props.cellSpan) {
            classes["mdc-layout-grid__cell--span-" + sDataValue(props.cellSpan[key]) + (key ? "-" + key : "")] = true
        }
    } else {
        classes["mdc-layout-grid__cell--span-" + props.cellSpan] = true
    }
    return <div fn={mixins({
        attrs: props.attrs,
        styles: props.styles,
        classes: [classes, props.classes]
    }) } >{props.children}</div>
}

export const mdcLayoutGridStyle = (style: "column-width" | "margin" | "gutter", deviceSize: DeviceSizeType, value: DataSignal<string> | string) => {
    return "--mdc-layout-grid-" + style + "-" + deviceSize + ":" + sDataValue(value)
}