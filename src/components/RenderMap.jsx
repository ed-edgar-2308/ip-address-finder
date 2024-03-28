import { useEffect } from "react";
import { Map, Marker } from "maplibre-gl";

const RenderMap = ({ lat, lng }) => {
  useEffect(() => {
    if (lat && lng) {
      const map = new Map({
        container: "map",
        style:
          "https://api.maptiler.com/maps/streets/style.json?key=DGXtYZdwpkrkweWeGr5U",
        center: [lng, lat],
        zoom: 9,
      });
      new Marker().setLngLat([lng, lat]).addTo(map);
    }
  });

  return (
    <div
      id="map"
      className="flex-1 min-w-[40rem] border-4 w-full h-[40rem] border-primary-color"></div>
  );
};

export default RenderMap;
