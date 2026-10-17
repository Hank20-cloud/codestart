// Optional AI tutor. It works only when the site is opened from CodeStart.Tutor on the owner's computer
// (http://localhost). When the site is opened from a folder (file://), the tutor stays off and nothing is sent.
var Tutor = (function () {
  var available = false;

  function init(onReady) {
    if (!/^https?:$/.test(location.protocol)) return;
    fetch("api/health")
      .then(function (r) { return r.ok ? r.json() : null; })
      .then(function (data) {
        if (data && data.tutor === true) {
          available = true;
          onReady();
        }
      })
      .catch(function () { /* No tutor server: keep the button hidden. */ });
  }

  // Resolves with the tutor's reply text, or rejects with an Error whose message can be shown to the student.
  function ask(payload) {
    return fetch("api/tutor", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    }).then(function (r) {
      return r.json().catch(function () { return {}; }).then(function (data) {
        if (!r.ok || typeof data.reply !== "string") {
          throw new Error(data.error || "The AI tutor is not available right now. Try the hints instead.");
        }
        return data.reply;
      });
    }, function () {
      throw new Error("Could not reach the AI tutor. Is CodeStart.Tutor still running?");
    });
  }

  return { init: init, ask: ask, isAvailable: function () { return available; } };
})();
