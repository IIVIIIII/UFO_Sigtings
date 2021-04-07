var tableData = data;
var tbody = d3.select("tbody");

data.forEach(function(sight) {
  console.log(sight);
  var row = tbody.append("tr");
  Object.entries(sight).forEach(function([key, value]) {
    console.log(key, value);
    var cell = row.append("td");
    cell.text(value);
  });
});