import { DataSignal } from "s-js";
export declare type MdcIntentitonType = "primary" | "accent";
export interface MdcButtonProps {
    flat?: DataSignal<boolean>;
    raised?: DataSignal<boolean>;
    dense?: DataSignal<boolean>;
    intention?: DataSignal<MdcIntentitonType>;
}
export declare const MdcButton: (props: MdcButtonProps) => JSX.Element;
