radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 2) {
        cuteBot.motors(50, 50)
        basic.showLeds(`
            . # . # .
            . # . # .
            . . . . .
            # . . . #
            # # # # #
            `)
        music.play(music.createSoundExpression(WaveShape.Triangle, 715, 891, 107, 255, 1000, SoundExpressionEffect.Vibrato, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
        music.play(music.createSoundExpression(WaveShape.Triangle, 1110, 627, 255, 102, 200, SoundExpressionEffect.Warble, InterpolationCurve.Logarithmic), music.PlaybackMode.UntilDone)
    }
    if (receivedNumber == 4) {
        cuteBot.motors(0, 15)
        basic.showLeds(`
            # . . # .
            . # . . #
            # . . # .
            . . . . .
            # # # # .
            `)
        for (let index = 0; index < 4; index++) {
            right.showColor(neopixel.colors(NeoPixelColors.Yellow))
            music.play(music.createSoundExpression(WaveShape.Noise, 1, 408, 0, 255, 100, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
            basic.pause(100)
            right.showColor(neopixel.colors(NeoPixelColors.Black))
            music.play(music.createSoundExpression(WaveShape.Noise, 1286, 0, 255, 0, 100, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
            basic.pause(100)
        }
    }
    if (receivedNumber == 5) {
        cuteBot.motors(15, 0)
        basic.showLeds(`
            . # . . #
            # . . # .
            . # . . #
            . . . . .
            . # # # #
            `)
        for (let index = 0; index < 4; index++) {
            left.showColor(neopixel.colors(NeoPixelColors.Yellow))
            music.play(music.createSoundExpression(WaveShape.Noise, 1, 408, 0, 255, 100, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
            basic.pause(100)
            right.showColor(neopixel.colors(NeoPixelColors.Black))
            music.play(music.createSoundExpression(WaveShape.Noise, 1286, 0, 255, 0, 100, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
            basic.pause(100)
        }
    }
    if (receivedNumber == 3) {
        basic.showIcon(IconNames.Silly)
        cuteBot.motors(-30, -30)
        basic.pause(100)
        for (let index = 0; index < 4; index++) {
            music.play(music.tonePlayable(784, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
            music.rest(music.beat(BeatFraction.Whole))
        }
    }
    if (receivedNumber == 1) {
        cuteBot.motors(0, 0)
        cuteBot.stopcar()
        basic.showIcon(IconNames.Asleep)
        music.play(music.createSoundExpression(WaveShape.Sine, 1637, 144, 186, 54, 500, SoundExpressionEffect.Warble, InterpolationCurve.Logarithmic), music.PlaybackMode.UntilDone)
    }
})
let sonar = 0
let left: neopixel.Strip = null
let right: neopixel.Strip = null
radio.setGroup(1)
music.play(music.createSoundExpression(WaveShape.Triangle, 715, 891, 107, 255, 1000, SoundExpressionEffect.Vibrato, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
music.play(music.createSoundExpression(WaveShape.Triangle, 1110, 627, 255, 102, 200, SoundExpressionEffect.Warble, InterpolationCurve.Logarithmic), music.PlaybackMode.UntilDone)
let strip = neopixel.create(DigitalPin.P15, 24, NeoPixelMode.RGB)
right = strip.range(0, 1)
left = strip.range(1, 1)
basic.forever(function () {
    sonar = cuteBot.ultrasonic(cuteBot.SonarUnit.Centimeters)
    if (sonar < 2) {
        cuteBot.motors(0, 0)
        music.play(music.createSoundExpression(WaveShape.Triangle, 1637, 4096, 255, 120, 1000, SoundExpressionEffect.Tremolo, InterpolationCurve.Curve), music.PlaybackMode.UntilDone)
        music.play(music.tonePlayable(587, music.beat(BeatFraction.Eighth)), music.PlaybackMode.UntilDone)
        cuteBot.colorLight(cuteBot.RGBLights.ALL, 0xff00ff)
        cuteBot.colorLight(cuteBot.RGBLights.ALL, 0xffff00)
        cuteBot.colorLight(cuteBot.RGBLights.ALL, 0x7f00ff)
        cuteBot.colorLight(cuteBot.RGBLights.ALL, 0x00ffff)
        cuteBot.colorLight(cuteBot.RGBLights.ALL, 0x000000)
    }
})
