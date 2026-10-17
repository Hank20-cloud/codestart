// All progress reads and writes go through this file.
// Phase 1 saves to localStorage on this browser. Phase 2 can replace this file with Supabase.
// Each item (lesson or exercise id) can have: status ("started" | "done"), attempts, hintsUsed,
// answerShown, code, updatedAt.
var Progress = (function () {
  var KEY = "codestart.progress.v1";
  var data = load();

  function load() {
    try {
      var raw = localStorage.getItem(KEY);
      var parsed = raw ? JSON.parse(raw) : null;
      if (parsed && typeof parsed === "object" && parsed.items && typeof parsed.items === "object") return parsed;
    } catch (e) {
      // Storage blocked or data broken: start fresh, the tool still works for this visit.
    }
    return { items: {} };
  }

  // Another tab of CodeStart saved: use its data, so this tab does not overwrite it later.
  window.addEventListener("storage", function (e) {
    if (e.key === KEY) data = load();
  });

  var storageOk = true; // false once a save failed; then this visit keeps progress in memory only

  function save() {
    try {
      localStorage.setItem(KEY, JSON.stringify(data));
      storageOk = true;
    } catch (e) {
      // Storage full or blocked: progress for this visit is kept in memory only.
      storageOk = false;
    }
  }

  function get(id) {
    return data.items[id] || {};
  }

  function update(id, fields) {
    // Another tab may have saved since this tab loaded, so start from what is stored now.
    // If saving failed before, the newest data is only in memory: keep it.
    if (storageOk) data = load();
    var item = data.items[id] || {};
    for (var k in fields) item[k] = fields[k];
    item.updatedAt = new Date().toISOString();
    data.items[id] = item;
    save();
  }

  function isDone(id) {
    return get(id).status === "done";
  }

  return {
    get: get,
    update: update,
    isDone: isDone,
    markDone: function (id) { update(id, { status: "done" }); },
    clearAll: function () { data = { items: {} }; save(); },
    countDone: function (ids) { return ids.filter(isDone).length; }
  };
})();
