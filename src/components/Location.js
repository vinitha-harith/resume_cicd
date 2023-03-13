import React from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { Icon, divIcon } from "leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";
// import axios from "axios";
import "leaflet/dist/leaflet.css";
import "../custom.css";

// const GEO_CF_URL =
//   "https://us-central1-resume-ch.cloudfunctions.net/visitors_geo_cf";

const Location = ({ geoData }) => {
  // const data = [
  //   {
  //     client_place: [47.449512, 8.582165],
  //     client_city: "Kloten",
  //   },
  //   {
  //     client_place: [42.984923, -81.245277],
  //     client_city: "London",
  //   },
  //   {
  //     client_place: [40.712775, -74.005973],
  //     client_city: "New York",
  //   },
  //   {
  //     client_place: [13.08268, 80.270718],
  //     client_city: "Chennai",
  //   },
  // ];
  // const [geoData, setGeoData] = useState("");
  // setGeoData(data);
  // async function getGeoData() {
  //   try {
  //     const data = await axios.get(`${GEO_CF_URL}`);
  //     setGeoData(data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  const customIcon = new Icon({
    iconUrl: require("../images/marker.png"),
    iconSize: [34, 34]
  });

  const createCustomClusterIcon = (cluster) => {
    return new divIcon({
      html: `<div class="cluster-icon">${cluster.getChildCount()}</div>`,
      className: "custom-marker-cluster",
      iconSize: parseInt(33, 33, true)
    });
  };
  //console.log(geoData);
  return (
    <MapContainer center={[47.449512, 8.582165]} zoom={5}>
      <TileLayer
        attribution="Stamen.TonerLite"
        url="https://stamen-tiles-{s}.a.ssl.fastly.net/toner-lite/{z}/{x}/{y}{r}.png"
      />
      <MarkerClusterGroup
        chunkedLoading
        iconCreateFunction={createCustomClusterIcon}
      >
        {geoData.map((marker, i) => (
          <Marker
            position={[
              parseFloat(marker.client_lat) || 47.449512,
              parseFloat(marker.client_long) || 8.582165
            ]}
            key={i}
            icon={customIcon}
          >
            <Popup>{marker.client_city}</Popup>
          </Marker>
        ))}
      </MarkerClusterGroup>
    </MapContainer>
  );
};

export default Location;
