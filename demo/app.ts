import { S } from "surplus";
import { RoutedApp } from "simplester"

const app = new RoutedApp(
    {
        domSelector: "#main",
        viewRenderer: (currentRoute, callback) => {
            S.root((dispose: () => void) => {
                currentRoute.deactivate = dispose
                callback(currentRoute.render(currentRoute.controller))
            })
        }
    },
    {
        path: "demo",
        render: require("./default"),
        childs: [
            { path: "button", render: require("./button") },
            { path: "card", render: require("./card") },
            { path: "checkbox", render: require("./checkbox") },
            { path: "dialog", render: require("./dialog") },
            { path: "drawer", abstract:true, childs:[
                {
                    path:"temporary-drawer",
                    render: require("./drawer/temporary-drawer")
                },
                {
                    path:"persistent-drawer",
                    render: require("./drawer/persistent-drawer")
                },
                {
                    path:"permanent-drawer-below-toolbar",
                    render: require("./drawer/permanent-drawer-below-toolbar")
                },
                {
                    path:"permanent-drawer-above-toolbar",
                    render: require("./drawer/permanent-drawer-above-toolbar")
                }
            ] },
            { path: "elevation", render: require("./elevation") }, 
            { path: "fab", render: require("./fab") },
            { path: "grid-list", render: require("./grid-list") },
            { path: "icon-toggle", render: require("./icon-toggle") },
            { path: "layout-grid", render: require("./layout-grid") },
            { path: "linear-progress", render: require("./linear-progress") },
            { path: "list", render: require("./list") },
            { path: "radio", render: require("./radio") },
            { path: "ripple", render: require("./ripple") },
            { path: "select", render: require("./select") },
            { path: "simple-menu", render: require("./simple-menu") },
            { path: "slider", render: require("./slider") },
            { path: "snackbar", render: require("./snackbar") },
            { path: "switch", render: require("./switch") },
            { path: "tabs", render: require("./tabs") },
            { path: "textfield", render: require("./textfield") },
            { path: "theme", render: require("./theme") },
            { path: "toolbar", render: require("./toolbar") },
            { path: "typography", render: require("./typography") }
        ]
    }
)

app.init()