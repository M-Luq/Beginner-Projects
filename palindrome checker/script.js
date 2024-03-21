const palindromeInput = document.getElementById("text-input");
const checkBtn = document.getElementById("check-input");
const resultDiv = document.getElementById("result");

const checkPalindrome = (input) => {
    if(input === ''){
        alert('Please input a value');
    }

    palindromeInput.value = "";

    const letter = input.replace(/[^A-Za-z0-9]/gi,"").toLowerCase();
    console.log(letter);
    let resutlmsg = `<strong>${input} </strong>${
        letter===[...letter].reverse().join('')? "is" : "is not" } a palindrome.`;

    resultDiv.innerHTML = resutlmsg;
}


palindromeInput.addEventListener('keydown',(e) => {
    if(e.key === "Enter"){
        checkPalindrome(palindromeInput.value);
        palindromeInput.value="";
    }
})

checkBtn.addEventListener('click',()=>{
    checkPalindrome(palindromeInput.value);
    palindromeInput.value="";
})


