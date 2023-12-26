// sets a new key-value pair in local storage.
const setLocalStorageKey = (key, value) => localStorage.setItem(key, JSON.stringify(value));

// tries to get a value from local storage.
const getLocalStorageKey = (key) => {
  try {
    return JSON.parse(localStorage.getItem(key));
  } catch (error) {
    console.error(error);
    return null;
  }
}

const names = ['alice', 'bryan', 'charlotte'];
setLocalStorageKey('names', names);
console.log(getLocalStorageKey('names')); // ['alice', 'bryan', 'charlotte']