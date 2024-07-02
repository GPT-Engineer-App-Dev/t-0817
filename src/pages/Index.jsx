import { useState } from "react";
import { Link } from "react-router-dom";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Index = () => {
  const [todos, setTodos] = useState([
    { id: 1, title: "Sample Todo 1", description: "Description 1", completed: false },
    { id: 2, title: "Sample Todo 2", description: "Description 2", completed: false },
  ]);

  const toggleComplete = (id) => {
    setTodos(todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold">Todo List</h1>
      {todos.map(todo => (
        <Card key={todo.id} className="flex items-center justify-between p-4">
          <div className="flex items-center space-x-4">
            <Checkbox checked={todo.completed} onCheckedChange={() => toggleComplete(todo.id)} />
            <div>
              <CardHeader>
                <CardTitle>{todo.title}</CardTitle>
              </CardHeader>
              <CardContent>{todo.description}</CardContent>
            </div>
          </div>
          <div className="flex space-x-2">
            <Link to={`/edit-todo/${todo.id}`}>
              <Button variant="outline">Edit</Button>
            </Link>
            <Button variant="destructive" onClick={() => deleteTodo(todo.id)}>Delete</Button>
          </div>
        </Card>
      ))}
      <Link to="/add-todo">
        <Button>Add Todo</Button>
      </Link>
    </div>
  );
};

export default Index;