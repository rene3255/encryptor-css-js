/*

La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"

*/

const  VOWELS =  'aeiou';

function encryptText(wordReceived){
    let wordEncrypted = ""; 
    for(var i=0; i < wordReceived.length; i++){
        
        if (VOWELS.includes(wordReceived[i])){
            if(wordReceived[i] =='a'){
                wordEncrypted = wordEncrypted + 'ai';
            }

            if(wordReceived[i]=='e'){
                wordEncrypted = wordEncrypted + 'enter';
            
            }

            if(wordReceived[i]=='i'){
              wordEncrypted = wordEncrypted + 'imes';  
            }
            
            if(wordReceived[i]=='o'){
                wordEncrypted = wordEncrypted + 'ober';  
              }
               
              if(wordReceived[i]=='u'){
                wordEncrypted = wordEncrypted + 'ufat';  
              }
              
            }
            else {
                wordEncrypted = wordEncrypted + wordReceived[i];
            }
        }    
        return wordEncrypted; 
    }

function decryptedText(wordReceived){
        let wordDeCrypted = "";
        for (let i = 0; i < wordReceived.length; i++){
            if (VOWELS.includes(wordReceived[i])){
                if(wordReceived[i] =='a'){
                    wordDeCrypted = wordDeCrypted + 'a';
                    i+=1;
                    continue;
                }
                if(wordReceived[i] =='e'){
                    wordDeCrypted = wordDeCrypted + 'e';
                    i+=4;
                    continue;
                }

                if(wordReceived[i] =='i'){
                    wordDeCrypted = wordDeCrypted + 'i';
                    i+=3;
                    continue;
                }

                if(wordReceived[i] =='o'){
                    wordDeCrypted = wordDeCrypted + 'o';
                    i+=3;
                    continue;
                }

                if(wordReceived[i] =='u'){
                    wordDeCrypted = wordDeCrypted + 'u';
                    i+=3;
                    continue;
                }

            }    
            else {
                wordDeCrypted = wordDeCrypted + wordReceived[i];
            }
                
        }
        return wordDeCrypted;
    }
    
function getTextToEncryp() {
    let textToEncryp = document.querySelector('#textEntry');
    let getTextArea = document.querySelector('#displayResult');
     getTextArea.innerHTML = encryptText(textToEncryp.value);
     textToEncryp.innerHTML = "";
  return;  
}

function getTextToDecryp() {
    let textToDecryp = document.querySelector('#textEntry');
    let getTextArea = document.querySelector('#displayResult');
    console.log("Decripted",textToDecryp.value);
     getTextArea.innerHTML = decryptedText(textToDecryp.value);
  return;  
}

function copyToClipBoard(){
 let textAreaElement = document.querySelector('#displayResult');
 console.log("Has value",textAreaElement.value);
 navigator.clipboard.writeText(textAreaElement.value)
    .then(() => {
        alert("copied the text: " + textAreaElement.value);
        
    })
    .catch (err => {
        console.error("Failed to copy text ", err);
    });
}