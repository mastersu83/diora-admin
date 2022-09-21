export const getPathName = (key: string | undefined) => {
  let title = "";
  let typeOfClothing = "";
  if (key === "/girl-cloth") {
    title = "Комплекты на выписку для девочек";
    typeOfClothing = "Girl";
  }
  if (key === "/boy-cloth") {
    title = "Комплекты на выписку для мальчиков";
    typeOfClothing = "Boy";
  }
  if (key === "/others-cloth") {
    title = "Пледы на выписку, наборы в кровать, корзины";
    typeOfClothing = "Others";
  }
  if (key === "slider") {
    title = "Пледы на выписку, наборы в кровать, корзины";
    typeOfClothing = "Slider";
  }
  return { title, typeOfClothing };
};
