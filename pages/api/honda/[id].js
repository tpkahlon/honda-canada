import parser from "../../../common/parser";

export default async function ({ query: { id } }, res) {
  try {
    const url = `https://cuv.honda.ca/en/inventory/search?make=Honda&stock_type=Used&sort_by=price&sort_order=ASC&page_length=100&page=${id}`;
    const r = await fetch(url);
    const t = await r.text();
    const parsedListing = parser(t);

    // Page with id exists
    if (parsedListing !== null) {
      res.status(200).send(parsedListing);
    } else {
      res.status(404).send({ message: `Page with id: ${id} not found.` });
    }
  } catch(err) {
    res.status(400).send(err);
  }
}
