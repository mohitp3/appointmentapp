import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAppointmentinit } from "../../Redux/Actions";
import "./AppointmentList.css";

const AppointmentList = () => {
    const dispatch = useDispatch();
    const { appointments } = useSelector((state) => state.data);

    useEffect(() => {
        dispatch(getAppointmentinit());    
      }, [dispatch])

    return (
        <div>
            <div className="productList">
      
      <table className="widgetLgTable">
        <tbody>
          <tr className="widgetLgTr">
            <th className="widgetLgTh">Index</th>
            <th className="widgetLgTh">Name</th>
            <th className="widgetLgTh">Email</th>
            
            <th className="widgetLgTh">Appointment Date</th>
            <th className="widgetLgTh">Duration</th>
          </tr>
          {appointments &&
            appointments.map((item, index) => (
              <tr className="widgetLgTr" key={index}>
                <td className="widgetLgName">{index + 1}</td>
                <td className="widgetLgName">{item.name}</td>
                <td className="widgetLgName">{item.email}</td>
                <td className="widgetLgName">{item.appointmentDate}</td>
                <td className="widgetLgName">{item.duration+"mins"}</td>
                {/* <td className="widgetLgName">
                  {new Date(item.appointmentDate).toGMTString()}
                </td>
                <td>
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={(e) => {
                      handleDelete(e, item._id);
                    }}
                  >
                    <DeleteOutline />
                  </Button>
                </td> */}
              </tr>
            ))}
        </tbody>
      </table>
    </div>
        </div>
    )
}

export default AppointmentList
