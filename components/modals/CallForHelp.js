// CallForHelp.js
import React, { useEffect, useState } from "react";
import geoLocation from "../common/socialMedia/geolocation.js";
import axios from "axios";
import { ApiUrl } from "@/utils/BaseUrl";
import { DataLayer } from "@/context/UserDataProvider";

const CallForHelp = ({ visible, onClose = () => {}, callback = () => {}, data }) => {
  const [location, setLocation] = useState({
    loaded: false,
    coords: { lat: "", lng: "" },
  });
  const [geojsonData, setGeojsonData] = useState(null);
  const locationData = geoLocation(setLocation);

  const gpsdata = async () => {
    try {
      const response = await axios.post(`${ApiUrl}/api/renderMap`, {
        lat: location.coords.lat,
        lng: location.coords.lng
      }, {
        withCredentials: true
      });
      console.log(response.data);
      setGeojsonData(response.data.distance);
    } catch (error) {
      console.error('Error fetching GeoJSON data:', error);
    }
  }

  useEffect(() => {
    if(locationData.loaded){
      console.log(locationData.coords);
      gpsdata();
    }
    if (visible) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [visible]);

  if (!visible) return null;

  return (
    <div
      id="background"
      className="fixed inset-0 flex justify-center items-center z-50 bg-black bg-opacity-50"
      onClick={(e) => {
        if (e.target.id === "background") onClose();
      }}
    >
      <div className="flex w-[60rem] h-[45rem] px-[2rem] py-[2rem] register-fir-bg">
        {/* Your component JSX */}
      </div>
    </div>
  );
};

export default CallForHelp;
