let copy = document.getElementById("copy");

copy.addEventListener("click",()=>{
    let input = document.getElementById("input").value;
    
    navigator.clipboard.writeText(input)
})