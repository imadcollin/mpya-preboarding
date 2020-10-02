

let randomId = 1;

const items = [
  {
    id: `${randomId}`,
    title: "Java",
    creator: " creator",
  }];

const getAllItems = () => items;

const createItem = (title, creator) => {
  return {
    id: `${Math.floor(Math.random() * 10 + 1)}`,
    title: title,
    creator: creator,
  };
};

const deleteItem = (id) => {
	const del= items.filter((item)=>item.id==id);
	items.splice(items.indexOf(del,1));
}


const updateItem=(id,payload) =>{
	const find= items.filter((item)=>item.id==id)
find.title="www";
find.creator="ddd"; 
return find;

}

export default { getAllItems, createItem ,deleteItem, updateItem};


