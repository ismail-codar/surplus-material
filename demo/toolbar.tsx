import * as Surplus from 'surplus';
Surplus;
import { S } from "surplus";
import { DataSignal } from "s-js";
import { MdcToolbar } from "../components/toolbar";

export = (ctrl: any) => {
    return <section className="hero">
        <div className="catalog-toolbar-container">
            <MdcToolbar items={[
                {
                    sections: [
                        {
                            type: "start", items: [
                                { type: "menuicon" },
                                { type: "title", text: "Toolbar" }
                            ]
                        },
                        {
                            type: "end", items: [
                                { type: "linkicon", icon: "file_download", text: "Download", href: "#" },
                                { type: "linkicon", icon: "print", text: "Print this page", href: "#" },
                                { type: "linkicon", icon: "more_vert", text: "Bookmark this page", href: "#" }
                            ]
                        }
                    ]
                }
            ]} />
        </div>
    </section>
}