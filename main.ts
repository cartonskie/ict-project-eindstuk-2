basic.forever(function () {
    if (input.soundLevel() > 90) {
        servos.P0.setAngle(90)
        music.playMelody("C D E F G A B C5 ", 125)
    } else {
        music.stopAllSounds()
        servos.P0.setAngle(0)
    }
})
