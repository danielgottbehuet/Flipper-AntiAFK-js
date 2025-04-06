let badusb = require("badusb");
let eventLoop = require("event_loop");
let notify = require("notification");

// === Configuration ===
const HID_KEY_W = 26;         // HID code for "W"
const INTERVAL_MS = 1000;     // Event interval

// === Initializing ===
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
        if(secondsElapsed & 1){
            notify.blink("red", "long");
        } else {
            notify.blink("green", "long");
        }
        print(secondsElapsed & 1);
        secondsElapsed += 1;
        print("Anti-AFK:", secondsElapsed, "sec");
    }
}, eventLoop);

// === Start Event Loop ===
eventLoop.run();
