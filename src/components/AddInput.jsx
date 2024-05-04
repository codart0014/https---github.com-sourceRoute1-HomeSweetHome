import { forwardRef } from "react";
const AddInput = forwardRef(function AddInput({ ...props }, ref) {
  return (
    <>
      <div className="list-container">
        <input
          type="text"
          ref={ref}
          className="add-list"
          placeholder="Write your task name here"
        />
      </div>
    </>
  );
});
export default AddInput;
