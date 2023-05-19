// Get the canvas element
var ctx = document.querySelector(".userGrowth").getContext("2d");

// Create the chart
var chart = new Chart(ctx, {
  type: "line",
  data: {
    labels: ["Label 1", "Label 2", "Label 3"],
    datasets: [
      {
        label: "Data",
        data: [50, 30, 20, 100],
        backgroundColor: ["red", "green", "blue"],
      },
    ],
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
  },
});

let total = document.querySelector(".totalGrowth").getContext("2d");

var chart = new Chart(total, {
  type: "polarArea",
  data: {
    labels: ["Label 1", "Label 2", "Label 3"],
    datasets: [
      {
        label: "Data",
        data: [50, 30, 20, 200],
        backgroundColor: ["red", "green", "blue"],
      },
    ],
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
  },
});
