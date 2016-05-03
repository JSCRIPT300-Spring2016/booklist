var lastId;

function setIds(data) {
  var ids = [];

  if (Array.isArray(data)) {
    ids = data.map(function (item) {
      return parseInt(item._id, 10);
    });
  }
  ids.sort();
  if (ids.length) {
    lastId = ids[ids.length - 1];
    if (isNaN(lastId)) {
      lastId = 0;
    }
  } else {
    lastId = -1;
  }
}

function getId() {
  if (lastId === undefined) {
    setIds();
  }
  lastId += 1;
  return lastId;
}

module.exports = {
  setIds: setIds,
  getId: getId
};