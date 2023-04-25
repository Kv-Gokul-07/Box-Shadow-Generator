export const textCopyFunc = (value) => {
  const r = document.createRange();
  r.selectNode(document.getElementById(value));
  window.getSelection().removeAllRanges();
  window.getSelection().addRange(r);
  document.execCommand("copy");
  window.getSelection().removeAllRanges();

};
