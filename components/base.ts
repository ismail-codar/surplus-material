import { DataSignal } from "s-js";
import { SStyleType } from "surplus-mixins/style";
import { SMouseEventType } from "surplus-mixins/mouse";
import { SClassType } from "surplus-mixins/class";

export interface MdcBaseProps {
    children?:HTMLElement[]
    disabled?: DataSignal<boolean>
    hidden?: DataSignal<boolean>
    mouseEvents?: SMouseEventType
    classes?: SClassType
    styles?: SStyleType
}