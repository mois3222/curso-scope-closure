function greetting() {
  let userName = "Anna";
  console.log(userName);

  if (userName === "Anna") {
    console.log(`Hello ${userName}!`);
  }
}

greetting();
// console.log(userName); ReferenceError: userName is not defined
