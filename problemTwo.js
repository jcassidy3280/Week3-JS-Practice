// function directTurretDefenceCommand (numOfTurrets, numOfDetectedZombies) {
//     for (let currentZombie = 1; currentZombie >= numOfDetectedZombies; currentZombie++) {
//     console.log(`Directing ${numOfTurrets} turrets' fire to zombie # ${currentZombie}.`)
// }}
// directTurretDefenceCommand(10, 5)

function directTurretDefenceCommand (numOfTurrets, numOfDetectedZombies) {
    for (let currentZombie = 1; currentZombie <= numOfDetectedZombies; currentZombie++) {
        console.log(`Directing ${numOfTurrets} turrets' fire to zombie # ${currentZombie}.`)
    }
}

directTurretDefenceCommand(10, 5)