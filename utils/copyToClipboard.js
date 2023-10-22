export async function CopyToClipboard(setCopying, text) {
  setCopying(true)
  setTimeout(() => {
    setCopying(false)
  }, 1500);
  return CopyToClipboardDirect(text)
}

export async function CopyToClipboardDirect(text) {
  console.log(text)
  if ('clipboard' in navigator) {
    return await navigator.clipboard.writeText(text);
  } else {
    return document.execCommand('copy', true, text);
  }
}

