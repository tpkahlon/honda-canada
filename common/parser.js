import { JSDOM } from "jsdom";

export default function (t) {
  const dom = new JSDOM(t);
  const list = dom.window.document;
  const allScripts = list.querySelectorAll("script");
  const allScriptsArray = [...allScripts];
  let listing = null;
  allScriptsArray.forEach((i) => {
    if (i.text.includes("window.strathcomSearchData = {")) {
      listing = i.text.substring(46);
      listing = listing.substring(0, listing.length - 12);
      listing = JSON.parse(listing);
    }
  });
  return listing;
}
