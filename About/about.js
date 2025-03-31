document.addEventListener("mousemove", (e) => {
    let cursor = document.querySelector(".custom-cursor");
    cursor.style.left = `${e.clientX}px`;
    cursor.style.top = `${e.clientY}px`;
});