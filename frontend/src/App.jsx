/** @format */
import { useState } from "react";
import "./App.css";
import Task from "./Task";

function App() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const obj = {
      title: title,
      desc: desc,
    };

    setTasks([...tasks, obj]); // Create a new array and update tasks
    setTitle(""); // Reset title input
    setDesc(""); // Reset description input
  };

  return (
    <>
      <div className="maincontainer">
        <div className="leftcontainer">
          <div className="formcontainer">
            <form className="w-75 container my-3">
              <div className="mb-3">
                <label htmlFor="title" className="form-label">
                  Title
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="title"
                  name="title"
                  value={title} // Bind input to state
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="description" className="form-label">
                  Description
                </label>
                <textarea
                  name="description"
                  id="description"
                  className="form-control"
                  value={desc} // Bind textarea to state
                  onChange={(e) => setDesc(e.target.value)}></textarea>
              </div>
              <button
                type="submit"
                className="btn btn-primary"
                onClick={handleSubmit}>
                Submit
              </button>
            </form>
          </div>

          <div className="taskcontainer my-3 mx-3">
            {tasks.length > 0
              ? tasks.map((elem, index) => (
                  <Task key={index} title={elem.title}></Task>
                ))
              : "No tasks yet!"}
          </div>
        </div>
        <div className="rightcontainer"></div>
      </div>
    </>
  );
}

export default App;
