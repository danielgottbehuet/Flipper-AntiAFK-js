let badusb = require("badusb");
let eventLoop = require("event_loop");

// === Konfiguration ===
const HID_KEY_W = 26;         // HID code for "W"
const INTERVAL_MS = 1000;     // Anti-AFK interval in milliseconds

// === Initialisierung ===
print("Initializing BadUSB..");
badusb.setup();

let isSending = false;
let secondsElapsed = 0;

let timer = eventLoop.timer("periodic", INTERVAL_MS);

eventLoop.subscribe(timer, function (_subscription, _item, eventLoop) {
    if (badusb.isConnected() && !isSending) {
        print("BadUSB initialized!");
        badusb.hold(HID_KEY_W);  // Start holding the "W" key
        isSending = true;
    }

    if (isSending) {
        secondsElapsed += 1;
        print("Anti-AFK:", secondsElapsed, "sec");
    }
}, eventLoop);

// === Start Event Loop ===
eventLoop.run();
