export const getPhotos = () => {
  return $.ajax({
    method: "GET",
    url: `api/articles`,
    data: {  }
  });
};
