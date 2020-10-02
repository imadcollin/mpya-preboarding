let counter = 1;
const items = [
  {
    id: 1,
    title: "Java",
    creator: " creator",
  },  {
    id: 2,
    title: "C++",
    creator: " creator",
  },
];

const getAllItems = () => items;

const createItem = (title,creator) => {
  counter = counter + 1;
  return {
    id: `${counter}`,
    title: title,
    creator: creator
  };
};

const deleteItem = (id) => {
  const del = items.filter((item) => item.id == id);
  items.splice(items.indexOf(del, 1));
};

const updateItem = (id, payload) => {
  const find = items.filter((item) => item.id == id);
  find.title = "Hard Code title ";
  find.creator = "Hard code creator";
  return find;
};

export default { getAllItems, createItem, deleteItem, updateItem };
