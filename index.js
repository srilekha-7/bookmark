let bookmarkFormEl = document.getElementById("bookmarkForm");
let siteNameInputEl = document.getElementById("siteNameInput");
let siteNameErrMsgEl = document.getElementById("siteNameErrMsg");
let siteUrlInputEl = document.getElementById("siteUrlInput");
let siteUrlErrMsgEl = document.getElementById("siteUrlErrMsg");
let submitBtnEl = document.getElementById("submitBtn");
let bookmarksListEl = document.getElementById("bookmarksList");

let bookmarks = [
  {
    bookmarkId: "bookmark",
    name: "Learning Portal",
    url: "https://learning.ccbp.in/",
    unique: 1,
  },
];
let bookmarkCount = bookmarks.length;

let formdata = {
  siteNameInput: "",
  siteUrlInput: "",
};

siteNameInputEl.addEventListener("change", function (event) {
  if (event.target.value === "") {
    siteNameErrMsgEl.textContent = "Required*";
    siteNameErrMsgEl.classList.add("error-msg");
  } else {
    siteNameErrMsgEl.textContent = "";
  }
  formdata.siteNameInput = event.target.value;
});
siteUrlInputEl.addEventListener("change", function (event) {
  if (event.target.value === "") {
    siteUrlErrMsgEl.textContent = "Required*";
    siteUrlErrMsgEl.classList.add("error-msg");
  } else {
    siteUrlErrMsgEl.textContent = "";
  }
  formdata.siteUrlInput = event.target.value;
});

function validFormData() {
  let { siteNameInput, siteUrlInput } = formdata;
  if (siteNameInput === "") {
    siteNameErrMsgEl.textContent = "Required*";
  }
  if (siteUrlInput === "") {
    siteUrlErrMsgEl.textContent = "Required*";
  }
}

bookmarkFormEl.addEventListener("submit", function () {
  event.preventDefault();
  validFormData(formdata);
});

function createAndAppendBookmark(bookmark) {
  let bookmarkId = "bookmark" + bookmark.unique;
  let paragraphId = "para" + bookmarks.unique;

  let bookmarkLiElement = document.createElement("li");
  bookmarkLiElement.classList.add("d-flex", "flex-row");
  bookmarkLiElement.id = bookmarkId;
  bookmarksListEl.appendChild(bookmarkLiElement);

  let paragraphContainer = document.createElement("div");
  paragraphContainer.classList.add("container-el", "d-flex", "flex-row");

  bookmarkLiElement.appendChild(paragraphContainer);

  let paragraphElement = document.createElement("p");
  paragraphElement.textContent = bookmark.name;
  paragraphContainer.appendChild(paragraphElement);
  paragraphContainer.classList.add("p-el");
  console.log(paragraphElement);

  let addBtnEl = document.createElement("a");
  addBtnEl.href = siteUrlInputEl.value;
  addBtnEl.target = "_blank";
  addBtnEl.textContent = "Visit";
  addBtnEl.classList.add("button-el");
  paragraphContainer.appendChild(addBtnEl);
}

for (let bookmark of bookmarks) {
  createAndAppendBookmark(bookmark);
}

function onSubmitBtn() {
  let siteNameInput = siteNameInputEl.value;
  let siteUrlInput = siteUrlInputEl.value;

  bookmarkCount = bookmarkCount + 1;
  if (siteNameInput !== "" && siteUrlInput !== "") {
    let newBoolmark = {
      name: siteNameInput,
      url: siteUrlInput,
      unique: bookmarkCount,
    };
    createAndAppendBookmark(newBoolmark);
  }
}
submitBtnEl.onclick = function () {
  onSubmitBtn();
};
