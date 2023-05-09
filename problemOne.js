const postMaterial = ["iron", "wood", "plastic"]

function buildFenceCommand (numOfFencePosts, fencePostMaterial){
    for (let currentFencePosts = 1; currentFencePosts <= numOfFencePosts; currentFencePosts++){
        console.log(`JARVIS is now building ${fencePostMaterial} fence post number ${currentFencePosts}.`)
    }
}

buildFenceCommand(8, postMaterial[1])