let num = document.getElementById("inputText")
let check = document.getElementById("check")

function palin(num)
{
    let temp = num;
    let rev = 0;
    while(num > 0)
    {
        let digit = num % 10;
        rev = rev * 10 + digit;
        num = Math.floor(num / 10);
    }
    if(temp == rev)
    {
        return 1;
    }
    else
    {
        return 0;
    }
}
check.addEventListener("click", function() {
    let inputVal = parseInt(num.value);
    let see = palin(inputVal);
    
    if(see == 1)
    {
        alert("The number is a palindrome");
    }
    else
    {
        alert("The number is not a palindrome");
    }
})
