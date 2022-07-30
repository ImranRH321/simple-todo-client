import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    // <div class="navbar bg-base-100 :md-flex md:justify-around ">
    <div class="navbar text-white grid grid-cols-1 md:grid-cols-3 bg-purple-500 ">
      <div class="">
        <Link to="/" class="btn btn-ghost normal-case text-xl">Imran RX</Link>
      </div>
      <div class="form-control">
        <ul className="flex justify-around gap-10">
          <li>
            <Link to="/todo" class="justify-between font-bold text-lg">
              AddTodo
            </Link>
          </li>
          <li>
            <Link to="/dayList" class="text-success justify-between font-bold text-lg">
              DayList
            </Link>
          </li>
        </ul>
      </div>
      <div class="dropdown dropdown-end">
        <label tabindex="0" class="btn btn-ghost btn-circle avatar">
          <div class="w-10 rounded-full">
            <img src="https://i.ibb.co/fF9F6W3/IMG20220307143610.jpg " />
          </div>
        </label>
        <ul
          tabindex="0"
          class="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
        >
          <li>
            <a class="justify-between">
              Profile
              <span class="badge">New</span>
            </a>
          </li>
          <li>
            <a>Settings</a>
          </li>
          <li>
            <a>Logout</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
