input.onButtonPressed(Button.A, function () {
    isAlarmStopped = true
})
let distance = 0
let isAlarmStopped = false
radio.setGroup(1)
basic.forever(function () {
    distance = sonar.ping(
    DigitalPin.P0,
    DigitalPin.P1,
    PingUnit.Centimeters
    )
    if (distance < 50 && distance != 0 && !(isAlarmStopped)) {
        radio.sendString("AlarmOn")
        music.playTone(988, music.beat(BeatFraction.Whole))
        basic.pause(100)
    } else {
        radio.sendString("AlarmOf")
    }
})
