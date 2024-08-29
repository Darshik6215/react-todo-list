import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [mainTask, setMainTask] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    setMainTask([...mainTask, { title, desc }]);
    setTitle("");
    setDesc("");
    console.log(mainTask);
  };

  const deleteHandler = (i) => {
    let copyTask = [...mainTask];
    copyTask.splice(i, 1);
    setMainTask(copyTask);
  };

  let renderTask = <h2>No Task Available</h2>;

  if (mainTask.length > 0) {
    renderTask = mainTask.map((t, i) => {
      return (
        <>
          <li key={i}>
            <div className="flex justify-between items-center m-auto mb-5 w-2/3">
              <h5 className="text-3xl font-semibold">{t.title}</h5>
              <h6 className="text-xg font-medium">{t.desc}</h6>
              <button
                className="bg-red-400 text-white px-4 py-2 font-bold rounded"
                onClick={() => deleteHandler(i)}
              >
                Delete
              </button>
            </div>
          </li>
        </>
      );
    });
  }

  return (
    <>
      <h1 className="bg-black text-white p-5 text-5xl font-bold text-center">
        Todo List
      </h1>
      <form
        className="flex justify-center items-center"
        onSubmit={submitHandler}
      >
        <input
          type="text"
          className="text-2xl border-zinc-800 border-4 m-5 px-4 py-2"
          placeholder="Enter Title Here..."
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <input
          type="text"
          className="text-2xl border-zinc-800 border-4 m-5 px-4 py-2"
          placeholder="Enter Description Here..."
          value={desc}
          onChange={(e) => {
            setDesc(e.target.value);
          }}
        />
        <button className="bg-black text-white px-4 py-3 text-2xl font-bold rounded m-5">
          Add Task
        </button>
      </form>

      <hr />

      <div className="p-8 bg-slate-200 ">
        <ul className="text-center text-2xl">{renderTask}</ul>
      </div>
    </>
  );
};

export default App;
