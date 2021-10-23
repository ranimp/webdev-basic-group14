  const elCommentList = document.querySelector('#comment-list');  
const elCommentSection = document.querySelector('#comment-form-section');
const elAvatarImg = document.querySelector('#avatar-img');
const elCommentForm = document.querySelector('#comment-form').addEventListener('submit', (submitComment) => {
    event.preventDefault()

    const elInputUsername = document.querySelector('#input-username').value;
    const elInputComment = document.querySelector('#input-comment').value;
    const newList = document.createElement("li")
    newList.className = "list-group-item d-flex justify-content-between align-items-start";
    newList.style.marginTop = "10px";
    const parent = document.getElementById("comment-list");
    parent.prepend(newList);

    const newDiv = document.createElement("div");
    newDiv.className = "ms-2 me-auto";
    const newContent = document.createTextNode(elInputComment);
    newDiv.appendChild(newContent);
    const parent2 = document.querySelector(".list-group-item");
    parent2.appendChild(newDiv);

    const newDiv2 = document.createElement("div");
    newDiv2.className = "fw-bold text-capitalize";
    const newContent2 = document.createTextNode(elInputUsername);
    newDiv2.appendChild(newContent2);
    const parent3 = document.querySelector(".ms-2");
    parent3.prepend(newDiv2);

});

const elBtnSubmit = document.querySelector('#btn-submit').addEventListener("click", () => submitComment(event));