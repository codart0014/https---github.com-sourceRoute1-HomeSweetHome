import icon from "../assets/images/Icon.png";
import pic from "../assets/images/26.png";
import logo from "../assets/images/logo.png";

export default function Header() {
  const myStyle = {
    height: "auto",
    backgroundColor: "#f5f6fa",
    color: "red",
    padding: "0.3em 0",
    paddingLeft: "0.5em",
    // border: "2px solid black",
    borderRadius: "2em",
  };

  return (
    <header className="bg-body">
      <div>
        <div className="header-container">
          <div className="logo">
            <img src={logo} alt="" />
          </div>
          <div className="col-md-4 search-container">
            <div className="form">
              <i className="fa fa-search"></i>
              <input
                type="text"
                className="form-control form-input"
                placeholder="Search"
                style={myStyle}
              />
            </div>
          </div>
          <div className="d-flex col-md-3 header-menu align-items-center justify-content-center">
            <div style={{ marginRight: "2.5em" }}>
              <img src={icon} alt="" />
            </div>
            <div style={{ marginRight: "1em" }}>
              <img src={pic} alt="" />
            </div>

            <div>
              <span style={{ fontSize: "0.9rem", fontWeight: "500" }}>
                Amara Roy
              </span>
              <br></br>
              <span style={{ fontSize: "0.8rem" }}>Admin</span>
            </div>
            <div style={{ marginLeft: "0.6rem" }}>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 19.1C15.0258 19.1 19.1 15.0258 19.1 10C19.1 4.97421 15.0258 0.9 10 0.9C4.97421 0.9 0.9 4.97421 0.9 10C0.9 15.0258 4.97421 19.1 10 19.1Z"
                  stroke="#5C5C5C"
                  strokeWidth="0.2"
                />
                <path
                  d="M10 10.7929L7.73162 8.14645C7.56425 7.95118 7.29289 7.95118 7.12553 8.14645C6.95816 8.34171 6.95816 8.65829 7.12553 8.85355L9.69695 11.8536C9.86432 12.0488 10.1357 12.0488 10.303 11.8536L12.8745 8.85355C13.0418 8.65829 13.0418 8.34171 12.8745 8.14645C12.7071 7.95118 12.4358 7.95118 12.2684 8.14645L10 10.7929Z"
                  fill="#565656"
                />
                <mask
                  id="mask0_5749_220"
                  maskUnits="userSpaceOnUse"
                  x="7"
                  y="8"
                  width="6"
                  height="4"
                >
                  <path
                    d="M10 10.7929L7.73162 8.14645C7.56425 7.95118 7.29289 7.95118 7.12553 8.14645C6.95816 8.34171 6.95816 8.65829 7.12553 8.85355L9.69695 11.8536C9.86432 12.0488 10.1357 12.0488 10.303 11.8536L12.8745 8.85355C13.0418 8.65829 13.0418 8.34171 12.8745 8.14645C12.7071 7.95118 12.4358 7.95118 12.2684 8.14645L10 10.7929Z"
                    fill="white"
                  />
                </mask>
                <g mask="url(#mask0_5749_220)"></g>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
