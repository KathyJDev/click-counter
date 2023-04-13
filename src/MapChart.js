import React, { useEffect, useState, useMemo } from "react";
import { Tooltip } from 'react-tooltip';
import { scaleLinear } from "d3-scale";
import {
  ComposableMap,
  Geographies,
  Geography,
  Sphere,
  Graticule
} from "react-simple-maps";
import { collection, getDocs } from 'firebase/firestore';
import { db } from './firebase-config';
import geoUrl from "./features.json";
import 'react-tooltip/dist/react-tooltip.css';

const getClicksByCountry = async () => {
  const querySnapshot = await getDocs(collection(db, 'Click'));
  const clicksByCountry = {};

  for (const doc of querySnapshot.docs) {
    const click = doc.data();
    const { count } = click;

    const request = await fetch("https://ipinfo.io/json?token=57f732a0f50583")
    const jsonResponse = await request.json()
    const country_abbreviation = jsonResponse.country;

    if (country_abbreviation in clicksByCountry) {
      clicksByCountry[country_abbreviation] += count;
    } else {
      clicksByCountry[country_abbreviation] = count;
    }
  }

  const clicksArray = Object.entries(clicksByCountry).map(([abbreviation, count]) => ({
    abbreviation,
    count,
  }));
  return clicksArray;
};

const MapChart = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchClicksByCountry = async () => {
      const clicksByCountry = await getClicksByCountry();
      setData(clicksByCountry);
    };

    fetchClicksByCountry();
  }, []);

  const [maxClicks] = useMemo(() => {
    const counts = data.map(country => country.count);
    return [Math.max(...counts)];
  }, [data]);

const colorScale = scaleLinear()
  .domain([0, maxClicks])
  .range(["#b0c4de", "#4f546c"]);

  return (
    <>
    <ComposableMap
      projectionConfig={{
        scale: 147
      }}
    >
      <Sphere stroke="#E4E5E6" strokeWidth={1} />
      <Graticule stroke="#E4E5E6" strokeWidth={0.5} />
      <Geographies geography={geoUrl}>
        {({ geographies }) =>
          geographies.map(geo => {
            const countryData = data.find(country => country.abbreviation === geo.id);
            const count = countryData ? countryData.count : 0;
            return (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                fill = {colorScale(count)}
                id={geo.id}
                data-tooltip-content={`${geo.properties.name}: ${count} clicks`}
                data-tooltip-id="map-tooltip"
              />
            );
          })
        }
      </Geographies>
    </ComposableMap>
    <Tooltip id="map-tooltip"/>
    </>
  );
};

export default MapChart;
