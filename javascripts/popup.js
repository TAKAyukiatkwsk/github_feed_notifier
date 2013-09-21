({
  init: function() {
    $("#sign_in_github").submit(function(event) {
      event.preventDefault();
      console.log("submit sign in");
    });
  }
}).init();
