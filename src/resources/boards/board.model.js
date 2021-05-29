const { v4: uuidv4 } = require('uuid');

class Bord {
  constructor({
    id = uuidv4(),
    title =	'title',
    columns = []
} = {}) {
    this.id = id;
    this.title = title;
    this.columns = columns;
  }

  static toResponse(bord) {
    return bord;
  }
}

module.exports = Bord;