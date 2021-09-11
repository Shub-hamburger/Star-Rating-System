function Star(el, count, callback) {
    const element = document.querySelector(el);
    const div = document.createElement('div');
    let currentRating = -1;

    for(let i = 1; i <= count; i++) {
        const iEle = document.createElement('i');
        iEle.classList.add("fa");
        iEle.classList.add("fa-star-o");
        iEle.dataset.rating = i;
        div.appendChild(iEle);
    }
    element.appendChild(div);
    element.addEventListener("mouseover", onMouseOver);
    element.addEventListener("click", onClick);
    element.addEventListener("mouseleave", onMouseLeave);

    // Method to color star
    function colorStar(rating) {
        const elementChildren = element.children[0].children;

        for(let i = 0; i < count; i++) {
            if (rating > i) elementChildren[i].classList.add("fa-star");
            else elementChildren[i].classList.remove("fa-star");
        }
    }

    // Event listeners
    function onMouseOver(e) {
        const rating = e.target.dataset.rating;
        colorStar(rating);
    }

    function onClick(e) {
        currentRating = e.target.dataset.rating;
        colorStar(currentRating);
        callback(currentRating);
    }
    
    function onMouseLeave(e) {
        colorStar(currentRating);
    }
}

function getStar(value){
  document.getElementById("display-star").innerHTML = value;
}

new Star("#star", 5, getStar);