class TodoList {
	constructor() {
		this._todoMap = new Map();
	}

	add(todo) {
		this._todoMap.set(todo.id, todo);
	}

	get(id) {
		return this._todoMap.get(id);
	}

	remove(id) {
		this._todoMap.delete(id);
	}

	values() {
		return this._todoMap.values();
	}
}

export default TodoList;