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
