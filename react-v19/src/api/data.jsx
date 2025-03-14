export const getData = async (url) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log("RO", data);
    return data;
  } catch (error) {
    console.error("Error from Fetch:", error);
  }
};

export const getPhotos = async(url) => {
  const data =  getData(url);
  return data
};
