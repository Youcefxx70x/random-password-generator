const characters =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S",
"T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q",
"r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!",
"@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".",
"?","/"];

const lettersN=["A","B","C","D", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S",
"T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q",
"r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9" ]

const letters=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S",
"T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q",
"r","s","t","u","v","w","x","y","z"]

//*15 char long or set length

//*copy on click

//*symbols or numbers option



//my code
const length=15;
function generate(){
    let cb1=document.getElementById("lns")
    let cb2=document.getElementById("ln")
    let cb3=document.getElementById("l")
    if(cb1.checked===true){
    creator(characters)   }else if(cb2.checked){
        creator(lettersN)
    }else{
        creator(letters)

    }
}


function creator(x){
    let p1,p2


    p1=document.getElementById("p1")
    p2=document.getElementById("p2")
    p1.value=""
    p2.value=""

    for(let i=0;i<length;i++){
       
        let t1,t2
        t1=Math.floor(Math.random()*x.length)
        t2=Math.floor(Math.random()*x.length)

  


    

      //if(p1.value.length<length && p2.value.length<length){
         p1.value+=x[t1]
         p2.value+=x[t2]
        

       
    }
}
