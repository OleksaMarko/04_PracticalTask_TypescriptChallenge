import { Api } from "./api.js";
import { coveredTask } from "./updateObjectInArray.js";


const displayUsers = async () => {
  try {
    const users = await Api.getAllUsers();
    const usersList = document.getElementById("container");

    if (usersList) {
      if (users.length === 0) {
        usersList.innerHTML = `
            <h3>Sorry, data list is empty. Please try again later.</h3>
            `;
            throw new Error //  useless, just to sing in my input is empty, not so elegant design
      } else {
        usersList.innerHTML = "";
        users.forEach((user) => {
          const userElement = document.createElement("div");
          userElement.classList.add("list-item");
          userElement.innerHTML = `
                      <h2 class="list-title">${user.title}</h2>
                      <ul class="list-container">
                          <li>User ID: ${user.userId}</li>
                          <li>ID: ${user.id}</li>
                          <li>Body: ${user.body}</li>
                      </ul>
                      `;

          usersList.appendChild(userElement);
        });
      }
    }
  } catch (error) {
    console.log(error, "error from displayUsers");
    alert("Sorry, we couldn't download the data right now. Please try again later.")
  }
};

displayUsers()
  .then(() => {
    console.log("users list rendered");
  })
  .catch((error) => {
    console.log(error, "error  from rendering on page");
  });

  coveredTask()