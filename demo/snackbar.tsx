import * as Surplus from 'surplus';
Surplus;
import { S } from "surplus";
import { DataSignal } from "s-js";
import { MdcSnackbar } from "../components/snackbar";
import attrs from "surplus-mixins/attribute";
import onmouse from "surplus-mixins/mouse";

const snacbarActive = S.data(false)
const messageText = S.data("Message deleted")

export = (ctrl: any) => {
    return <div>
        <section className="hero">
            <MdcSnackbar cssOnly={true} active={() => true}>Message sent</MdcSnackbar>
        </section>

        <section className="example">
            <h2 className="mdc-typography--title">Basic Example</h2>

            <div className="mdc-form-field">
                <div className="mdc-checkbox">
                    <input type="checkbox" className="mdc-checkbox__native-control" id="multiline" aria-labelledby="multiline-label" />
                    <div className="mdc-checkbox__background">
                        <svg className="mdc-checkbox__checkmark" viewBox="0 0 24 24">
                            <path className="mdc-checkbox__checkmark__path" fill="none" stroke="white" d="M1.73,12.91 8.1,19.28 22.79,4.59" />
                        </svg>
                        <div className="mdc-checkbox__mixedmark"></div>
                    </div>
                </div>
                <label {...attrs({ for: "multiline" }) } id="multiline-label">Multiline</label>
            </div>
            <br />

            <div className="mdc-form-field">
                <div className="mdc-checkbox" id="action-on-bottom-checkbox">
                    <input type="checkbox" className="mdc-checkbox__native-control" id="action-on-bottom" aria-labelledby="action-on-bottom-label" />
                    <div className="mdc-checkbox__background">
                        <svg className="mdc-checkbox__checkmark" viewBox="0 0 24 24">
                            <path className="mdc-checkbox__checkmark__path" fill="none" stroke="white"
                                d="M1.73,12.91 8.1,19.28 22.79,4.59" />
                        </svg>
                        <div className="mdc-checkbox__mixedmark"></div>
                    </div>
                </div>
                <label {...attrs({ for: "action-on-bottom" }) } id="action-on-bottom-label">Action On Bottom</label>
            </div>
            <br />

            <div className="mdc-form-field">
                <div className="mdc-checkbox">
                    <input type="checkbox" checked className="mdc-checkbox__native-control" id="dismiss-on-action" aria-labelledby="dismiss-on-action-label" />
                    <div className="mdc-checkbox__background">
                        <svg className="mdc-checkbox__checkmark" viewBox="0 0 24 24">
                            <path className="mdc-checkbox__checkmark__path" fill="none" stroke="white"
                                d="M1.73,12.91 8.1,19.28 22.79,4.59" />
                        </svg>
                        <div className="mdc-checkbox__mixedmark"></div>
                    </div>
                </div>
                <label {...attrs({ for: "dismiss-on-action" }) } id="dismiss-on-action-label">Dismiss On Action</label>
            </div>
            <br />

            <button type="button" className="mdc-button mdc-button--raised mdc-button--primary" id="toggle-dark-theme">Toggle Dark Theme</button>
            <br />

            <div className="mdc-textfield">
                <input type="text" id="message" className="mdc-textfield__input" value={messageText()} onInput={(e) => messageText(e.target["value"])} />
                <label className="mdc-textfield__label" {...attrs({ for: "multiline" }) } {...attrs({ for: "message" }) }>Message Text</label>
            </div>
            <br />

            <div className="mdc-textfield">
                <input type="text" id="action" className="mdc-textfield__input" value="Undo" />
                <label className="mdc-textfield__label" {...attrs({ for: "multiline" }) } {...attrs({ for: "action" }) }>Action Text</label>
            </div>
            <br />

            <button {...onmouse({
                click: () => {
                    snacbarActive(true)
                }
            }) } type="button" className="demo-activate-button mdc-button mdc-button--raised mdc-button--secondary" id="show-snackbar">Show</button>
            <button type="button" className="demo-activate-button mdc-button mdc-button--raised mdc-button--secondary" id="show-rtl-snackbar">Show RTL</button>
            <button type="button" className="demo-activate-button mdc-button mdc-button--raised mdc-button--secondary" id="show-start-aligned-snackbar">Show Start Aligned</button>
            <button type="button" className="demo-activate-button mdc-button mdc-button--raised mdc-button--secondary" id="show-start-aligned-rtl-snackbar">Show Start Aligned (RTL)</button>

            <MdcSnackbar 
            active={snacbarActive} 
            message={messageText}
            classes={{ "demo-hidden": true }} />
        </section>

    </div>
}