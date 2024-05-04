import React from "react";
import noTaskImage from "../assets/images/no-task.png";

export default function NoTask({ addField }) {
  return (
    <div>
      <div
        className=""
        style={{
          marginLeft: "50%",
          transform: "translateX(-50%)",
          marginTop: "10%",
          textAlign: "center",
        }}
      >
        <div style={{ marginLeft: "40%", transform: "translateX(-40%)" }}>
          <img
            src={noTaskImage}
            alt="an empty task list"
            style={{ width: "35%" }}
          />
        </div>

        <h2 className="">You have no upcoming task</h2>
        <br></br>

        <div className="">
          <button
            type="button"
            onClick={addField}
            className="save grow-on-hover link"
          >
            Add Task
          </button>
        </div>
      </div>
    </div>
  );
}
