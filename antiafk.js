let badusb = require("badusb");
let eventLoop = require("event_loop");
let timer = eventLoop.timer("periodic", 1000);
let send = false;
let counter = 0;

print("Initializing BadUSB..");
badusb.setup();
eventLoop.subscribe(timer, function(_subscription, _item, eventLoop) {
    if (badusb.isConnected() && !send) {
        print("BadUSB initialized!");
        send = true;
        badusb.hold(26);
    }
    if(send){
        counter = counter + 1;
        print("Anti AFK:", counter, "Sec.");
    }
}, eventLoop);
 
eventLoop.run();
