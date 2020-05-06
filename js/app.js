//----------------GOBAL VARIABLES-------------------------
const addButton = document.querySelector("#addButton");
const clearButton = document.querySelector("#clearButton");
const item = document.querySelector("#item");
const taskListArea =document.querySelector("#task-list-bottom-area");
//----------------GOBAL VARIABLES-------------------------

function main()//--------run main app logic
{
    //check to see if list empty
    
    if(taskListArea.children.length==0)
    {
        const listItem= document.createElement("div");
        listItem.setAttribute("class","task-items");
        listItem.innerHTML="There are no lists here";
        taskListArea.appendChild(listItem);
    }
    else{
        taskListArea.children.item(0).remove();
    }
    //console.log(taskListArea.children[0].firstChild);
    if(taskListArea.children.length>1)
    {
       taskListArea.children.firstChild.remove();
    }

   //objects to fetch for listeners
    addButton.addEventListener("click",(e)=>{
        //fetch info from item if item is not empty
        //create new divs and append them to create branch
        console.log(taskListArea.childNodes);
        if(item.value!="")
        {
            //create stuff
            createAndAppendChildren();
            resetInput();
        }
        else{
            //display error
            displayEror();
        }
    });

    taskListArea.addEventListener("click", function(e)
    {
        // console.log(e.target.innerHTML);
        if(e.target.innerHTML="Remove"){
            e.target.parentElement.remove();
        }
    });
    
    clearButton.addEventListener("click",function(){
        const lister=document.querySelectorAll(".task-items");
        for(let i=0;i<lister.length;i++){
            lister[i].remove();
        }
    });
}

function createAndAppendChildren()//---create elements and append them to create tree to add to parent
{
    
    //---------CREATE ELEMENTS----------------------
    const listItem= document.createElement("div");
    const listText= document.createElement("h3");
    const ListRemove= document.createElement("a");
    
    //---------SET ATTRIBUTES AND STYLES-------------
        listItem.setAttribute("class","task-items");
        listText.innerHTML=item.value;
        ListRemove.innerHTML="Remove";
        ListRemove.setAttribute("href","#");
    
    //---------CREATE DOM TREE-----------------------
        listItem.appendChild(listText);
        listItem.appendChild(ListRemove);
        taskListArea.appendChild(listItem);
}
function resetInput()// set the list input to be empty and maintain focus
{
    item.value="";
    item.focus();
}
function displayEror()//display magical error notification
{
    const topArea= document.querySelector("#task-list-top-area");
    //--create and stye element
    const err=document.createElement("h2");
    err.setAttribute("id","err");
    err.innerHTML="You must enter an item for it to be added !!";
    err.style.color="red";
    err.style.fontWeight=500;
    topArea.appendChild(err);

    setTimeout(resetError,3000);

    function resetError()// closure function / callback function 
    {
        const err= document.querySelector("#err");
        err.remove();
    }
}

   

main();