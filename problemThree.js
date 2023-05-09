const suppliesToLookFor = ["Twinkies", "medicine", "axes", "candy"]

function gatherSupplies (suppliesToLookFor){
    for (let i = 0; i < suppliesToLookFor.length; i++) {
        console.log(`JARVIS has found some ${suppliesToLookFor[i]}!`);
       
    } console.log(suppliesToLookFor.length)
}
gatherSupplies(["Twinkies", "medicine", "axes", "candy"])