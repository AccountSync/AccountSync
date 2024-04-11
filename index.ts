import { Devs } from "@utils/constants";
import definePlugin, { OptionType } from "@utils/types";


export default definePlugin({
    name: "AccountSync",
    description: "Syncs your account info to the cloud.",
    authors: [{
        name: "ThePython",
        id: 866510980225040466n
    }, Devs.Mopi,
    ],
    settings: pluginSettings,
    async start() {
    },
    stop() {
        }});