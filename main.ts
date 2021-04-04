let pinSoil = 0
let pinTouch = 0
let pinFlame = 0
basic.forever(function () {
    pinSoil = pins.digitalReadPin(DigitalPin.P1)
    pinTouch = pins.digitalReadPin(DigitalPin.P9)
    pinFlame = pins.digitalReadPin(DigitalPin.P6)
    serial.writeLine("" + (pinFlame))
    basic.pause(200)
})
