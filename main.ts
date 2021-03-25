namespace SpriteKind {
    export const goal = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Player, function (sprite, otherSprite) {
    ball.vx = vy * -1
    ball.vy = vx * -1
    ball_2.vx = vx2 * -1
    ball_2.vy = vy2 * -1
})
let vy2 = 0
let vx2 = 0
let ball_2: Sprite = null
let vy = 0
let vx = 0
let ball: Sprite = null
ball = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . 3 3 . . . . . . . . 
    . . . . . 3 3 5 3 . . . . . . . 
    . . . . 3 5 4 3 3 3 . . . . . . 
    . . . . 3 4 3 3 5 3 . . . . . . 
    . . . . . 3 5 3 3 . . . . . . . 
    . . . . . . 3 4 . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
vx = 70
ball.vx = vx
vy = Math.sqrt(2400)
ball.vy = vy
let goal = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . b b b b b b b b b b b b . . 
    . . b b b b b b b b b b b b . . 
    . . b b 1 . 1 . 1 . 1 . b b . . 
    . . b b . 1 . 1 . 1 . 1 b b . . 
    . . b b 1 . 1 . 1 . 1 . b b . . 
    . . b b . 1 . 1 . 1 . 1 b b . . 
    . . b b 1 . 1 . 1 . 1 . b b . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.goal)
goal.setPosition(randint(0, scene.screenWidth()), randint(0, scene.screenHeight()))
ball_2 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . 6 6 . . . . . . . . 
    . . . . . 8 6 6 9 . . . . . . . 
    . . . . 6 6 9 6 6 6 . . . . . . 
    . . . . 8 6 6 6 9 6 . . . . . . 
    . . . . . 8 6 6 6 . . . . . . . 
    . . . . . . 6 6 . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
vx2 = 30
ball_2.vx = vx2
vy2 = 80
ball_2.vy = vy2
info.player1.setScore(0)
info.player2.setScore(0)
forever(function () {
    if (ball.x >= scene.screenWidth()) {
        ball.vx = vx * -1
    }
    if (ball.x <= 0) {
        ball.vx = Math.abs(vx)
    }
    if (ball.y >= scene.screenHeight()) {
        ball.vy = vy * -1
    }
    if (ball.y <= 0) {
        ball.vy = Math.abs(vy)
    }
    if (ball_2.x >= scene.screenWidth()) {
        ball_2.vx = vx2 * -1
    }
    if (ball_2.x <= 0) {
        ball_2.vx = Math.abs(vx2)
    }
    if (ball_2.y >= scene.screenHeight()) {
        ball_2.vy = vy2 * -1
    }
    if (ball_2.y <= 0) {
        ball_2.vy = Math.abs(vy2)
    }
    if (ball.overlapsWith(goal)) {
        goal.destroy()
        info.player1.changeScoreBy(1)
        goal = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . b b b b b b b b b b b b . . 
            . . b b b b b b b b b b b b . . 
            . . b b 1 . 1 . 1 . 1 . b b . . 
            . . b b . 1 . 1 . 1 . 1 b b . . 
            . . b b 1 . 1 . 1 . 1 . b b . . 
            . . b b . 1 . 1 . 1 . 1 b b . . 
            . . b b 1 . 1 . 1 . 1 . b b . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.goal)
        goal.setPosition(randint(0, scene.screenWidth()), randint(0, scene.screenHeight()))
        ball.vx = vy * -1
        ball.vy = vx * -1
    }
    if (ball_2.overlapsWith(goal)) {
        goal.destroy()
        info.player2.changeScoreBy(1)
        goal = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . b b b b b b b b b b b b . . 
            . . b b b b b b b b b b b b . . 
            . . b b 1 . 1 . 1 . 1 . b b . . 
            . . b b . 1 . 1 . 1 . 1 b b . . 
            . . b b 1 . 1 . 1 . 1 . b b . . 
            . . b b . 1 . 1 . 1 . 1 b b . . 
            . . b b 1 . 1 . 1 . 1 . b b . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.goal)
        goal.setPosition(randint(0, scene.screenWidth()), randint(0, scene.screenHeight()))
        ball_2.vx = vy2 * -1
        ball_2.vy = vx2 * -1
    }
})
