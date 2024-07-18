radio.onReceivedNumber(function (receivedNumber) {
    SigLen = radio.receivedPacket(RadioPacketProperty.SignalStrength)
    serial.writeValue("Signal", SigLen)
    if (SigLen < -125) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    } else if (SigLen < -110) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . # # # .
            `)
        Sound(0)
    } else if (SigLen < -80) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . # # # .
            # # # # #
            `)
        Sound(1)
    } else if (SigLen < -60) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . # # # .
            # # # # #
            # # # # #
            `)
        Sound(2)
    } else if (SigLen < -45) {
        basic.showLeds(`
            . . . . .
            . # # # .
            # # # # #
            # # # # #
            # # # # #
            `)
        Sound(3)
    } else {
        basic.showLeds(`
            . # # # .
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
        Sound(4)
    }
    basic.clearScreen()
})
input.onButtonPressed(Button.A, function () {
    sound = sound * -1
})
function Sound (distance: number) {
    music.play(music.tonePlayable(262, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
}
function SoundSettings () {
    soundVariation = [
    74,
    262,
    0,
    0
    ]
}
let soundVariation: number[] = []
let SigLen = 0
let sound = 0
radio.setGroup(2)
radio.sendNumber(0)
sound = -1
basic.forever(function () {
	
})
