import { sendMessage, sendMedia } from "../../utils/whatsapp"; // Adjust imports as needed
import type { Command } from "../../types/command";

// Example PDFs storage
const pdfs = {
  "example1": "http://example.com/pdf1.pdf",
  "example2": "http://example.com/pdf2.pdf",
  // Add more PDFs with unique keys
};

export default <Command>{
  category: "misc",
  desc: "Send PDF by name",
  execute: async ({ message, arg }) => {
    const pdfName = arg.trim();
    const pdfUrl = pdfs[pdfName];

    if (pdfUrl) {
      // Fetch the PDF from the URL and send as media (assuming sendMedia handles this)
      await sendMedia(message.from, pdfUrl, "document");
      return sendMessage(message.from, `Sent PDF: ${pdfName}`);
    } else {
      return sendMessage(message.from, "PDF not found. Please check the name and try again.");
    }
  }
}
