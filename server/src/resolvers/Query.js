const supervillains = require('supervillains')

const Query = {
  allSupervillains(parent, args, ctx, info) {
    return supervillains.all.map((entry, index) => ({
      id: index,
      name: entry,
    }))
  },
}

module.exports = Query
