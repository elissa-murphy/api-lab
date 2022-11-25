export async function NasaApiConnection(year) {
  let key = "FPTFjX9KZeT8dTCA9mpWRVrqG4voxzOMCGVA788s";
  let date = year.toString() + "-12-25";
  let query = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${date}&api_key=${key}`;

  //fetch the data
  let res = await fetch(query);

  //turn result into json - javascript object
  let data = await res.json();

  //return the object
  return data;
}
