import { useEffect, useState } from "react";

export const useCountryCoordinates = (countryNames) => {
  const [coordinates, setCoordinates] = useState(null);

  useEffect(() => {
    if (!countryNames) {
      setCoordinates(null);
      return;
    }

    const accessToken = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;
    const apiUrl = "https://api.mapbox.com/geocoding/v5/mapbox.places/";

    const fetchCoordinates = (countryCode) => {
      const encodedCountry = encodeURIComponent(countryCode);
      const requestUrl = `${apiUrl}${encodedCountry}.json?proximity=ip&types=country&access_token=${accessToken}`;

      return fetch(requestUrl)
        .then((response) => response.json())
        .then((data) => {
          const fetchedCoordinates = data.features[0].center;
          return {
            country: countryCode,
            longitude: fetchedCoordinates[0],
            latitude: fetchedCoordinates[1],
          };
        })
        .catch((error) => {
          // todo show error notification
          console.error("Error:", error);
          return null;
        });
      // }
    };

    Promise.all(countryNames.map(fetchCoordinates)).then(
      (resolvedCoordinates) => {
        const filteredCoordinates = resolvedCoordinates.filter(
          (coord) => coord !== null
        );
        setCoordinates(filteredCoordinates);
      }
    );
  }, [countryNames]);

  return coordinates;
};
