import { useState, useEffect } from "react";
import axios from "axios";
import RenderMap from "./components/RenderMap";

const App = () => {
  const [ipDetails, setIpDetails] = useState({});

  useEffect(() => {
    const getIp = async () => {
      try {
        const { data } = await axios.get("https://ipapi.co/json/");
        setIpDetails(data);
      } catch (err) {
        console.log("Error fetch data: ", err);
      }
    };

    getIp();
  }, []);

  return (
    <>
      <h1 className="mt-24 font-bold text-center underline mb-80 text-8xl font-pacifico text-primary-color">
        IP Address Finder
      </h1>
      <div className="flex flex-wrap items-center gap-16 w-[80rem] max-w-[88%] mx-auto">
        <div className="font-bold">
          <h4 className="my-10">What is my IPv6 address?</h4>
          <p className="my-8 text-4xl text-primary-color">{ipDetails.ip}</p>
          <h4 className="my-10">Approximate location:</h4>
          <p className="my-8 text-2xl text-primary-color">
            {ipDetails.city}, {ipDetails.region}, {ipDetails.country_name}
          </p>
          <h4 className="my-10">Internet Service Provider (ISP):</h4>
          <p className="my-8 text-2xl text-primary-color">{ipDetails.org}</p>
        </div>
        <RenderMap lat={ipDetails.latitude} lng={ipDetails.longitude} />
      </div>
    </>
  );
};

export default App;
