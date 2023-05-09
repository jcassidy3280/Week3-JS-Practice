//My attempt
// function raiderAvoidancePlan (targetsFoundWhileForaging){
//     if (targetsFoundWhileForaging.includes("Zombie")){
//         targetsFoundWhileForaging.slice("Zombie")}
//     else (){
//     for (let i =0; i < targetsFoundWhileForaging; targetsFoundWhileForaging++) {
//         console.log(`JARVIS has found some ${targetsFoundWhileForaging[i]}!`)
//     }
// }}
// raiderAvoidancePlan(["Twinkies", "medicine","axes", "candy"])
//Solution
function raiderAvoidancePlan (targetsFoundWhileForaging){
    for (let i = 0; i < targetsFoundWhileForaging.length; i++){
        let currentTarget = targetsFoundWhileForaging[i];
        if (currentTarget === "zombie" || currentTarget === "raider") {
            console.log(`JARVIS has found a ${currentTarget}! Enacting avoidance plan.`)
        } else {
            console.log(`JARVIS has found some ${targetsFoundWhileForaging[i]}!`)
        }}
        console.log(`Number of targets encountered is ${targetsFoundWhileForaging.length}.`)
    }

raiderAvoidancePlan(["Twinkies", "raider", "medicine", "zombie", "axes", "candy"])