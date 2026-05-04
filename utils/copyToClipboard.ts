import toast from "react-hot-toast";

/**
 * Copies text to the clipboard with an automatic fallback for non-secure contexts.
 * * @param text The text to copy to the clipboard.
 * @param successMessage Optional message to show on success.
 * @param errorMessage Optional message to show on error.
 */
export const copyToClipboard = async (
  text: string,
  successMessage = "Message copied to clipboard!",
  errorMessage = "Failed to copy message.",
) => {
  if (typeof window === "undefined") return;

  // Modern Clipboard API
  if (navigator.clipboard && window.isSecureContext) {
    try {
      await navigator.clipboard.writeText(text);
      if (successMessage) toast.success(successMessage);
      return true;
    } catch (err) {
      console.error("Failed to copy using modern API:", err);
    }
  }

  // Fallback for unsecured contexts (e.g., HTTP sites without SSL, certain mobile webviews)
  try {
    const textArea = document.createElement("textarea");
    textArea.value = text;

    // Position the element off-screen
    textArea.style.position = "fixed";
    textArea.style.top = "0";
    textArea.style.left = "0";
    textArea.style.width = "2em";
    textArea.style.height = "2em";
    textArea.style.padding = "0";
    textArea.style.border = "none";
    textArea.style.outline = "none";
    textArea.style.boxShadow = "none";
    textArea.style.background = "transparent";

    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();

    const successful = document.execCommand("copy");
    document.body.removeChild(textArea);

    if (successful) {
      if (successMessage) toast.success(successMessage);
      return true;
    } else {
      if (errorMessage) toast.error(errorMessage);
      return false;
    }
  } catch (err) {
    console.error("Fallback copy failed:", err);
    if (errorMessage) toast.error(errorMessage);
    return false;
  }
};
