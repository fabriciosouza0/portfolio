const goTo = (target) => {
  document.getElementById(target).scrollIntoView({
    behavior: "smooth",
  });
};
