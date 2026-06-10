document.querySelectorAll(".likeBox").forEach(box => {
  const btn = box.querySelector(".likeBtn");
  const num = box.querySelector(".likeCount");

  btn.addEventListener("click", () => {
    let count = Number(num.textContent);

    if (btn.classList.contains("liked")) {
      btn.classList.remove("liked");
      count--;
    } else {
      btn.classList.add("liked");
      count++;
    }

    num.textContent = count;
  });
});