const gallery = document.querySelector(".gallery-row");

const srcs = [];
for (let i = 1; i <= 15; i++) {
  srcs.push(`assets/images/galery/galery${i}.jpg`);
}

srcs.sort(() => Math.random() - 0.5);

srcs.forEach((item) => {
  const img = document.createElement("img");
  img.src = item;
  img.alt = `galery-pic`;
  gallery.append(img);
});
