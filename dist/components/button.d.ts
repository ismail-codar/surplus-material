import { DataSignal } from "s-js";
import { MouseEventType } from 'surplus-mixin-onmouse';
export declare type MdcIntentitonType = "primary" | "accent";
export interface MdcButtonProps {
    flat?: DataSignal<boolean>;
    raised?: DataSignal<boolean>;
    dense?: DataSignal<boolean>;
    intention?: DataSignal<MdcIntentitonType>;
    disabled?: DataSignal<boolean>;
    mouseEvent?: {
        name: MouseEventType;
        listener: (evt: MouseEvent) => void;
    };
}
export declare const MdcButton: (props: MdcButtonProps) => JSX.Element;
