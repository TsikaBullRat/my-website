import { useState, useEffect } from "react";
import { db, auth } from "../Comp/config";

const Definition = ({ display, Switch1, Switch2 }) => {
  return display ? (
    <div className="info-box">
      <h2>What do you know</h2>
      <p>
        Ok, so we have a basic red pill, blue pill situation. I prefer my
        customers know what they are asking for, and of course why the cost is
        what it is. Thus if you choose the blue pill I'll explain as best I
        can(how deep the rabbit hole goes), and if you choose the red pill we
        assume you already know enough
      </p>
      <div className="pill-box">
        <button className="pills" style={{background: "red"}} onClick={Switch1}>Red Pill</button>
        <button className="pills"  style={{background: "blue"}} onClick={Switch2}>Blue Pill</button>
      </div>
    </div>
  ) : null;
};

const Email = ({ display }) => {

  const [ active, setActive ] = useState()

  return display ? (
    <div>
        <form className="menu-box">
          <div className={active?"active-checkbox":"inactive-checkbox"}>
            <h2>What do you need?</h2>
            <p>Hello</p>
          </div>
        </form>
        <form className="email-box">
            <input type="text" placeholder="Email" className="input"  />
            <input type="text" placeholder="" className="input"  />
            <input
              type="text"
              placeholder="Re-enter password"
              className="input"
            />
            <input type="submit" value="Order" className="button signup" />
        </form>
    </div>
  ) : null;
};

const Order = () => {
  return <></>;
};

export const Programming = () => {
  const [display, setDisplay] = useState(false);
  const [email, setEmail] = useState(false);
  const [order, setOrder] = useState(false);
  const [info, setInfo] = useState(true);
  const [templates, setTemplates] = useState(null);
  const [designs, setDesigns] = useState(null);
  const [petPros, setPetPros] = useState(null);

  const LoadProjects = () => null;

  const Cancel = () => {
    setDisplay(false);
    setEmail(false);
    setOrder(false);
    setInfo(true);
  };

  useEffect(() => {
    LoadProjects();
    return () => LoadProjects();
  }, []);

  return (
    <div className="main2">
      {templates ? <div className="block2 blockA"></div> : null}
      {designs ? <div className="block2 blockB"></div> : null}
      {petPros ? <div className="block2 blockA"></div> : null}
      {templates || designs || petPros ? (
        <div className="with_projects blockB">
          <h5>Maybe you thinking of something else</h5>
          <button onClick={()=>setDisplay(true)}>Yes</button>
          {display ? (
            <>
              <div className="backdrop" onClick={Cancel}></div>
              <Email display={email} setDisplay={setEmail} />
              <Definition display={info} setDisplay={setInfo} />
              <Order display={order} setDisplay={setOrder} />
            </>
          ) : null}
        </div>
      ) : (
        <div className="without_projects blockB">
          <h5>What are you thinking</h5>
          <p>
            If your seeing this it means I have no projects available right now
            so tell me what you looking for
          </p>
          <button onClick={()=>setDisplay(true)}>Make request</button>
          {display ? (
            <>
              <div className="backdrop" onClick={Cancel}></div>
              <Email display={email} setDisplay={setEmail} />
              <Definition display={info} setDisplay={setInfo} Switch1={()=>{setInfo(false);setEmail(true)}} Switch2={()=>{setInfo(false);setOrder(true)}}/>
              <Order display={order} setDisplay={setOrder} />
            </>
          ) : null}
        </div>
      )}
    </div>
  );
};
