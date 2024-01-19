let total = 0;
function com()
{
    let num = (Math.random() * 6) + 1;
    num = Math.trunc(num);
    document.querySelector(".n").textContent = num;
    let theImg = document.querySelector(".theImg");
    theImg.src = `dice-${num}.png`;
    total += num;
    document.querySelector(".total").textContent = total;
    if(total >=100)
    {
        alert("You have won the Game");
    }
}