alert("This is munim's workspace");

// console.log(document.getElementsByTagName("h1"));

// const target = document.getElementsByClassName("title")
// console.log(target[0]);

const target = document.getElementById("title");

// console.log(target);

target.style.color = "red";

const allbox = document.getElementsByClassName("box");

// console.log(allbox);

for (let i = 0; i < allbox.length; i++) {
  const element = allbox[i];
  // console.log(element)
  element.style.backgroundColor = "green";

  if (element.innerText == "box-5") {
    element.style.backgroundColor = "red";
  }
}

// document.getElementById("handleADD").addEventListener("click", (event)=>{
//     console.log("Hello Boss");
// })

const handleSearch = (event) => {
  // console.log("Hello Boss");

  const inputValue = document.getElementById("search-Box").value;

  // console.log(inputValue);

  const container = document.getElementById("comment-container");

  const p = document.createElement("p");
  p.classList.add("child");
  p.innerText = inputValue;

  // console.log(p.innerText);

  container.appendChild(p);

  document.getElementById("search-Box").value = "";

  // console.log(container);

  const allComments = document.getElementsByClassName("child");

  // console.log(allComments)
  // using for of loop
  for (const element of allComments) {
    // console.log(element)

    element.addEventListener("click", (e) => {
      // console.log(e.target);
      // console.log(e.target.parentNode);

      // three way to remove child from parent
      // e.target.parentNode.removeChild(element);
      // or this can be write as,
      // e.target.remove();
      // or
      element.remove();
    });
  }
};

fetch("https://jsonplaceholder.typicode.com/users")
  .then((res) => res.json())
  .then((data) => {
    // console.log(data);
    displayData(data);
  })
  .catch((err) => {
    console.log(err);
  });

const displayData = (userData) => {
  const container = document.getElementById("userData-Container");

  userData.forEach((user) => {
    console.log(user);
    const div = document.createElement("div");
    div.classList.add("user");

    div.innerHTML = `
        <h2>${user.name}</h2>
                    <p>ID: ${user.id}</p>
                    <p>Username: ${user.username}</p>
                    <p>Email: ${user.email}</p>
                    <p>Phone: ${user.phone}</p>
                    <p>Website: ${user.website}</p>

                    <h3>Address</h3>
                    <p>Street: ${user.address.street}</p>
                    <p>Suite: ${user.address.suite}</p>
                    <p>City: ${user.address.city}</p>
                    <p>Zipcode: ${user.address.zipcode}</p>

                    <h3>Company</h3>
                    <p>Company Name: ${user.company.name}</p>
                    <p>Catch Phrase: ${user.company.catchPhrase}</p>
                    <p>Business: ${user.company.bs}</p>

                    <hr>
        `;

    container.appendChild(div);
  });
};
