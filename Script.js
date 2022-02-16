const btn = document.getElementById("menu-toggle");
const sidenav=document.getElementById("sidenavBackground");
const lines = btn.querySelectorAll(".line");
const cls = { open: "open", close: "close" };
const body = document.getElementsByTagName("body");

let btnClass = cls.close;


btn.addEventListener("click", () => {
  if (btn.classList.contains(cls.open)) {
    btn.classList.remove(btnClass);
    btnClass = cls.close;
    sidenav.classList.toggle("visible");
    document.body.classList.toggle("NoScroll");
    
    
  } else if (btn.classList.contains(cls.close)) {
    btn.classList.remove(btnClass);
    btnClass = cls.open;
    sidenav.classList.toggle("visible");
    document.body.classList.toggle("NoScroll");
    
   
    
    
  }

  
  void btn.offsetWidth;
  btn.classList.add(btnClass);
});

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
}