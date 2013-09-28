({
  init: function() {
    debugger;
    this.urlChanged();
  },

  feedUrl: "",

  urlChanged: function() {
    chrome.storage.onChanged.addListener(function(changes, namespace) {
      for (var key in changes) {
        if (key === "current_user_url") {
          alert("!!!");
          console.log(changes[key].newValue);
          this.feedUrl = chages[key].newValue;
        }
      }
    });
  },

  getUserFeed: function() {
    $.ajax({
      type: "GET",
      url: this.feedUrl,
      dataType: "application/atom+xml",
      success: function (data) {
      },
      error: function (xhr, status, data) {
      },
    });
  }
}).init();
