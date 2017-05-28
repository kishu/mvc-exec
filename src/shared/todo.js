import shortid from "shortid";

class Todo {
	constructor({id, text, done}) {
		this._id = id || shortid.generate();
		this._text = text || "";
		this._done = done || false;
	}

	get id() {
		return this._id;
	}

	get text() {
		return this._text;
	}

	set text(text) {
		this._text = text;
	}

	get done() {
		return this._done;
	}

	set done(done) {
		this._done = done;
	}

	toggleDone() {
		this.done = !this.done;
	}
}

export default Todo;