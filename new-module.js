

exports.date = function() {
  console.log(new Date());
}

exports.tick = function() {
  setInterval(function() {
    console.log('tick');
}, 1000);
}
