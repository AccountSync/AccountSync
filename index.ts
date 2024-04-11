/*
 * Vencord, a Discord client mod
 * Copyright (c) 2023 Vendicated and contributors
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

// Needed header for all plugins

import { definePluginSettings } from "@api/Settings";
import { Devs } from "@utils/constants";
import definePlugin from "@utils/types";

const pluginSettings = definePluginSettings({

});

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
    }
});
