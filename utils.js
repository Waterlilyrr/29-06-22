const c = (el) => document.createElement(el);

const q = (el) => document.querySelector(el);

const createCard = (parent, imgLink, title, price) => {
  const wrapperEl = c("div");
  const titleEl = c("h3");
  const priceEl = c("p");
  const yearEl = c("p");
  const imgEl = c("img");
  const showroomEl = c("div");

  wrapperEl.className = "wrapper";
  titleEl.className = "title";
  priceEl.className = "price";
  yearEl.className = "year";
  imgEl.className = "img";
  showroomEl.className = "showroom";

  imgEl.setAttribute("alt", title);
  imgEl.setAttribute("src", imgLink);

  titleEl.textContent = title;
  priceEl.textContent = price;

  wrapperEl.append(imgEl, titleEl, priceEl);
  parent.appendChild(showroomEl);
  showroomEl.appendChild(wrapperEl);
};

export { c, createCard, q };
