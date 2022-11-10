let F = 0
let C = 0
input.onButtonPressed(Button.A, function () {
    basic.showString("" + (input.temperature()))
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(F)
    C = input.temperature()
    F = C * 1.8 + 32
})
