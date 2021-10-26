import { API_URL } from "../utils/constants";

export async function searchProductsApi(search) {
  try {
    const url = `${API_URL}/Promociones?_q=${search}&_limit=40`;
    const response = await fetch(url);
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
    return null;
  }
}

export async function getProductApi(id) {
  try {
    const url = `${API_URL}/Promociones/${id}`;
    const response = await fetch(url);
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
    return null;
  }
}

export async function getLastProuctsApi(limit = 30) {
  try {
    const url = `${API_URL}/Promociones?_limit=${limit}&_sort=createdAt:DESC`;
    const response = await fetch(url);
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
    return null;
  }
}
