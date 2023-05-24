const userData = JSON.parse(sessionStorage.getItem("userData"));

export const bearerToken = () => {
  const config = {
    headers: {
      Authorization: "Bearer 89|HnNuAlopPWmoRFziecwWIkrjgtT2CnOBmVSIYTrT",
    },
  };
  return config;
};
