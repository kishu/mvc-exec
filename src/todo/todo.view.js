import EventEmitter from "wolfy87-eventemitter";
import template from "./todo.hbs";

class TodoView extends EventEmitter {
	constructor(targetId) {
		super();

		this._root = document.getElementById(targetId);
		this._root.addEventListener("click", e => {
			const target = e.target;

			if (target.matches(".todo-add")) {
				this.onClickTodoAdd(e);
			} else if (target.matches(".todo-edit")) {
				this.onClickTodoEdit(e);
			} else if (target.matches(".todo-edit-cancel")) {
				this.onClickTodoEditCancel(e);
			} else if (target.matches(".todo-update")) {
				this.onClickTodoUpdate(e);
			} else if (target.matches(".todo-toggle")) {
				this.onClickTodoToggle(e);
			} else if (target.matches(".todo-delete")) {
				this.onClickTodoDelete(e);
			}
		});
	}

	onClickTodoAdd(e) {
		e.preventDefault();
		const todoInput = this._root.querySelector(".todo-input");
		if (todoInput.value) {
			this.emitEvent("todoadd", [ todoInput.value ]);
		}
	}

	onClickTodoEdit(e) {
		e.preventDefault();
		const id = e.target.closest("li").dataset.id;
		this.emitEvent("todoedit", [ id ]);
	}

	onClickTodoEditCancel(e) {
		e.preventDefault();
		this.emitEvent("todoeditcancel");
	}

	onClickTodoUpdate(e) {
		e.preventDefault();
		const id = e.target.closest(".wrap").dataset.id;
		const todoInput = this._root.querySelector(".todo-input");

		if (todoInput.value) {
			this.emitEvent("todoupdate", [ id, todoInput.value ]);
		}
	}

	onClickTodoToggle(e) {
		e.preventDefault();
		const id = e.target.closest("li").dataset.id;
		this.emitEvent("todotoggle", [ id ]);
	}

	onClickTodoDelete(e) {
		e.preventDefault();
		const id = e.target.closest("li").dataset.id;
		this.emitEvent("tododelete", [ id ]);
	}

	render(context) {
		this._root.innerHTML = template(Object.assign({ title: this._title }, context));
	}
}

export default TodoView;
