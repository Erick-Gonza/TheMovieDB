const setBackground = (color) => {
  document.documentElement.style.setProperty("--bodyColor", color);
};

const setTitle = (data) => {
  document.title = `Movies App | ${data}`;
};

export const setInitColorTitle = (color, title) => {
  setBackground(color);
  setTitle(title);
};

export const setBgByMedia = (media_type, data) => {
  media_type === "tv"
    ? setInitColorTitle("#191B2A", `${data.name}`)
    : setInitColorTitle("#191B2A", `${data.title}`);
};
