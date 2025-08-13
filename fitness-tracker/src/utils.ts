import type React from "react";

export const fetchData = async (
  username: string|undefined,
  dataPath: string,
  dataSetter: React.Dispatch<React.SetStateAction<any>>
) => {
  const response = await fetch(
    `${import.meta.env.VITE_BACKEND_BASE_URL_V1}/${dataPath}/${username}`
  );

  const result = await response.json();
  dataSetter(result);
};
