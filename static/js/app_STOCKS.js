// import the data from data.js
const tableData = data;

// Reference the HTML table using d3
//This tells JavaScript to look for TBODY tags in the HTML!!!
var tbody = d3.select("tbody");
 


function buildTable(data) {
    // First, clear out any existing data
    tbody.html("");
  
    // Next, loop through each object in the data
    // and append a row and cells for each value in the row
    data.forEach((dataRow) => {
      // Append a row to the table body
      let row = tbody.append("tr");
  
      // Loop through each field in the dataRow and add
      // each value as a table cell (td)
      Object.values(dataRow).forEach((val) => {
        let cell = row.append("td");
        cell.text(val);
        }
      );
    });
  }   
//HandClick Function-------------------------------------------------------------------------
function handleClick() {
    // Grab the datetime value from the filter
    let date = d3.select("#datetime").property("value");
    let symbol = d3.select("#symbol").property("value");
    let portfolio = d3.select("#portfolio").property("value");
    let quantity = d3.select("#quantity").property("value");
    let divi = d3.select("#div").property("value");
    let divfreq = d3.select("#divfreq").property("value");    

    let filteredData = tableData;
  
    // Check to see if a date was entered and filter the
    // data using that date.
    if (date) {
      // Apply `filter` to the table data to only keep the
      // rows where the `datetime` value matches the filter value
      filteredData = filteredData.filter(row => row.datetime === date);
    };
    // Grab the SYMBOL value from the filter
    // Check to see if a SYMBOL was entered and filter the
    // data using that SYMBOL.
    if (symbol) {
      // Apply `filter` to the table data to only keep the
      // rows where the `SYMBOL` value matches the filter value
      filteredData = filteredData.filter(row => row.symbol === symbol);
    };
    // Grab the QUANTITY value from the filter
 
    // Check to see if a QUANTITY was entered and filter the
    // data using that QUANTITY.
    if (quantity) {
      // Apply `filter` to the table data to only keep the
      // rows where the `QUANTITY` value matches the filter value
      filteredData = filteredData.filter(row => row.quantity === quantity);
    };
    // Check to see if a Portfolio was entered and filter the
    // data using that PORTFOLIO.
    if (portfolio) {
        // Apply `filter` to the table data to only keep the
        // rows where the `PORTFOLIO` value matches the filter value
        filteredData = filteredData.filter(row => row.portfolio === portfolio);
    };
    // Check to see if a DIVIDEND was entered and filter the
    // data using that DIVIDEND.
    if (divi) {
        // Apply `filter` to the table data to only keep the
        // rows where the `QUANTITY` value matches the filter value
        filteredData = filteredData.filter(row => row.div === divi);
    };
    if (divfreq) {
        // Apply `filter` to the table data to only keep the
        // rows where the `QUANTITY` value matches the filter value
        filteredData = filteredData.filter(row => row.divfreq === divfreq);
    };


      // Grab the datetime value from the filter
 
    // Rebuild the table using the filtered data
    // @NOTE: If no date was entered, then filteredData will
    // just be the original tableData.
    buildTable(filteredData);
  };

// Attach an event to listen for the form button
d3.selectAll("#filter-btn").on("click", handleClick);

// Build the table when the page loads
buildTable(tableData);
 