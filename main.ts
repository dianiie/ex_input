let pinRain = 0
let pinSoil = 0
let pinTouch = 0
let pinFlame = 0
let pinPhoto = 0
let pinTemp = 0
basic.forever(function () {
    pinRain = pins.digitalReadPin(DigitalPin.P7)
    pinSoil = pins.digitalReadPin(DigitalPin.P1)
    pinTouch = pins.digitalReadPin(DigitalPin.P9)
    pinFlame = pins.digitalReadPin(DigitalPin.P6)
    pinPhoto = Math.ceil(Math.map(Math.constrain(pins.analogReadPin(AnalogPin.P4), 284, 727), 284, 727, 0, 10))
    pinTemp = Math.ceil(Math.map(Math.constrain(pins.analogReadPin(AnalogPin.P3), 564, 570), 564, 570, 0, 2))
    serial.writeNumber(pinRain)
    serial.writeString("'")
    serial.writeNumber(pinSoil)
    serial.writeString("'")
    serial.writeNumber(pinTouch)
    serial.writeString("'")
    serial.writeNumber(pinFlame)
    serial.writeString("'")
    serial.writeNumber(pinPhoto)
    serial.writeString("'")
    serial.writeNumber(pinTemp)
    serial.writeLine("")
    basic.pause(1000)
})
