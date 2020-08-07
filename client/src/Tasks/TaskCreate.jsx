// const clear = codument.querySelector(".clear");

// const dateElement = document.getElementById("date");

function addToDo( toDo ) {
    const list = document.getElementById("list");
    const text = `<li class="item">
      <i class="co fa fa-circle-thin" job="complete"></i>
      <p class="text" >Drink Coffee</p>
      <i class="de fa fa-trash-o" job="delete"></i>
    </li>`
    
    const position = "beforehand";
    
    list.insertAdjacentHTML(position, text);
    }
    // const input = document.getElementById("input")
    