import parse from "html-react-parser";

export function convertToHTMLTags(str) {
  /**
   * Reads basic MarkDown (MD) from string and converts to apporpritate text.
   * Only allows reserved formatting ability to user to protect data integrity
   * (also avoids and XSS attacks)
   *
   */

  // Replace ** with <strong> </strong>
  str = str.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");

  // Replace -- with <em> </em>
  str = str.replace(/--(.*?)--/g, "<em>$1</em>");

  // Replace \n with <br />
  str = str.replace(/\n/g, "<br />");

  return parse(str);
}
