const img = {
  electronics:
    "https://images.pexels.com/photos/3194519/pexels-photo-3194519.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  jewelery:
    "https://images.pexels.com/photos/15871491/pexels-photo-15871491/free-photo-of-wedding-ring-with-a-diamond.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "men's clothing":
    "https://images.pexels.com/photos/7679732/pexels-photo-7679732.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "women's clothing":
    "https://images.pexels.com/photos/7679682/pexels-photo-7679682.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
};

export const CategoriesImg = (data) => {
  return img[data];
};
