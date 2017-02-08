module.exports = function gro(name) {
  return {
    group: function group(part) {
      return console.group(name + "." + part), function () {
        return console.groupEnd(name + "." + part);
      };
    },
    time: function time(part, full) {
      return console.time(name + "." + part), function () {
        return console.timeEnd(name + "." + part);
      };
    },
    log: function log() {
      var _console;

      for (var _len = arguments.length, parts = Array(_len), _key = 0; _key < _len; _key++) {
        parts[_key] = arguments[_key];
      }

      return (_console = console).log.apply(_console, [name].concat(parts));
    }
  };
};

module.exports.group = function group(name) {
  return console.group(name), function () {
    return console.groupEnd(name)
  }
}

module.exports.time = function time(name) {
  return console.time(name), function () {
    return console.timeEnd(name)
  }
}