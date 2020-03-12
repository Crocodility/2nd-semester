var city1 = {
    name: "Gorod1",
    population: 10000000,
    exportStr : function() {
      for (let key in city1) {  
            console.log (key + " = " + this[key])
        }
    },
}

var city2 = {
  name: "Gorod2",
  population: 10**6,
  getname: function()   {alert(this.name)},
  exportStr: function() {alert('name = ' + this.name);
  alert ('population = ' + this.population)}
}


city1.exportStr();
city2.getname();
city2.exportStr();