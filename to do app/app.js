

var listOfActivities = [];

var input = document.getElementById("input");

var todolist = document.getElementById("todolist");

document.getElementById("button").onclick = click;

function click() {
  // function -> click()

  listOfActivities.push(input.value);
  console.log(listOfActivities);
  //Using push array operation to add the input todo activity to the list created earlier.
  input.value = "";
  // Giving Empty string to input value after pushing it to array
  showList();

}

function showList() {

  todolist.innerHTML = " ";

  

  listOfActivities.forEach(function (n, i) {
    todolist.innerHTML +=
      "<li>" +
      n +
      "<a onclick='editItem(" +
      i +
      ")'>Edit</a>" +
      "<a onclick='deleteItem(" +
      i +
      ")'>&times | </a></li>";
  });
}


function deleteItem(i) {
  // Using splice array operations to remove one item at specified index
  listOfActivities.splice(i, 1);
  // Display the todo list
  showList();
}


function editItem(i) {

  var newValue = prompt("Please insert your new value");
  listOfActivities.splice(i, 1, newValue);
  showList();
}
