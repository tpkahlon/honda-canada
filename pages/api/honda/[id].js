import {JSDOM} from 'jsdom'

export default async function hondaHandler({ query: { id } }, res) {
    const r = await fetch(`https://cuv.honda.ca/en/inventory/search?make=Honda&stock_type=Used&sort_by=price&sort_order=ASC&page_length=500&page=${id}`);
    const t = await r.text();
    const dom = new JSDOM(t);
    const list = dom.window.document;
    const allScripts = list.querySelectorAll('script');
    const allScriptsArray = [...allScripts];
    let listing = null;
    allScriptsArray.forEach(i => {
        if(i.text.includes('window.strathcomSearchData = {')) {
            listing = i.text.substring(46);
            listing = listing.substring(0, listing.length - 12);
            listing = JSON.parse(listing);
        }
    });

  // User with id exists
  if (listing !== null) {
    res.status(200).send(listing)
  } else {
    res.status(404).send({ message: `Page with id: ${id} not found.` })
  }
}
