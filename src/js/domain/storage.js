const storage = {
  store: data => sessionStorage.setItem('todo-data', JSON.stringify(data)),
  read: () => JSON.parse(sessionStorage.getItem('todo-data'))
};

export default storage;
