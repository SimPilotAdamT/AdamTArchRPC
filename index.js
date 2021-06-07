const os = require('os');
const RPC = require('discord-rpc');
const {exec} = require("child_process");
const client = new RPC.Client({transport: 'ipc'});

exec("stat -c %Z /proc/", (error, stdout, stderr) => {
    if (error) {
        console.log(`error: ${error.message}`);
        return;
    }
    if (stderr) {
        console.log(`stderr: ${stderr}`);
        return;
    }
    client.on('ready', () => {
        client.request('SET_ACTIVITY', {
            pid: process.pid,
            activity: {
                details: "Kernel: " + os.type() + " " + os.release(),
                state: "WM: XMonad",
                timestamps: {
                    start: parseInt(`${stdout}`)
                },
                assets: {
                    large_image: "arch-logo", // large image key from developer portal > rich presence > art assets
                    large_text: "Arch Linux"
                },
                buttons: [{
                        label: "Learn more about Arch Linux",
                        url: "https://archlinux.org/"
                    },
                    {
                        label: "Learn more about Xmonad",
                        url: "https://xmonad.org/"
                    }
                    /*{
                    	label: "Learn more about GNOME",
                    	url: "https://www.gnome.org/"
                    }*/
                    /*{
                    	label: "Learn more about KDE Plasma",
                    	url: "https://kde.org/"
                    }
                    */
                ]
            }
        });
    });

    client.login({
        clientId: '848998426317946881', // put the client id from the dev portal here
        clientSecret: 'DjgpoVfYiazwxTRxoQDtp7STJMI9BEXY' // put the client secret from the dev portal here
    });
    console.log("Rich Presence applied!");
});
