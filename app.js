const toDoItems = document.getElementsByClassName('to-do-items')[0];
const input = document.getElementById('input');

input.addEventListener('keydown', function(e){
    if(e.key === 'Enter'){
        addList();
    }
})

function addList(){
    var divParent = document.createElement('div');
    var divChild = document.createElement('div');
    var checkIcon = document.createElement('i');
    var deleteIcon = document.createElement('i');
 
    divParent.className = 'item';
    divParent.innerHTML = "<div>"+input.value+"</div>"

    checkIcon.className = "fas fa-check-square"
    checkIcon.style.color = 'white';
    checkIcon.addEventListener('click', function(){
        checkIcon.style.color = 'limegreen';
    })

    divChild.appendChild(checkIcon);

    deleteIcon.className = "fas fa-trash" ;
    deleteIcon.style.color = 'black';
    deleteIcon.addEventListener('click', function(){
        divParent.remove();
    })

    divChild.appendChild(deleteIcon); 

    divParent.appendChild(divChild);

    toDoItems.appendChild(divParent);

    input.value = '';
}


//what did I do?
//first take the input box and the div container into a variable;
//the div container will containe all the list that will be created
//then create an addEventListener so that whenever we click the "enter", a function will be called
//the function we will create will be the same as the function stated in onclick button, this makes both entering and clicking the button call the function
//in the created function, create a variable to create element which will be append later container
//divParent is a div that will contain the input.value and the icons(check and delete).
//divChild will be the div containing the two icons
//checkIcon will create an <i> element as well as the deleteIcon
//We will then pass the className of "item" to the divParent
//then we will manipulate the innerHTML of the divParent and put a "<div>"+input.value+"</div>". This is the the place where the input is gonna appear
//we then add the classes of the <i> element. We can extract the classes of the fontawesome icons we choose.
//we then change the color of icons to make it visible and create an event listener so that whenever we click them, certain things will happen
//for the checkIcon, we just change the color but for the deleteIcon we will make the entire div dissapear using the remove() method but that will happen later beacuse we want to arrange and group them together to avoid confusion
//after changing the color, we will append the checkIcon(<i> element with a class) to the divChild which will contain both icons
//this time, we will now do the deleteIcon, same as the checkIcon, we will as the className to the <i> element and change the color, then add an event Listener that will call funvtion that make the divParent removed(divParent.remove())
//next we will append now the deleteIcon to the divChild, same with the checkIcon. Now both of them are together.
//we will now append the smallest div which is the divChild(which contains the two icon) to the divParent.
//lastly, we will now append the divParent to the toDoItems container 
//ultimately, dont forget to make the input.value = "", so that whenever we add a new list, the input.value will be empty string


