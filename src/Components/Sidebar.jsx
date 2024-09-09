import { Link } from "react-router-dom";

function Sidebar({ selectedTab, setSelectedTab }) {

  const handleOnClick = (tabName) => {
    setSelectedTab(tabName);
  }

  return (
    <div
      className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark sidebar"
      style={{ userSelect: "auto", width: "280px", position : "sticky"}}
    >
      <a
        className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
        href="/"
        style={{ userSelect: "auto" }}
      >
        <svg
          className="bi pe-none me-2"
          height="32"
          style={{ userSelect: "auto" }}
          width="40"
        >
          <use style={{ userSelect: "auto" }} xlinkHref="#bootstrap" />
        </svg>
        <span className="fs-4" style={{ userSelect: "auto" }}>
          Sidebar
        </span>
      </a>

      <hr style={{ userSelect: "auto" }} />
      <ul
        className="nav nav-pills flex-column mb-auto"
        style={{ userSelect: "auto" }}
      >
        <li className="nav-item" style={{ userSelect: "auto" }} onClick = {() => handleOnClick("HOME")}>
          <Link
            aria-current="page"
            className={`nav-link ${selectedTab === "HOME" && "active"}`}
            to="/"
            style={{ userSelect: "auto" }}>
            <svg
              className="bi pe-none me-2"
              height="16"
              style={{ userSelect: "auto" }}
              width="16"
            >
              <use style={{ userSelect: "auto" }} xlinkHref="#home" />
            </svg>
            Home
          </ Link>
        </li>
        <li style={{ userSelect: "auto" }} onClick = {() => handleOnClick("CREATE-POST")}>
          <Link
            className={`nav-link ${selectedTab === "CREATE-POST" && "active"}`}
            to="/create-post"
            style={{ userSelect: "auto" }}>
            <svg
              className="bi pe-none me-2"
              height="16"
              style={{ userSelect: "auto" }}
              width="16">

              <use style={{ userSelect: "auto" }} xlinkHref="#speedometer2" />
            </svg>
            Create Post
          </Link>
        </li>
      </ul>

      <hr style={{ userSelect: "auto" }} />
      <div
        className="dropdown"
        style={{
          userSelect: "auto",
        }}
      >
        <a
          aria-expanded="false"
          className="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
          data-bs-toggle="dropdown"
          href="#"
          style={{
            userSelect: "auto",
          }}
        >
          <img
            alt=""
            className="rounded-circle me-2"
            height="32"
            src="https://github.com/mdo.png"
            style={{
              userSelect: "auto",
            }}
            width="32"
          />
          <strong
            style={{
              userSelect: "auto",
            }}
          >
            mdo
          </strong>
        </a>
        <ul
          className="dropdown-menu dropdown-menu-dark text-small shadow"
          style={{
            userSelect: "auto",
          }}
        >
          <li
            style={{
              userSelect: "auto",
            }}
          >
            <a
              className="dropdown-item"
              href="#"
              style={{
                userSelect: "auto",
              }}
            >
              New project...
            </a>
          </li>
          <li
            style={{
              userSelect: "auto",
            }}
          >
            <a
              className="dropdown-item"
              href="#"
              style={{
                userSelect: "auto",
              }}
            >
              Settings
            </a>
          </li>
          <li
            style={{
              userSelect: "auto",
            }}
          >
            <a
              className="dropdown-item"
              href="#"
              style={{
                userSelect: "auto",
              }}
            >
              Profile
            </a>
          </li>
          <li
            style={{
              userSelect: "auto",
            }}
          >
            <hr
              className="dropdown-divider"
              style={{
                userSelect: "auto",
              }}
            />
          </li>
          <li
            style={{
              userSelect: "auto",
            }}
          >
            <a
              className="dropdown-item"
              href="#"
              style={{
                userSelect: "auto",
              }}
            >
              Sign out
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
