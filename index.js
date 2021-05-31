const RPC = require('discord-rpc');
const client = new RPC.Client({
    transport: 'ipc'
});

client.on('ready', () => {
    client.request('SET_ACTIVITY', {
        pid: process.pid,
        activity: {
            details: "Linux 5.12.8-arch1-1",
            state: "1779 packages installed",
            timestamps: {
                start: Date.now()
            },
            assets: {
                large_image: "arch-logo", // large image key from developer portal > rich presence > art assets
                large_text: "Arch Linux"
		//small_image: "xmonad-logo" // small image key from developer portal > rich presence > art assets
		//small_test: "Xmonad"
            },
            buttons: [
                //{ label: "Learn more about GNU/Linux", url: "https://en.wikipedia.org/wiki/Linux" },
                { label: "Learn more about Arch Linux", url: "https://archlinux.org/" }
            ]
        }
    });
});

client.login({
    clientId: '848998426317946881', // put the client id from the dev portal here
    clientSecret: 'DjgpoVfYiazwxTRxoQDtp7STJMI9BEXY' // put the client secret from the dev portal here
});
