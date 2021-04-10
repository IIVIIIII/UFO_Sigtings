var tableData = data;
var tbody = d3.select("tbody");
var filterDate = d3.select("#datetime");

data.forEach(function(sight) {
  var row = tbody.append("tr");
  Object.entries(sight).forEach(function([key, value]) {
    var cell = row.append("td");
    cell.text(value);
  });
});

filterDate.on("input", function() {

  tbody.selectAll("tr").remove();

  var selDate = d3.event.target.value;
  var sights = data.filter(s => {return s.datetime == selDate});

  sights.forEach(function(sight) {
    var row = tbody.append("tr");
    rows ++
    Object.entries(sight).forEach(function([key, value]) {
      var cell = row.append("td");
      cell.text(value);
      
    });
  });
});

