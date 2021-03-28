function solve() { // 100/100
  const data = document.querySelectorAll("#container > input");
  const [name, hall, ticket] = data;
  const addBtn = document.querySelector("#container > button");
  const moviesOnScreen = document.querySelector("#movies > ul");
  const archive = document.querySelector("#archive > ul");
  const archiveBtn = document.querySelector("#archive").lastElementChild;

  addBtn.addEventListener("click", ctaAddMovie);
  moviesOnScreen.addEventListener("click", ctaArchive);
  archiveBtn.addEventListener("click", ctaRemoveArchive);

  function ctaAddMovie(e) {
    e.preventDefault();
    if (name.value === "" || hall.value === "" || !Number(ticket.value)) {
      return;
    }

    let movie = renderLi(
      "",
      {},
      renderSpan(name.value, {}),
      renderStrong(`Hall: ${hall.value}`, {}),
      renderDiv(
        "",
        {},
        renderStrong(Number(ticket.value).toFixed(2), {}),
        renderInput("", { placeholder: "Tickets Sold" }),
        renderButton("Archive", {})
      )
    );

    moviesOnScreen.appendChild(movie);
    Array.from(data).map((x) => (x.value = ""));
  }

  function ctaArchive(e) {
    let ticketSold = e.target.previousElementSibling;
    if (e.target.tagName !== "BUTTON") {
      return;
    }
    if (!Number(ticketSold.value) && ticketSold.value !== "0") {
      return;
    }
    let liElement = e.target.parentElement.parentElement;
    let ticketPrice = Number(liElement.children[2].children[0].textContent);

    liElement.removeChild(liElement.children[2]);
    liElement.children[1].textContent = `Total amount: ${(
      ticketPrice * Number(ticketSold.value)
    ).toFixed(2)}`;
    moviesOnScreen.removeChild(liElement);

    const deleteBtn = renderButton("Delete", {});

    deleteBtn.addEventListener("click", (e) => e.target.parentElement.remove());

    liElement.appendChild(deleteBtn);
    archive.appendChild(liElement);
  }

  function ctaRemoveArchive() {
    Array.from(archive.children).map((x) => archive.removeChild(x));
  }

  const renderLi = renderHtml.bind(undefined, "li");
  const renderSpan = renderHtml.bind(undefined, "span");
  const renderStrong = renderHtml.bind(undefined, "strong");
  const renderDiv = renderHtml.bind(undefined, "div");
  const renderInput = renderHtml.bind(undefined, "input");
  const renderButton = renderHtml.bind(undefined, "button");

  function renderHtml(type, content, attribute, ...children) {
    const element = document.createElement(type);

    if (content !== "" && element.tagName !== "INPUT") {
      element.innerHTML = content;
    }
    if (element.tagName === "INPUT") {
      element.value = content;
    }

    Array.from(children).map((x) => element.appendChild(x));
    Object.entries(attribute).map(([k, v]) => element.setAttribute(k, v));

    return element;
  }
}