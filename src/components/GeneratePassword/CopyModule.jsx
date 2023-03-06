export function copyToClipboard(text) {
  // create a temporary textarea element to hold the text to be copied
  const textarea = document.createElement("textarea");
  textarea.value = text;
  textarea.setAttribute("readonly", "");
  textarea.style.position = "absolute";
  textarea.style.left = "-9999px";

  // add the textarea to the DOM and select its contents
  document.body.appendChild(textarea);
  textarea.select();

  // copy the contents to the clipboard and remove the temporary textarea
  document.execCommand("copy");
  document.body.removeChild(textarea);
}
