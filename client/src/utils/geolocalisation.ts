interface Coords {
  lat: number;
  lng: number;
}

const getCurrentLocalisation = (): Coords => {
  const coords = { lat: 34.020882, lng: -7.5898 };
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        coords.lat = position.coords.latitude;
        coords.lng = position.coords.longitude;
      },
      () => {
        coords.lat = 34.020882;
        coords.lng = -6.84165;
      }
    );
  } else {
    coords.lat = 34.020882;
    coords.lng = -6.84165;
  }

  return coords;
};

export default getCurrentLocalisation;
