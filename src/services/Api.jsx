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

    const data = await res.json();
    return data;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export const filterData = async (category) => {
  try {
    let URL = "";
    console.log(category);

    category === null || undefined || ""
      ? (URL = `https://fakestoreapi.com/products`)
      : (URL = `https://fakestoreapi.com/products/category/${category}`);

    const res = await fetch(URL);

    if (!res.ok) {
      throw new Error("the response is not ok");
    }

    const data = await res.json();
    console.log(data);

    return data;
  } catch (err) {
    console.log(err);
    throw err;
  }
};
