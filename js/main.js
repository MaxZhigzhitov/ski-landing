const animTexts = document.querySelectorAll('.textblock, .title--main, .title--sec');
const animLabels = document.querySelectorAll('.title-label');
const animImages = document.querySelectorAll('.content-image');
const windowHeight = document.documentElement.clientHeight;

let animTextPositions = [];
let animLabelPositions = [];
let animImagesPositions = [];

animTexts.forEach(text => {
    animTextPositions.push(text.getBoundingClientRect().top + scrollY);
})
animLabels.forEach(label => {
    animLabelPositions.push(label.getBoundingClientRect().top + scrollY);
})
animImages.forEach(image => {
    animImagesPositions.push(image.getBoundingClientRect().top + scrollY);
})


console.log(animTexts);
console.log(animTextPositions);
console.log(animLabels);
console.log(animLabelPositions);




lazyScrollCheck();  //initial animations


window.addEventListener('scroll', lazyScrollCheck);


function lazyScrollCheck(){
    let animTextIndex = animTextPositions.findIndex(item => scrollY > item - (windowHeight - 200));
    let animLabelIndex = animLabelPositions.findIndex(item => scrollY > item - (windowHeight - 450));
    let animImageIndex = animImagesPositions.findIndex(item => scrollY > item - (windowHeight - 220));
    
    if (animTextIndex >= 0){
        animTexts[animTextIndex].classList.add('anim-text');
        delete animTextPositions[animTextIndex];
    }
    if (animLabelIndex >= 0){
        animLabels[animLabelIndex].classList.add('anim-label');
        delete animLabelPositions[animLabelIndex];
    }
    if (animImageIndex >= 0){
        animImages[animImageIndex].classList.add('anim-article-image');
        delete animImagesPositions[animImageIndex];
    }
}
