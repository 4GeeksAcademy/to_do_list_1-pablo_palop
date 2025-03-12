import React from "react";
import TodoList from "./TodoList";

//create your first component
const Home = () => {
	return (
		<div className="container d-flex justify-content-center">
			<TodoList />
		</div>
	);
};

export default Home;