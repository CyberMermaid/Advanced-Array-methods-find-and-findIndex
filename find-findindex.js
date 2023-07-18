/* 
Write a function called `findUserByUsername` which accepts an array of objects,
each with a key of username, and a string. The function should return the first
object with the key of username that matches the string passed to the function. 
If the object is not found, return undefined. 

const users = [
  {username: 'mlewis'},
  {username: 'akagen'},
  {username: 'msmith'}
];

findUserByUsername(users, 'mlewis') // {username: 'mlewis'}
findUserByUsername(users, 'taco') // undefined
*/


function findUserByUsername(usersArray, username) {
  return usersArray.find(function (user, key, arr) {
    // Iterate through arr and return the Object user if user.username === username. Otherwise, return undefined.
    for (key in arr) {
      if (user.username === username) {
        return Object.entries(user);
      }
    }
    return undefined;
  });
}

/*
Write a function called `removeUser` which accepts an array of objects, each with a key of username, and a string. The function should remove the object from the array. If the object is not found, return undefined. 

const users = [
  {username: 'mlewis'},
  {username: 'akagen'},
  {username: 'msmith'}
];

removeUser(users, 'akagen') // {username: 'akagen'}
removeUser(users, 'akagen') // undefined
*/

function removeUser(usersArray, username) {
  //removeElementFromIndex = index where username exists in usersArray. 
  // element Index is -1 if username doesn't exist in usersArray
  const removeElementFromIndex = usersArray.findIndex(function (user) {
    return user.username === username;
  });
  //If element exists in usersArray, return removed element

  if (removeElementFromIndex != -1) {
    return usersArray.splice(removeElementFromIndex, 1);
  }
  //Else, return undefined when username doesn't exist in usersArray.
  return undefined;
}