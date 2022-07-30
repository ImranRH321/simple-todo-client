import React, { useEffect, useState } from "react";
import Items from "./Items";
const DayList = () => {
  const [users, setUsers] = useState([]);
  // get data
  useEffect(() => {
    fetch("https://aqueous-ocean-94634.herokuapp.com/todo")
      .then(res => res.json())
      .then(data => {
        console.log("get", data);
        setUsers(data);
      });
  }, []);

  //  delete
  const handleDeleted = id => {
    fetch(`https://aqueous-ocean-94634.herokuapp.com/todo/${id}`, {
      method: "DELETE",
    })
      .then(res => res.json())
      .then(data => {
        console.log("del", data);
        setUsers(data);
      });
  };

  return (
    <div className=" ">
      <h1 className="text-3xl font-bold text-primary py-3">
        Daily Time Manage{" "}
      </h1>

      <div class="overflow-x-auto">
        <table class="table w-full">
          <thead>
            <tr>
              <th>Serial</th>
              <th>Work</th>
              <th>Date</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {users?.map((user, i) => (
              <Items user={user} key={user._id} i={i}></Items>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DayList;
