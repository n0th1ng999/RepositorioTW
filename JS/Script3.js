var i = 1;
function LoadMore(Id_of_Element_To_Copy,Class_of_Element_To_Copy,ID_of_Element_to_Append){
// Get the elements length
var length = document.querySelectorAll('#'+ID_of_Element_to_Append +' .'+Class_of_Element_To_Copy).length;

//Get the element to clone
var elem = document.getElementById(Id_of_Element_To_Copy);

// Create a copy of it
var clone = elem.cloneNode(true);

//Remove the position on the ID
var RootIdStr = Id_of_Element_To_Copy.slice(0,-1);

// Update the ID
var prev = document.getElementById(RootIdStr + (length-1));
clone.id = clone.id.slice(0,-1)+length;
i++;

// Inject it into the DOM
prev.after(clone);
}