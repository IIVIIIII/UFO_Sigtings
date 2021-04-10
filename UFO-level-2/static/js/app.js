var tableData = data;
var tbody = d3.select("tbody");
var filterDate = d3.select("#datetime");
var filterCity = d3.select("#city");

var selDate = ""

data.forEach(function(sight) {
  var row = tbody.append("tr");
  Object.entries(sight).forEach(function([key, value]) {
    var cell = row.append("td");
    cell.text(value);
  });
});

filterDate.on("input", function() {

  tbody.selectAll("tr").remove();

  selDate = d3.event.target.value;
  var sights = data.filter(s => {
    if (selDate != "") {
      return s.datetime == selDate
    } else {
      return data
    }
  });
  
  sights.forEach(function(sight) {
    var row = tbody.append("tr");
    Object.entries(sight).forEach(function([key, value]) {
      var cell = row.append("td");
      cell.text(value);
      
    });
  });
});

