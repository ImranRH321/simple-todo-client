import React from "react";

const Client = () => {
  const handleFormData = e => {
    e.preventDefault();
    const inputFlied = e.target.input.value;
    const day = new Date().toLocaleDateString();
    const user = {
      text: inputFlied,
      date: day,
    };
    if (!inputFlied) {
      alert('Empty flied not allowed')
      return;
    } else {
      // send the server
      fetch("https://aqueous-ocean-94634.herokuapp.com/todo", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(user),
      })
        .then(res => res.json())
        .then(data => {
          console.log(data);
          window.location.reload();
        });
    }
  };

  return (
    <div className="w-screen bg-blue-500 h-screen grid grid-cols-1 gap-4 content-center ">
      <div>
        <form onSubmit={handleFormData}>
          <input
            name="input"
            type="text"
            placeholder="Type here"
            class="input input-bordered w-full max-w-xs"
          />
          <button className="btn btn-primary">Add</button>
        </form>
      </div>
    </div>
  );
};

export default Client;
