({
  init: function() {
    debugger;
    this.urlChanged();
  },

  urlChanged: function() {
    chrome.storage.onChanged.addListener(function(changes, namespace) {
      for (var key in changes) {
        if (key === "current_user_url") {
          alert("!!!");
          console.log(changes[key].newValue);
        }
      }
    });
  }
}).init();
