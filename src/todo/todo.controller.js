import Todo from "../shared/todo.js";
import TodoList from "../shared/todo-list";
import TodoService from "../shared/todo.service";
import TodoView from "./todo.view";

class TodoController {
	constructor(options) {
		const { targetId, title } = options;

		this._title = title;
		this._todoEdit = undefined;
		this._todoList = new TodoList();
		this._todoView = new TodoView(targetId);

		this.initView();
		this._todoView.addListener("todoadd", this.onTodoAdd.bind(this));
		this._todoView.addListener("todoedit", this.onTodoEdit.bind(this));
		this._todoView.addListener("todoeditcancel", this.onTodoEditCancel.bind(this));
		this._todoView.addListener("todoupdate", this.onTodoUpdate.bind(this));
		this._todoView.addListener("todotoggle", this.onTodoToggle.bind(this));
		this._todoView.addListener("tododelete", this.onTodoDelete.bind(this));
	}

	onTodoAdd(text) {
		this._todoList.add(new Todo({ text }));
		this.updateView();
	}

	onTodoToggle(id) {
		const todo = this._todoList.get(id);
		todo.toggleDone();

		this.updateView();
	}

	onTodoEdit(id) {
		this._todoEdit = this._todoList.get(id);
		this.updateView();
	}

	onTodoEditCancel() {
		this._todoEdit = undefined;
		this.updateView();
	}

	onTodoUpdate(id, text) {
		const todo = this._todoList.get(id);
		todo.text = text;

		this._todoEdit = undefined;
		this.updateView();
	}

	onTodoDelete(id) {
		this._todoList.remove(id);
		this.updateView();
	}

	initView() {
		TodoService.getTodos().forEach(v => this._todoList.add(new Todo(v)));
		this.updateView();
	}

	updateView() {
		this._todoView.render({
			title: this._title,
			todoEdit: this._todoEdit,
			todoList: [...this._todoList.values()]
		});
	}
}

export default TodoController;