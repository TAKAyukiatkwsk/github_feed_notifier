var githubFeed = ({
  feedUrl: "",

  loadFeedUrl: function() {
    var self = this;
    chrome.storage.local.get("current_user_url", function(data) {
      self.feedUrl = data.current_user_url;
    });
  },

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
  },

  init: function() {
    this.urlChanged();
    return this;
  },
}).init();
githubFeed.loadFeedUrl();
