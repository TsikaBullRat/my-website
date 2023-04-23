import { useState } from "react";
import { Link } from "react-router-dom";
import { MdComputer, MdLocalPhone } from "react-icons/md";
import { RiBook3Fill } from "react-icons/ri";

export const Home = ({ style }) => {
  const [display, setDisplay] = useState([false, false, false]);

  return (
    <div className="main1">
      <div className={`transition home-main blockA`}>
        <div style={{ display: "flex" }}>
          <div className="image1"></div>
          <div>
            <h1>Ntsikayomzi Phenyo Ngcakani</h1>
            <h2>Programmer, Poet, Creative</h2>
          </div>
        </div>
        <div
          style={{
            paddingLeft: 30,
            paddingRight: 50,
            width: "60%",
            marginTop: 20,
            marginLeft: 40,
          }}
        >
          <p style={{ fontSize: 20 }}>
            Hi I'm Ntsikayomzi Phenyo Ngcakani. I am a fullstack web and
            cross-platform mobile developer. I am also a poet in my free time.
            Browse through if you intriuged by my 2 talents.😂😂😂🤣
          </p>
        </div>
      </div>
      <div className="side-set">
        <Link to="/programming">
          <div className="block1 blockB">
            <div
              className="inner"
              onMouseEnter={() => setDisplay([true, false, false])}
              onMouseLeave={() => setDisplay([false, false, false])}
            >
              <MdComputer size={40} color="#fff" />
              <h2 style={{ marginLeft: 20 }}>Programming</h2>
            </div>
            {display[0] ? (
              <p>
                This is for those who wanna hire me for development work.
              </p>
            ) : null}
          </div>
        </Link>
        {/* <Link to="/poetry">
          <div className="block1 blockA">
            <div
              className="inner"
              onMouseEnter={() => setDisplay([false, true, false])}
              onMouseLeave={() => setDisplay([false, false, false])}
            >
              <RiBook3Fill size={40} color="#fff" />
              <h2 style={{ marginLeft: 20 }}>Poetry</h2>
            </div>
            {display[1] ? (
              <p>
                If you interested in proccuring my poetic works or wanna book me
                for a perfomance check this page.
              </p>
            ) : null}
          </div>
        </Link> */}
        <Link to="/contact">
          <div className="block1 blockB">
            <div
              className="inner"
              onMouseEnter={() => setDisplay([false, false, true])}
              onMouseLeave={() => setDisplay([false, false, false])}
            >
              <MdLocalPhone size={40} color="#fff" />
              <h2 style={{ marginLeft: 20 }}>Contact Info</h2>
            </div>
            {display[2] ? <p>If you need to contact me head here</p> : null}
          </div>
        </Link>
      </div>
    </div>
  );
};
