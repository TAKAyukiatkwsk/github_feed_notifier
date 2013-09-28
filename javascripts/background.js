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
}).init();
