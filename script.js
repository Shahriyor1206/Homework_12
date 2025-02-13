const slides = document.querySelectorAll('.slide');
let count = 0;

slides.forEach((slide, index) => {
   slide.style.left = `${index * 100}%`;
});

const goPrev = () => {
   if(count === 0){
      count = slides.length -1;
      slideImage();
   } else{
      count--;
      slideImage();
   }
};

const goNext = () => {
   if(count === slides.length -1){
      count = 0;
      slideImage();
   } else{
      count++;
      slideImage();
   }
};

const slideImage = () => {
   slides.forEach((slide) => {
      slide.style.transform = `translateX(-${count * 100}%)`;
   });
}