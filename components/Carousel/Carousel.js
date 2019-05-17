class Carousel {
    constructor(){
        this.rightButton = document.querySelector('.right-button') //gets right button
        this.leftButton = document.querySelector('.left-button') //gets left button
        this.images = document.querySelectorAll('.carousel-img') //gets all carousel images
        this.selectedImage = 0; //will use as index
 
        this.rightButton.addEventListener('click', () => this.rightClick())//when right button is clicked
        this.leftButton.addEventListener('click', () => this.leftClick())
     }
    rightClick(){
        this.images[this.selectedImage].classList.remove('selected')//makes all images disappear
        this.selectedImage++;//increases index
        if(this.selectedImage >this.images.length-1){
            this.selectedImage = 0;//if index becomes greater than number of images(-1), resets index to 0
        }
        this.images[this.selectedImage].classList.add('selected')//makes image of this index appear
    }
    leftClick(){
        this.images[this.selectedImage].classList.remove('selected')//makes all images disappear
        this.selectedImage--;//decreases index
        if(this.selectedImage < 0){
            this.selectedImage = this.images.length-1;//if index is less than 0, resets index to 0
        }
        this.images[this.selectedImage].classList.add('selected')//makes image of this index appear
    }

}

let carousel = new Carousel(document.querySelector('.carousel'));



/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the left and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

