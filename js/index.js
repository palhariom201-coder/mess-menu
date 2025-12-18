import { fetchFeedback, saveFeedback } from './firebase.js';
import { renderMessMenu, save, loader, messMenu, showComments } from './helper.js';

const date = new Date();
const year = date.getFullYear();
const day = date.getDay();
const footerDate = document.getElementById("footer-date");
footerDate.innerHTML = `&copy; ${year} IIT(ISM) Dhanbad. All rights reserved.`;

const menuContainer = document.getElementById("menu-container");
const menu = renderMessMenu(day);
menuContainer.innerHTML = menu;
const dayElement = document.getElementById("day");
dayElement.innerHTML = messMenu[day].day;

const form = document.getElementById("feedback-form");
const saveBtn = document.getElementById('save-btn');
saveBtn.innerHTML = save();

const showCommentsElement = document.getElementById('show-comments');
showCommentsElement.innerHTML = loader();
const comments = await showComments();
showCommentsElement.innerHTML = comments;

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const formData = new FormData(e.currentTarget);
  const data = Object.fromEntries(formData);
  saveBtn.innerHTML = loader();
  const res = await saveFeedback(data);
  if(!res) return;
  comments = [data, ...comments];
  showCommentsElement.innerHTML = comments;
  saveBtn.innerHTML = save();
  e.target.reset();
});




