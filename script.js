console.log(countHello());

function countHello() {
    let listItems = document.querySelectorAll("li");
    console.log(listItems);
    let hello = 0;
    for (let i = 0; i < listItems.length; i++) {
        if (listItems[i].innerHTML === "Hello") {
            hello++;
            // listItems[i].style.color = "orange";
            listItems[i].className = "hello";
        }
    }
    return hello;
}
