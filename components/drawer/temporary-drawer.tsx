import * as Surplus from 'surplus';
Surplus;
import S from "s-js";
import { DataSignal } from "s-js";
import { MdcBaseProps } from "../base";
import onmouse from "surplus-mixins/mouse";
import styles from "surplus-mixins/style";
import classes from "surplus-mixins/class";

export interface MdcNotImplementedProps extends MdcBaseProps {
}

export const MdcNotImplemented = (props: MdcNotImplementedProps) =>
    <div>NotImplemented component</div>