const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("#list");

function getChapterList() {
    return JSON.parse(localStorage.getItem('myFavBOMList')) || [];
}

let chaptersArray = getChapterList();

chaptersArray.forEach(chapter => {
    displayList(chapter);
});

button.addEventListener("click", function() {
    if (input.value.trim() !== "") {
        displayList(input.value.trim());
        chaptersArray.push(input.value.trim());
        setChapterList();
        input.value = "";
        input.focus();
    } else {
        input.focus();
    }
});

function displayList(item) {
    let li = document.createElement('li');
    let deleteButton = document.createElement('button');
    li.textContent = item;
    deleteButton.textContent = '❌';
    li.append(deleteButton);
    list.append(li);
    
    deleteButton.addEventListener("click", function () {
        list.removeChild(li);
        deleteChapter(item);
        input.focus();
    });
}

function setChapterList() {
    localStorage.setItem('myFavBOMList', JSON.stringify(chaptersArray));
}

function deleteChapter(chapter) {
    chaptersArray = chaptersArray.filter(item => item !== chapter);
    setChapterList();
}
