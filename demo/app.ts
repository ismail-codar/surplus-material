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
            { path: "card", render: require("./card") }
        ]
    }
)

app.init()