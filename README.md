# Flipper Zero - BadUSB Anti-AFK Script (JavaScript)

This lightweight JavaScript script uses the **BadUSB module** of the Flipper Zero to simulate **anti-AFK behavior** in games like MMOs or FPS titles.

### 🔧 What does it do?

- Initializes the BadUSB module
- Once a USB connection is detected, it holds down the **"W" key (HID code 26)** continuously
- A simple timer prints how many seconds the anti-AFK has been active
- Useful for staying alive or avoiding auto-kick while AFK in games 😉

> [!CAUTION] 
> This script is intended **for educational and testing purposes only**. Use responsibly and respect the terms of service of any games or platforms you use it with.

### 📦 Requirements

- Flipper Zero with up-to-date firmware (JavaScript/mJS support enabled)
- BadUSB module enabled
- Flipper connected to a host device via USB

### ▶️ How to use

1. Upload the script to your Flipper (e.g. via `qFlipper`)
2. Run the script via the **JS console** or integrate it into a custom menu
3. Plug the Flipper into your target device via USB
4. Watch as the Flipper automatically holds the **"W" key**

---

### 💡 Notes

- The script uses `badusb.hold(26)` — 26 is the **HID code for "W"**
- You can change the HID code to hold other keys (e.g. 82 for Up Arrow)

---

### 📄 Author

Daniel Gottbehüt - Made with ❤️ for small automation hacks using the Flipper Zero.
