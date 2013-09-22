({
  init: function() {
    $("#sign_in_github").submit(function(event) {
      event.preventDefault();
      console.log("submit sign in");
      $.ajax({
        type: "GET",
        url: "https://api.github.com/feeds",
        dataType: "json",
        beforeSend: function(xhr) {
          xhr.setRequestHeader("Authorization", "Basic " + btoa($("#username").val() + ":" + $("#password").val()));
        },
        success: function(data) {
          console.log("get feed list");
          console.log(data);
        },
        error: function(xhr, status, data) {
          console.log(data);
        }
      });
    });
  }
}).init();
