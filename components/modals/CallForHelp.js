// CallForHelp.js
import React, { useEffect, useState } from "react";
import geoLocation from "../common/socialMedia/geolocation.js";
import axios from "axios";
import { ApiUrl } from "@/utils/BaseUrl";
import { DataLayer } from "@/context/UserDataProvider";
import { MapContainer, TileLayer, GeoJSON } from 'react-leaflet';

const CallForHelp = ({ visible, onClose = () => {}, callback = () => {}, data }) => {
  const [location, setLocation] = useState({
    loaded: false,
    coords: { lat: "", lng: "" },
  });
  const [geojsonData, setGeojsonData] = useState(null);
  const locationData = geoLocation(setLocation);

  const gpsdata = async () => {
    try {
      const response = await axios.post(`${ApiUrl}/api/calcDis`, {
        userLat: location.coords.lat,
        userLng: location.coords.lng
      }, {
        withCredentials: true
      });
      console.log("Response Data: ");
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
      <MapContainer
        center={[location.coords.lat, location.coords.lng]}  // Set the initial center of the map
        zoom={13}  // Set the initial zoom level of the map
        style={{ height: '800px', width: '100%' }}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"  
        />

        {geojsonData && (
          <GeoJSON data={geojsonData} />
        )}
      </MapContainer>
      </div>
    </div>
  );
};

export default CallForHelp;
