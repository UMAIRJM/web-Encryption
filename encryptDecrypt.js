// import { myKeysFucntion } from "./keys.js";

$(function callFunction(){
    const keys = myKeysFucntion()
    encryptionKey = keys.encryptionKey
    decryptionKey = keys.decryptionKey
    encryptFunction()
    descryptFucntion()

})


function encryptFunction(){
    $("#encryptButton").on("click",function(){
        const value2 = $("#enteredKey").val()
        let index 
        let encryptedArray = []
        for(let i = 0;i<value2.length;i++){
            value = value2[i].toUpperCase()
            for(let i = 0;i<encryptionKey.length;i++){
                if(value == encryptionKey[i]){
                  index = i
                  encryptedArray.push(decryptionKey[index])

                }
            }
        }
        let convertedString = encryptedArray.join('')
        $("#outputLabel").text("Your Encrypted key: " + convertedString)

    })

}
function descryptFucntion(){
    $("#decryptButton").on("click",function(){
        const value2 = $("#enteredKey").val()
        let index 
        let encryptedArray = []
        for(let i = 0;i<value2.length;i++){
            value = value2[i]
            for(let i = 0;i<decryptionKey.length;i++){
                if(value == decryptionKey[i]){
                  index = i
                  encryptedArray.push(encryptionKey[index])

                }
            }
        }
        let convertedString = encryptedArray.join('')
        $("#outputLabel").text("Your Encrypted key: " + convertedString)

    })
}


console.log("This is my javascript file")