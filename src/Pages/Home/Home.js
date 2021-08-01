import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSlotsinit ,addAppointmentinit } from "../../Redux/Actions";
import "./Home.css";

const Home = () => {
  const dispatch = useDispatch();
  const { Slots ,newAppointment } = useSelector((state) => state.data);
  const [name, setname] = useState(" ");
  const [email, setemail] = useState("");
  const [duration, setDuration] = useState(30);
  const [slot, setSlot] = useState(0);
  const [appointmentDate, setAppointmentDate] = useState(
    new Date().toISOString().substr(0, 10)
  );

  const getSlots = (e) => {
    e.preventDefault();
    setAppointmentDate(e.target.value);
    dispatch(getSlotsinit(e.target.value, "ist"));
  };
  const handleSlot = (e) => {
    e.target.checked = "checked";
    setSlot(e.target.value);
  };
  const formatAMPM = (date) => {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? "pm" : "am";
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? "0" + minutes : minutes;
    var strTime = hours + ":" + minutes + " " + ampm;
    return strTime;
  };
  const submitAppointment = (e) => {
    e.preventDefault();
    dispatch(addAppointmentinit({name, email, duration, slot, appointmentDate}))
    setemail("");
    setname("");
    setAppointmentDate(new Date().toISOString().substr(0, 10));
    setDuration(30)
  };
  useEffect(() => {
    setSlot(Slots[0]);
    
  }, [Slots])
  useEffect(() => {
    dispatch(getSlotsinit(appointmentDate, "ist"));    
  }, [newAppointment])


  return (
    <div className="newUser">
      <h1 className="newUserTitle">New Appointment</h1>
      <form className="newUserForm">
        <div className="newUserItem">
          <label>Name</label>
          <input
            type="text"
            name="name"
            placeholder="john"
            value={name}
            onChange={(e) => setname(e.target.value)}
          />
        </div>
        <div className="newUserItem">
          <label>Email</label>
          <input
            type="email"
            placeholder="john@gmail.com"
            value={email}
            onChange={(e) => setemail(e.target.value)}
          />
        </div>
        <div className="newUserItem">
          <label>Appointment Date</label>
          <input
            type="date"
            name="appointmentDate"
            placeholder=""
            value={appointmentDate}
            onChange={getSlots}
          />
        </div>

        <div className="newUserItem">
          <label>Slots</label>
          <div className="newUserSlot">
            {Slots &&
              Slots.map((item, ind) => {
                return (
                  <span key={ind}>
                    <input
                      type="radio"
                      name="slot"
                      value={item}
                      onChange={handleSlot}
                      defaultChecked ={ind == 0 ? true:false}
                    />
                    <label htmlFor={item}>{formatAMPM(new Date(item))}</label>
                  </span>
                );
              })}
          </div>
        </div>
        <div className="newUserItem">
          <label>Duration(in Minutes)</label>
          <input
            type="number"
            placeholder=""
            min="30"
            max="120"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
          />
        </div>
        <div className="newUserItem">
          <button className="newUserAppointment" onClick={submitAppointment}>
            Create
          </button>
        </div>
      </form>
    </div>
  );
};

export default Home;
