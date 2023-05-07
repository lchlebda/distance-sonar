let isAlarmStopped = false
let distance = 0
input.onButtonPressed(Button.A, function () {
    isAlarmStopped = true
})
basic.forever(function () {
    distance = sonar.ping(
    DigitalPin.P0,
    DigitalPin.P1,
    PingUnit.Centimeters
    )
    if (distance < 40 && distance != 0 && !(isAlarmStopped)) {
        music.playTone(988, music.beat(BeatFraction.Whole))
        basic.pause(100)
    }
})
