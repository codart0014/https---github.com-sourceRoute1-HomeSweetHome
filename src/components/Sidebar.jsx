import { NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <aside className="bg-body pd-4 contain">
      <ul className="list-group font-weight-normal side-bar">
        <NavLink to="/" style={{ textDecoration: "none", color: "#212529" }}>
          <li className="flex">
            <span className="nav-side"></span>
            <div className="nav-writeUp">Activity</div>
          </li>
        </NavLink>
        <NavLink
          to="pages/ToDo"
          style={{ textDecoration: "none", color: "#212529" }}
        >
          <li className="flex">
            <span className="nav-side"></span>
            <div className="nav-writeUp">To-Do</div>
          </li>
        </NavLink>
        <NavLink
          to="pages/Contact"
          style={{ textDecoration: "none", color: "#212529" }}
        >
          <li className="flex">
            <span className="nav-side"></span>
            <div className="nav-writeUp">Contact</div>
          </li>
        </NavLink>

        <NavLink
          to="pages/Finance"
          style={{ textDecoration: "none", color: "#212529" }}
        >
          <li className="flex">
            <span className="nav-side"></span>
            <div className="nav-writeUp">Finance</div>
          </li>
        </NavLink>
      </ul>
      <ul className="list-group side-bar side-bar-footer">
        <span className="divider"></span>
        <li>
          <div>Setting</div>
        </li>
        <li>
          <div>Logout</div>
        </li>
      </ul>
    </aside>
  );
}
