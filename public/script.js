// Create a function that tests the post route handler [2 pts]


// Call the function [1 pt]
// Show us the successful POST fetch [1 pt]
async function getPotion(){
    // fill in the path
    const response = await fetch(base + "potion")
    const data = await response.json()
    console.log(data)
}
