import React from "react";

const Items = ({ user, i }) => {
  const { text, date, _id } = user;
  const makeDeleted = () => {
    const yes = window.confirm("are you sure delete");
    if (yes) {
      fetch(`https://aqueous-ocean-94634.herokuapp.com/todo/${_id}`, {
        method: "DELETE",
      })
        .then(response => response.json())
        .then(data => {
            window.location.reload()
          console.log("del", data);
        });
    }
  };
/* ====================== */
 const makeUpdate = () => {
    const newText = window.prompt("");
    // if (yes) {
        console.log(newText);
        console.log(text);
      fetch(`https://aqueous-ocean-94634.herokuapp.com/todo/${_id}`, {
        method: "PUT",
        headers: {'content-type': 'application/json'},
        body: JSON.stringify({text, newText}),
      })
        .then(response => response.json())
        .then(data => {
            window.location.reload()
          console.log("del", data);
        });
    // }
 }
  return (
    <tr>
      <th>{i + 1}</th>
      <td className="text-primary font-bold">{text}</td>
      <td>{date}</td>
      <td> <button onClick={(makeUpdate)} className="btn btn-xs btn-success">
          Update
        </button></td>
      <td>
        <button onClick={makeDeleted} className="btn btn-xs btn-error">
          Delete
        </button>
      </td>
    </tr>
  );
};

export default Items;
