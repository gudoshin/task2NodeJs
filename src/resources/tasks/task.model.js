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

    /**
     * Returns task
     * @param {object} task Task object
     * @returns {object} returned Task object
     */
    static toResponse(task) {
        return task;
    }
}

module.exports = Task;