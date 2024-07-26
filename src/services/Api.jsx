export const getProducts = async () => {
  try {
    const res = await fetch(`https://fakestoreapi.com/products`);
    if (!res.ok) {
      throw new Error("the response is not ok");
    }
    const data = await res.json();
    return data;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export const getProduct = async (Id) => {
  try {
    const res = await fetch(`https://fakestoreapi.com/products/${Id}`);

    if (!res.ok) {
      throw new Error("the response is not ok");
    }

    const data = await res.json();
    return data;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export const getCategories = async () => {
  try {
    const res = await fetch("https://fakestoreapi.com/products/categories");

    if (!res.ok) {
      throw new Error("the response is not ok");
    }

    const data = await res.json();
    return data;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export const getCategory = async (category) => {
  try {
    const res = await fetch(
      `https://fakestoreapi.com/products/category/${category}`
    );

    if (!res.ok) {
      throw new Error("the response is not ok");
    }

    const data = res.json();
    return data;
  } catch (err) {
    console.log(err);
    throw err;
  }
};
