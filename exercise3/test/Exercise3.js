var moment = require('moment')

exports.formatDateWithMoment = function(isoDateStr) {
  return moment(isoDateStr).format('MMMM Do YYYY, h:mm:ss a')
}

exports.addNums = function(a, b) {
  return a + b
}
