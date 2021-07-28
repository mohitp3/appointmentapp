import React, { useEffect, useState } from "react";
import { useDispatch ,useSelector } from "react-redux";
import { getSlotsinit } from "../../Redux/Actions";
import "./Home.css";

const Home = () => {
    const dispatch = useDispatch();
    const {slots} = useSelector((state) => state.data)
  const [name, setname] = useState(" ");
  const [email, setemail] = useState("");
  const [duration, setDuration] = useState(30);
  const [slot, setSlot] = useState(0);
  const [appointmentDate, setAppointmentDate] = useState(
    new Date().toISOString().substr(0, 16)
  );
  const [availSlots, setAvailSlots] = useState([]);

  const getSlots = (e) => {
    e.preventDefault();
    setAppointmentDate(e.target.value)
    dispatch(getSlotsinit(e.target.value , "ist"))
   
  };
  useEffect(() => {
      console.log(availSlots)
  }, [slots])

  const formatAMPM = (date)=> {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0'+minutes : minutes;
    var strTime = hours + ':' + minutes + ' ' + ampm;
    return strTime;
  }


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
              {     
                  slots && slots.map((item,ind) =>{
                    return <span key={ind}><input type="radio" name="slot" value={item} />
                        <label htmlFor={item}>{formatAMPM(new Date(item))}</label></span>

                  })
              }           
            
          </div>
        </div>
        <div className="newUserItem">
          <label>Duration</label>
          <input type="number" placeholder="" min="30" max="120" value={duration} onChange={e=>setDuration(e.target.setDuration)}/>
        </div>
        <div className="newUserItem">
          <button className="newUserAppointment">Create</button>
        </div>
      </form>
    </div>
  );
};

export default Home;
