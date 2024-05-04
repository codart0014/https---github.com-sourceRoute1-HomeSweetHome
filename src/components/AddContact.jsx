import img from "../assets/images/Mask.png";
export default function AddContact(toggleAddContact) {
  return (
    <div className="profile-form-container">
      <form className="form">
        <div className="profile-pic">
          <label class="img-label" for="file">
            <span class="glyphicon glyphicon-camera"></span>
          </label>
          <input id="file" type="file" onchange="loadFile(event)" />
          <img src={img} id="output" />
        </div>
        <div className="input-container">
          <div className="input-container-flex">
            <label>First Name </label>
            <input
              type="text"
              className=""
              placeholder="Enter your first name"
            />
          </div>
          <div className="input-container-flex">
            <label>Last Name </label>
            <input type="text" placeholder="Enter your last name" />
          </div>
        </div>
        <div className="input-container">
          <div className="input-container-flex">
            <label>Your Email </label>
            <input type="text" placeholder="Enter your first name" />
          </div>
          <div className="input-container-flex">
            <label>Phone Number </label>
            <input type="text" placeholder="Enter your last name" />
          </div>
        </div>
        <div className="input-container">
          <div className="input-container-flex">
            <label>Date of Birth </label>
            <input type="text" placeholder="Enter your first name" />
          </div>
          <div className="input-container-flex">
            <label>Gender</label>
            <select />
          </div>
        </div>
        <div className="" style={{ marginTop: "2em" }}>
          <button onClick={toggleAddContact}>Add Now</button>
        </div>
      </form>
    </div>
  );
}
