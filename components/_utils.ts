import { DataSignal } from 's-js';
import { sDataValue } from "./_base";
import { MdcIntentitonType } from "./button";
export type ElevationType = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24
export const elevationClass = (elevation: DataSignal<ElevationType> | ElevationType) =>
    "mdc-elevation--z" + sDataValue(elevation)

export const rippleSurfaceElement = (element: HTMLElement, intention?: MdcIntentitonType, cssOnly?: boolean): HTMLElement => {
    element.classList.add("mdc-ripple-surface")
    if (intention)
        element.classList.add("mdc-ripple-surface--" + intention)
    if (!cssOnly)
        window["mdc"].ripple.MDCRipple.attachTo(element)
    return element
}

export const selectElement = (element: HTMLElement): HTMLSelectElement => {
    element.classList.add("mdc-multi-select", "mdc-list");
    [].forEach.call(element.children, (child: HTMLElement) => {
        console.log(child.tagName)
        if (child.tagName === "OPTGROUP") {
            child.classList.add("mdc-list-group");
            [].forEach.call(child.children, (option) => {
                option.classList.add("mdc-list-item")
            })
        } else {
            child.classList.add("mdc-list-item")
            if (child["disabled"]) {
                child.classList.add("mdc-list-divider")
                child.setAttribute("role", "presentation")
            }
        }
    });
    return element as HTMLSelectElement
}