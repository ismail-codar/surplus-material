import { DataSignal } from "s-js";
import { MouseEventObject } from 'surplus-mixin-onmouse';
export declare type MdcIntentitonType = "primary" | "accent";
export interface MdcButtonProps {
    flat?: DataSignal<boolean>;
    raised?: DataSignal<boolean>;
    dense?: DataSignal<boolean>;
    intention?: DataSignal<MdcIntentitonType>;
    disabled?: DataSignal<boolean>;
    mouseEvents?: MouseEventObject | MouseEventObject[];
}
export declare const MdcButton: (props: MdcButtonProps) => JSX.Element;
