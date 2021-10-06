input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Happy)
})
basic.forever(function () {
    basic.showIcon(IconNames.Heart)
    basic.pause(500)
    basic.clearScreen()
    music.playTone(988, music.beat(BeatFraction.Whole))
})
