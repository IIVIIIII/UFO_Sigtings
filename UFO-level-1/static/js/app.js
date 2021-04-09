var tableData = data;
var tbody = d3.select("tbody");
var filterDate = d3.select("#datetime");

filterDate.on("input", function() {

  var selDate = d3.event.target.value;
  var sights = data.filter(s => {return s.datetime == selDate});


  sights.forEach(function(sight) {
    var row = tbody.append("tr");
    Object.entries(sight).forEach(function([key, value]) {
      console.log(sight)
      var cell = row.append("td");
      cell.text(value);
    });
  });

});



// data.forEach(function(sight) {
//   var row = tbody.append("tr");
//   Object.entries(sight).forEach(function([key, value]) {
//     var cell = row.append("td");
//     cell.text(value);
//   });
// });



