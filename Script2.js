// const slideshow = document.getElementById("Slideshow");
// const slideImgs = slideshow.querySelectorAll('img');
// const slideImg = slideImgs.addEventListener('dragstart', (e) => e.preventDefault());

const slide1 = document.getElementById("slide1");
const slide2 = document.getElementById("slide2");
const slide3 = document.getElementById("slide3");

const img1 = document.getElementById("img1");
const img2 = document.getElementById("img2");
const img3 = document.getElementById("img3");





function ChangeImg(id) {

        if ((slide1.classList.contains("current"))){
                slide1.classList.remove("current");
                if(!(img1.classList.contains("hidden"))){
                        img1.classList.add("hidden")
                }  
        }

        if ((slide2.classList.contains("current"))){
                slide2.classList.remove("current");
                if(!(img2.classList.contains("hidden"))){
                        img2.classList.add("hidden")
                        }       
        }

        if ((slide3.classList.contains("current"))){
                slide3.classList.remove("current");
                if(!(img3.classList.contains("hidden"))){
                        img3.classList.add("hidden")
                        } 
        }
     

        if (!(id.classList.contains("current"))){
                id.classList.add("current");
                let imgid = id.id;
                imgid = id.id.replace("slide", "img"); 
                document.getElementById(imgid).classList.remove("hidden") 
        }
     }

     function SlideshowDrag(id){
        prevent
        
     }