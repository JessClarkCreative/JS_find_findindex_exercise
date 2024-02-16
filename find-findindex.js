// Function to find a user by username in an array of objects
// Using find method
function findUserByUsername(usersArray, username) {
  return usersArray.find(user => user.username === username);
}

// Function to remove a user by username
// Using the findIndex method to get the index of the object with the specified username
function removeUser(usersArray, username) {
  const index = usersArray.findIndex(user => user.username === username);

  // Checking if the user with the specified username is found
  if (index !== -1) {
    // Using splice to remove the object from the array at the found index and returning the removed object
    return usersArray.splice(index, 1)[0];
  }

  // Returning undefined if the user with the specified username is not found
  return undefined;
}