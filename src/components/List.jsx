import React from "react";

export default function List({ list, onDelete }) {
  const listcheckbox = {
    border: "none",
  };
  return (
    <div className="to-do-list">
      <ul className="">
        {list.map((item) => (
          <li key={item.id}>
            <div className="d-flex form-group">
              <input
                type="checkbox"
                id={`task-${item.id}`}
                name={`task-${item.id}`}
                style={{ border: "none" }}
              />
              <label htmlFor={`task-${item.id}`} className="list-label"></label>
              <p>{item.title}</p>
            </div>
            <div className="d-flex gap-3">
              <button style={{ border: "none", background: "none" }}>
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M14.8401 1.51507L18.7064 9.175L26.148 9.91222C26.5097 9.94228 26.8209 10.18 26.945 10.5211C27.0692 10.8622 26.9835 11.2444 26.7257 11.4999L20.6015 17.5698L22.8721 25.8179C22.967 26.1753 22.8434 26.5551 22.5564 26.7882C22.2694 27.0213 21.8724 27.0644 21.5421 26.8983L13.9977 23.1625L6.4637 26.8937C6.13337 27.0598 5.73633 27.0167 5.44934 26.7836C5.16236 26.5504 5.03881 26.1707 5.1337 25.8133L7.4043 17.5652L1.27543 11.4953C1.01761 11.2398 0.931977 10.8576 1.05611 10.5165C1.18023 10.1754 1.49144 9.93766 1.85319 9.90759L9.29472 9.17037L13.1553 1.51507C13.3172 1.1989 13.6425 1 13.9977 1C14.3529 1 14.6782 1.1989 14.8401 1.51507Z"
                    stroke="#B3B3B3"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <button
                onClick={() => onDelete(item.id)}
                style={{ border: "none", background: "none" }}
              >
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M16 31C24.2843 31 31 24.2843 31 16C31 7.71573 24.2843 1 16 1C7.71573 1 1 7.71573 1 16C1 24.2843 7.71573 31 16 31Z"
                    fill="#FCFCFC"
                    stroke="#888888"
                    strokeWidth="0.4"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M15.9993 15.175L19.0869 12.0875C19.3147 11.8597 19.684 11.8597 19.9118 12.0875C20.1396 12.3153 20.1396 12.6846 19.9118 12.9124L16.8243 16L19.9118 19.0875C20.1396 19.3153 20.1396 19.6846 19.9118 19.9124C19.684 20.1402 19.3147 20.1402 19.0869 19.9124L15.9993 16.8249L12.9118 19.9124C12.684 20.1402 12.3147 20.1402 12.0869 19.9124C11.8591 19.6846 11.8591 19.3153 12.0869 19.0875L15.1744 16L12.0869 12.9124C11.8591 12.6846 11.8591 12.3153 12.0869 12.0875C12.3147 11.8597 12.684 11.8597 12.9118 12.0875L15.9993 15.175Z"
                    fill="#888888"
                  />
                  <mask
                    id="mask0_1272_1802"
                    maskUnits="userSpaceOnUse"
                    x="11"
                    y="11"
                    width="10"
                    height="10"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M15.9993 15.175L19.0869 12.0875C19.3147 11.8597 19.684 11.8597 19.9118 12.0875C20.1396 12.3153 20.1396 12.6846 19.9118 12.9124L16.8243 16L19.9118 19.0875C20.1396 19.3153 20.1396 19.6846 19.9118 19.9124C19.684 20.1402 19.3147 20.1402 19.0869 19.9124L15.9993 16.8249L12.9118 19.9124C12.684 20.1402 12.3147 20.1402 12.0869 19.9124C11.8591 19.6846 11.8591 19.3153 12.0869 19.0875L15.1744 16L12.0869 12.9124C11.8591 12.6846 11.8591 12.3153 12.0869 12.0875C12.3147 11.8597 12.684 11.8597 12.9118 12.0875L15.9993 15.175Z"
                      fill="white"
                    />
                  </mask>
                  <g mask="url(#mask0_1272_1802)"></g>
                </svg>
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
