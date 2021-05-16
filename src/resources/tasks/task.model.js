const { v4: uuidv4 } = require('uuid');

class Task {
    constructor({
        id = uuidv4(),
        title =	'title',
        order =	'order',
        description = 'description',
        userId = 'userId',
        boardId = 'boardId',
        columnId = 'columnId'
    } = {}) {
        this.id = id;
        this.title = title;
        this.order = order;
        this.description = description;
        this.userId = userId;
        this.boardId = boardId;
        this.columnId = columnId;
    }

    static toResponce(task) {
        return task;
    }
}

module.exports = Task;