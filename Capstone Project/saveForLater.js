// $(document).ready(function () {
//   $("#container").fadeIn();
// });

// $(document).ready(function () {
//   $(document).fadeIn(1000);
// });

// // This is a jquery function to fade in elements on the page.
// $(".saveHeading").ready(function () {
//   $(this).fadeIn(3000);
// });

//The function for save for later
let buttons = document.querySelectorAll(".save");

//Array being declared to store multiple objects in it.
let myArray = [];

//Click event listener being added to each save button on each table row.
buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    // Variable targeting the tr element the save button is contained in.
    const row = event.target.closest("tr");

    //Extracting the inner text of each child of the clicked on tr element.
    let td1 = row.children[0].innerText;
    let td2 = row.children[1].innerText;
    let td3 = row.children[2].innerText;

    // Removal of the <save></save> button with slice method.
    let td4 = td3.slice(0, -4);

    //Declaring of the object that will store the innerText of the tr elements children.
    let myObject = {
      trail: td1,
      province: td2,
      Country: td4,
    };

    console.log(myObject);

    //Here the object is being pushed into myArray
    myArray.push(myObject);

    //Here myArray is being saved to local storage as "savedTrails".
    localStorage.setItem("myObject", JSON.stringify(myArray));

    //Here an alert is being given if the user saves 1 trail, and another alert is being given if the user saves more than 1 trail.
    if (myArray.length == 1) {
      alert("There is " + myArray.length + " trail in your saved folder.");
    } else if (myArray.length > 1) {
      alert("There are " + myArray.length + " trails in your saved folder.");
    }

    addData();
  });
});

//This function is taking the saved trail information from localStorage and printing it to the new table in saveForLater page.
function addData() {
  let data = localStorage.getItem("myObject");
  let objects = JSON.parse(data);

  //Shows the objects added to the array.
  // console.log(objects);

  //This varibal selects the saved for later table.
  let table = document.getElementById("newTable");

  //Here is the for loop that iterates through the objects in local storage, and prints each saved trail to the new table in the saveForLater.html page.
  for (i = 0; i < objects.length; i++) {
    //Below is adding a new row to the table.
    var row = table.insertRow(1);

    //Below here are vriables inseting the new row cells.
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);

    //Here each cell of the row is being printed with the trail, province and country of each saved hike.
    cell1.innerHTML = JSON.stringify(objects[i].trail);
    cell2.innerHTML = JSON.stringify(objects[i].province);
    cell3.innerHTML = JSON.stringify(objects[i].Country);
    //Below is adding a new remove button that will have the functionality to remove a table rows information.
    cell4.innerHTML = `<button class="removeBtn">Remove</button>`;
  }

  //Here is a varibale created to select the remove buttons in the saved for later table.
  let removeBtn = document.querySelectorAll(".removeBtn");
  console.log(removeBtn);

  //Addng a click event listener to target the closest tr element and remove it.
  removeBtn.forEach((button) => {
    button.addEventListener("click", (event) => {
      const row = event.target.closest("tr");
      console.log(row);
      let remove = row.parentNode.removeChild(row);
    });
  });
}

// Below here is a jquery function that takes the value from the input field and prints it to the comment section including the date of comment.
$(".commentBtn").click(function () {
  let input = document.getElementById("comment").value;
  var p = document.createElement("p");
  let today = new Date();
  let month = today.getMonth() + 1;
  let year = today.getFullYear();
  let date = today.getDate();

  let currentDate = `${month}/${date}/${year}`;

  p.innerHTML = input + " " + currentDate;

  var div = document.getElementById("comments");
  div.appendChild(p);
});

//This is the like function on each trail
//I learnt how to do this from W3Schools. https://www.w3schools.com/howto/howto_js_toggle_like.asp
function myFunction(x) {
  x.classList.toggle("fa-thumbs-down");
}

//Below are the fade in and out jquery functions for the comment section on the saveforlater page.
$(document).ready(function () {
  $("#container").fadeIn(3000);
});

$(".showHide").click(function () {
  $(".commentSection").fadeIn(3000);
});

$(".showHide2").click(function () {
  $(".commentSection").fadeOut(3000);
});

//Here is a chained animation effect using jQuery. I learnt this from a StackOverflow question https://stackoverflow.com/questions/10363671/jquery-bounce-effect-on-click-no-jquery-ui
//This makes the equiptment items on the equiptment page drop down menu jiggle when you click them
$(".wow").click(function () {
  bounce($(this), 3, "10px", 300);
});

function bounce(element, times, distance, speed) {
  for (var x = 0; x < times; x++) {
    element
      .animate({ marginTop: "-=" + "5px" }, 80)
      .animate({ marginTop: "+=" + "5px" }, 80);
  }
}

//Below is the jquery drop down menu functions for the equiptment on the equiptment html page.
$(document).ready(function () {
  $(".itemsHover").hover(
    function () {
      $(".side1").stop(true, true).slideDown("medium");
      $(".side2").stop(true, true).slideDown("medium");
    },
    function () {
      // $(".wow").stop(true, true).slideUp("medium");
    }
  );
});

//Here are the jquery functions for the hover drop down menu.
$(".side1").mouseover(function () {
  $(".side1").show();
  // $(".side2").show();
});

$(".side1").mouseout(function () {
  $(".side1").stop(true, true).slideUp("medium");
});

$(".side2").mouseover(function () {
  $(".side2").show();
});

$(".side2").mouseout(function () {
  $(".side2").stop(true, true).slideUp("medium");
});
