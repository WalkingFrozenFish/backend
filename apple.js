let apple = 1;
let tree = 1;

for (let i = 0; apple <= 100; i++) {
    console.log(i, apple);

    if (i == 0) {
        apple += apple * 2
        console.log(i, apple);
    }

    apple = apple * 2
    tree++;
    console.log("tree: " + tree);
}