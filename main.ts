let pinSoil = 0
let pinTouch = 0
basic.forever(function () {
    pinSoil = pins.digitalReadPin(DigitalPin.P1)
    pinTouch = pins.digitalReadPin(DigitalPin.P9)
    serial.writeLine("" + (pinTouch))
    basic.pause(200)
})
