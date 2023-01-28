(() => {
  let avengers: number = 30;;
  const villians: number = 20;

  if (avengers < villians) {
    console.log("We're in problems");
  } else {
    console.log("We're saved");
  }

  avengers = Number('55A');

  console.log({avengers});
})()