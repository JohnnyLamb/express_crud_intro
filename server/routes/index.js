var express = require('express');
var router = express.Router();
var dogArray = [{
  name: "jerry lee",
  age: 2
}, {
  name: 'carmel',
  age: 3
}, {
  name: "ruby",
  age: 4
}];

router.get('/', function(req, res, next) {
  res.render('index');
});
router.post('/puppies', function(req, res, next) {
  console.log(req.body);
  dogArray.push({

    name: req.body.name,
    age: req.body.age

  });
  res.json(dogArray);
});
router.get('/puppies', function(req, res, next) {
  res.json(dogArray);
});
router.get('/puppies/:id', function(req, res, next) {
  console.log(req.params);
  // console.log(req.body);
  res.json(dogArray[req.params.id - 1]);
});
router.post('/puppies', function(req, res, next) {
  console.log(req.body);
  dogArray.push({
    name: req.body.name,
    age: req.body.age
  });
  res.json({
    dogArray: dogArray
  });

});
router.put('/puppies/:id', function(req, res, next) {
  dogArray[req.params.id - 1].name = req.body.name;
  dogArray[req.params.id - 1].age = req.body.age;
  console.log(dogArray);
  res.json(dogArray[req.params.id - 1]);
});
router.delete('/puppies/:id', function(req, res, next) {
  dogArray.splice([req.params.id - 1],1);
  console.log(dogArray);
  res.json(dogArray);
});

module.exports = router;
