export const getPathName = (key: string | undefined) => {
  let path = "";
  let title = "";
  if (key === "/girl-cloth") {
    path = "imagesGirl";
    title = "Комплекты на выписку для девочек";
  }
  if (key === "/boy-cloth") {
    path = "imagesBoy";
    title = "Комплекты на выписку для мальчиков";
  }
  if (key === "/others-cloth") {
    path = "imagesOthers";
    title = "Пледы на выписку, наборы в кровать, корзины";
  }
  return { path, title };
};
