// Import the ORM to create functions that interact with the DB.
var orm = require("../config/orm.js");

var burger = {
  all: function(cb) {
    orm.all("burgers", function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  create: function(cols, vals, cb) {
    orm.create("burgers", cols, vals, function(res) {
      cb(res);
    });
  },
  update: function(objColVals, condition, cb) {
    orm.update("burgers", objColVals, condition, function(res) {
      cb(res);
    });
  }
};

// Test 
// burger.create(["name","devoured"],["Hippie Veggie Burger",true],function(res){
//   console.log("responds",res)
// });

// Export the database functions for the controller (burgers_controllers.js).
module.exports = burger;