


// accordion logic for reading article body



let accordionWraper=document.querySelectorAll(".aboutusArticle1text");

for (let item of accordionWraper) {
    item.addEventListener('click', function() {
        this.classList.toggle('active');
    })
}



// .....



