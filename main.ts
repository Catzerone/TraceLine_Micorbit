enum RadioMessage {
    message1 = 49434
}
function stop () {
    Matrix.motor(M_PORT.M1, 0)
    Matrix.motor(M_PORT.M2, 0)
}
input.onButtonPressed(Button.A, function () {
    while (MxLaser.readDistance() > 100) {
        trace(60, 0.05, 570)
    }
    stop()
})
function trace (speed: number, velocity: number, correctum: number) {
    Matrix.motor(M_PORT.M1, speed + (Matrix.readADC(A_PORT.A2) - correctum) * velocity)
    Matrix.motor(M_PORT.M2, speed - (Matrix.readADC(A_PORT.A2) - correctum) * velocity)
}
MxLaser.init(
)
basic.forever(function () {
    basic.showNumber(Matrix.readADC(A_PORT.A2))
    basic.pause(1000)
})
