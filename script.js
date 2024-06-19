const input = document.querySelector("#searchInput");
const recipe = document.querySelectorAll(".item");

input.addEventListener("keyup", function (event) {
    const word = event.target.value.toLowerCase();
    
    recipe.forEach(item => {
        item.querySelector("p").textContent.toLowerCase().includes(word) ? (item.style.display = "block") : (item.style.display = "none");
    })
})
