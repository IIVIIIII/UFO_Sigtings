var tableData = data;
var tbody = d3.select("tbody");
var filterDate = d3.select("#datetime");
var filterDate = d3.select("#city");

var selDate = ""
var selCity = ""







filterDate.on("input", function() {
  selDate = d3.event.target.value;
  console.log(selDate);

  var sights = data.filter(s => {return s.datetime == selDate;});

  console.log(sights)

  sights.forEach(function(sight) {
    var row = tbody.append("tr");
    Object.entries(sight).forEach(function([key, value]) {
      var cell = row.append("td");
      cell.text(value);
    });
  });
});





data.forEach(function(sight) {
  var row = tbody.append("tr");
  Object.entries(sight).forEach(function([key, value]) {
    var cell = row.append("td");
    cell.text(value);
  });
});



