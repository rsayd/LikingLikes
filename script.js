function voteUp(id) {
    console.log("vote", id)
    if (id === 1) {
        document.getElementById("vote1").
            innerHTML++;
    } else if (id === 2){
        document.getElementById("vote2").
            innerHTML++;
    } else {
        document.getElementById("vote3").
        innerHTML++;
    }
}

