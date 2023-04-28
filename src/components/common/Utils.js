
export const textCopyFunc = (value) => {
  const r = document.createRange();
  r.selectNode(document.getElementById(value));
  window.getSelection().removeAllRanges();
  window.getSelection().addRange(r);
  document.execCommand("copy");
  window.getSelection().removeAllRanges();

  document.getElementById("success_message").classList.add("active");

  setTimeout(() => {
    document.getElementById("success_message").classList.remove("active");
  }, 2000)
};
