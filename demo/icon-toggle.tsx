import * as Surplus from 'surplus';
Surplus;
import { S } from "surplus";
import { DataSignal } from "s-js";
import { MdcIconToggle, OnOffType } from "../components/icon-toggle";

const toggleState = S.data("on" as OnOffType)

export = (ctrl: any) => {
    return <div><section className="hero">
        <MdcIconToggle state={toggleState} on={{ icon: "favorite", label: "Add To Favorite" }} off={{ icon: "favorite_border", label: "Remove From Favorite" }} />
    </section >
        <section className="example">
            <div className="toggle-example">
                <h2>Using Font Awesome</h2>
                <div className="demo-wrapper">
                    <MdcIconToggle state={toggleState} on={{ icon: "fa-star", label: "Add To Favorite" }} off={{ icon: "fa-star-o", label: "Remove From Favorite" }} />
                </div>
            </div>
            <div className="toggle-example">
                <h2>Additional Color Combinations</h2>
                <div id="demo-color-combos">
                    <div id="light-on-bg" className="demo-color-combo">
                        <div>
                            <MdcIconToggle state={toggleState} on={{ icon: "favorite", label: "Add To Favorite" }} off={{ icon: "favorite_border", label: "Remove From Favorite" }} />
                        </div>
                        <p className="mdc-theme--text-primary-on-primary">Light icon on background</p>
                    </div>
                    <div id="dark-on-bg" className="demo-color-combo">
                        <div className="mdc-theme--primary">
                            <MdcIconToggle state={toggleState} on={{ icon: "favorite", label: "Add To Favorite" }} off={{ icon: "favorite_border", label: "Remove From Favorite" }} />
                        </div>
                        <p>Dark icon on background</p>
                    </div>
                    <div id="custom-on-dark" className="demo-color-combo mdc-theme--dark">
                        <div>
                            <MdcIconToggle state={toggleState} on={{ icon: "favorite", label: "Add To Favorite" }} off={{ icon: "favorite_border", label: "Remove From Favorite" }} />
                        </div>
                        <p className="mdc-theme--text-primary-on-dark">Custom color on dark background</p>
                    </div>
                </div>
            </div>
        </section>
    </div>
}