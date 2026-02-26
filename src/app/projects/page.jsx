import React from "react";

const Projects = () => {
  return (
    <div>
      <div className="title ">
        <h1 className="font-bold text-3xl">Projects</h1>
        <br />
        <p className="text-gray-400 ">Manage And Track Your Projects</p>
      </div>
      <div className="ProjectSearchbar pt-2">
        <form action="">
          <input
            className=" m-2 w-100 pl-10 text-sm pr-4 py-2 rounded-lg border border-gray-300 dark:border-zinc-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-zinc-400 focus:border-blue-500 outline-none"
            type="text"
            title="Search Projects"
            placeholder="Search Projects..."
          />
          <label htmlFor="">
            <select
              className=" m-5 px-3 py-2 rounded-lg border border-gray-300 dark:border-zinc-700 text-gray-900 dark:text-white text-sm"
              name="Status"
              id="Status"
            >
              <option value="All Status">All Status</option>
              <option value="Pending">Pending</option>
              <option value="Completed">Completed</option>
              <option value="Overdue">Overdue</option>
              <option value="Expired">Expired</option>
            </select>
            <select
              className="px-3 py-2 rounded-lg border border-gray-300 dark:border-zinc-700 text-gray-900 dark:text-white text-sm"
              name="Priority"
              id="Priority"
            >
              <option value="All Priority">All Priority</option>
              <option value="Immediate">Imediate</option>
              <option value="High">High</option>
              <option value="Medium">Medium</option>
              <option value="Low">Low</option>
            </select>
          </label>
        </form>
      </div>
    </div>
  );
};

export default Projects;
