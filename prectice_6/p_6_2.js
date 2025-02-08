let a = 'red'
let n = a.length
let vowel = false

for(let i = 0; i < n; i++){
    
    if( a[i] == 'a' || a[i] == 'e' || a[i] == 'i' || a[i] == 'o' || a[i] == 'u'){
        vowel = true;

        break;
    }
}

if (vowel == true) {
    console.log("true");
}
else{
    console.log("false");
}





