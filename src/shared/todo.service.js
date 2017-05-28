import shortid from "shortid";

class TodoService {
	static getTodos() {
		return [
			{
				id: shortid.generate(),
				text: "todo 1",
				done: true
			},
			{
				id: shortid.generate(),
				text: "todo 2",
				done: true
			},
			{
				id: shortid.generate(),
				text: "todo 3",
				done: false
			},
			{
				id: shortid.generate(),
				text: "todo 4",
				done: true
			},
			{
				id: shortid.generate(),
				text: "todo 5",
				done: false
			}
		]
	}
}

export default TodoService;