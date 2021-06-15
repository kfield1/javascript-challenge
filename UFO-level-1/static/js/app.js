// from data.js
var tableData = data;

// Creating References to tbody, input and button
var $tbody = d3.select("tbody");
var button = d3.select("#filter-btn");
var inputFieldDate = d3.select("#datetime");
var inputFieldCity = d3.select("#city");
var columns = ["datetime", "city", "state", "country", "shape", "durationMinutes", "comments"]

// Inputing the data into the HTML
var addData = (dataInput) => {
    dataInput.forEach(ufoSightings => {
        var row = $tbody.append("tr");
        columns.forEach(column => row.append("td").text(ufoSightings[column])
        )
   });
}

addData(tableData)

// Event Handler Function
function runEvent(){
   // Prevent Page from Refreshing
   //d3.event.preventDefault();
   // Select the input element and get the raw HTML node

   var inputElement = d3.select("#datetime");

   // Get the input value (date) from the input element
   var inputData = inputElement.property("value");

   //Check for input data
       if (inputData == "") {inputData = tableData[0].datetime;}


   // Filter the data.js by the input value
   var filteredData = tableData.filter(sighting => sighting.datetime === inputData);

   // Call the createTable function with the
   // filteredData as the parameter

   createTable(filteredData);

};

runEvent();
