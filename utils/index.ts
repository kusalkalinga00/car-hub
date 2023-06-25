const apiKey = process.env.NEXT_PUBLIC_API_KEY;
const apiHost = process.env.NEXT_PUBLIC_API_HOST;

export async function fetchCars() {
  const headers: any = {
    "X-RapidAPI-Key": apiKey,
    "X-RapidAPI-Host": apiHost,
  };

  const response = await fetch(
    "https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=carrera",
    {
      headers: headers,
    }
  );

  const result = await response.json();

  return result;
}

export const calculateCarRent = (city_mpg: number, year: number) => {
  const basePricePerDay = 50; // Base price per day in USD

  const mileageFactor = 0.1; // Additional price per mile in USD

  const ageFactor = 0.25; // additional price per year of vehicle age in USD

  // calculate additional price per day based on mileage and age of vehicle

  const mileageRate = city_mpg * mileageFactor;
  const ageRate = (new Date().getFullYear() - year) * ageFactor;

  const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;

  return rentalRatePerDay.toFixed(0);
};
