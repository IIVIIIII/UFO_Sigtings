var tableData = data;
var tbody = d3.select("tbody");
var filterDate = d3.select("#datetime");
var filterCity = d3.select("#city");
var filterState = d3.select("#state");
var filterCountry = d3.select("#country");
var filterShape = d3.select("#shape");

console.log(data)
var selDate = ""
var selCity = ""
var selState = ""
var selCountry = ""
var selShape = ""


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
  console.log(selDate)
  var sights = data.filter(s => {
      return (s.datetime == selDate) && (s.city == selCity) && (s.state == selState) && (s.country == selCountry) && (s.shape == selShape)
  });
  
  sights.forEach(function(sight) {
    var row = tbody.append("tr");
    Object.entries(sight).forEach(function([key, value]) {
      var cell = row.append("td");
      cell.text(value);
      
    });
  });
});





filterCity.on("input", function() {

  tbody.selectAll("tr").remove();

  selCity = d3.event.target.value;
  var sights = data.filter(s => {
    return (s.datetime == selDate) && (s.city == selCity) && (s.state == selState) && (s.country == selCountry) && (s.shape == selShape)
  });
  
  sights.forEach(function(sight) {
    var row = tbody.append("tr");
    Object.entries(sight).forEach(function([key, value]) {
      var cell = row.append("td");
      cell.text(value);
      
    });
  });
});





filterState.on("input", function() {

  tbody.selectAll("tr").remove();

  selState = d3.event.target.value;
  var sights = data.filter(s => {
    return (s.datetime == selDate) && (s.city == selCity) && (s.state == selState) && (s.country == selCountry) && (s.shape == selShape)
  });
  
  sights.forEach(function(sight) {
    var row = tbody.append("tr");
    Object.entries(sight).forEach(function([key, value]) {
      var cell = row.append("td");
      cell.text(value);
      
    });
  });
});





filterCountry.on("input", function() {

  tbody.selectAll("tr").remove();

  selCountry = d3.event.target.value;
  var sights = data.filter(s => {
    return (s.datetime == selDate) && (s.city == selCity) && (s.state == selState) && (s.country == selCountry) && (s.shape == selShape)
  });
  
  sights.forEach(function(sight) {
    var row = tbody.append("tr");
    Object.entries(sight).forEach(function([key, value]) {
      var cell = row.append("td");
      cell.text(value);
      
    });
  });
});





filterShape.on("input", function() {

  tbody.selectAll("tr").remove();

  selShape = d3.event.target.value;
  var sights = data.filter(s => {
    return (s.datetime == selDate) && (s.city == selCity) && (s.state == selState) && (s.country == selCountry) && (s.shape == selShape)
  });
  
  sights.forEach(function(sight) {
    var row = tbody.append("tr");
    Object.entries(sight).forEach(function([key, value]) {
      var cell = row.append("td");
      cell.text(value);
      
    });
  });
});