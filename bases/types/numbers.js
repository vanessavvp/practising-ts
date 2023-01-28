"use strict";
(() => {
    let avengers = 30;
    ;
    const villians = 20;
    if (avengers < villians) {
        console.log("We're in problems");
    }
    else {
        console.log("We're saved");
    }
    avengers = Number('55A');
    console.log({ avengers });
})();
