const arrow = document.querySelectorAll(".arrow");
const movieLists = document.querySelectorAll(".movie-list");
arrow.forEach((arrow, i) => {
    const imageItem = movieLists[i].querySelectorAll("img").length;
    console.log(imageItem);
    index = 0;
    arrow.addEventListener("click", function () {
        if (index < imageItem-4) {
            console.log(index);
            
            movieLists[i].style.transform = `translateX(${movieLists[i].computedStyleMap().get("transform")[0].x.value - 440}px)`;
            index++;
            
        }
        else{
            movieLists[i].style.transform = "translateX(0px)";
            index=0;
        }
    })



})
/*  dark mode*/
const ball=document.querySelector(".toggle-ball");
const items=document.querySelectorAll(".container,.sidebar,.sidebar i,.navbar,.toggle,.toggle-ball,.movie-list-filter select");
ball.addEventListener("click",function()
{
    console.log(items);
    items.forEach((item)=>item.classList.toggle("active"));
})