function filterItems() {
  // Get input value and convert to lowercase
  var input = document.querySelector(".search-input").value.toLowerCase();

  var spaceRegex = / /g;

  // Replace spaces with an end dash
  var dashedText = input.replace(spaceRegex, "_");
  console.log(dashedText);
  // Get list items
  var items = document.querySelectorAll(".user-card-container");

  // Loop through all items
  for (var i = 0; i < items.length; i++) {
    var item = items[i];
    // console.log(item);
    var itemName = item.textContent.toLowerCase();

    // Check if the item name contains the search input
    if (itemName.includes(dashedText)) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  }
}

// intialize the code into the add eventLisner

var searchInput = document.querySelector(".search-input");
searchInput.addEventListener("input", filterItems);
