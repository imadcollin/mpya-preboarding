import axios from "axios";

const API_URL = "http://localhost:4000/items/";

async function createItem(title, creator) {
  const { data: newItem } = await axios.post(API_URL, {
    title,
    creator,
  });
  return newItem;
}

async function deleteItem(id) {
  const message = await axios.delete(`${API_URL}${id}`);
  return message;
}

async function updateItem(id, payload) {
  const { data: newItem } = await axios.put(`${API_URL}${id}`, payload);
  return newItem;
}

async function getAllItems() {
  const { data: items } = await axios.get(API_URL);
  console.log(items);
  return items;
}

export default { createItem, deleteItem, updateItem, getAllItems };
