radio.onReceivedNumber(function (receivedNumber) {
    SigLen = radio.receivedPacket(RadioPacketProperty.SignalStrength)
    if (SigLen < -85) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    } else if (SigLen < -80) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . # # # .
            `)
        Sound(0)
    } else if (SigLen < -70) {
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
    } else if (SigLen < -50) {
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
    serial.writeValue("Signal", SigLen)
    basic.clearScreen()
})
input.onButtonPressed(Button.A, function () {
    if (sound) {
        sound = false
    } else {
        sound = true
    }
})
function Sound (distance: number) {
    if (sound) {
        music.setVolume(sound_att[distance])
        if (distance == 0) {
        	
        } else if (distance == 1) {
            music.play(music.stringPlayable("D - - - - - - - ", 240), music.PlaybackMode.UntilDone)
        } else if (distance == 2) {
            music.play(music.stringPlayable("E - - - - E - - ", 240), music.PlaybackMode.UntilDone)
        } else if (distance == 3) {
            music.play(music.stringPlayable("A - - A - - A - ", 240), music.PlaybackMode.UntilDone)
        } else {
            music.play(music.stringPlayable("C5 - C5 - C5 - C5 - ", 240), music.PlaybackMode.UntilDone)
        }
    }
}
input.onButtonPressed(Button.AB, function () {
    tmp_distance += 1
    if (tmp_distance > 4) {
        tmp_distance = 0
    }
})
let SigLen = 0
let tmp_distance = 0
let sound_att: number[] = []
let sound = false
radio.setGroup(2)
sound = false
sound_att = [
0,
74,
166,
200,
255
]
tmp_distance = 0
basic.forever(function () {
	
})
