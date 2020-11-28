import parser from "../../../common/parser";

export default async function (req, res) {
  try {
    const url = `https://cuv.honda.ca/en/inventory/search?make=Honda&stock_type=Used&sort_by=price&sort_order=ASC&page_length=50`;
    const r = await fetch(url);
    const t = await r.text();
    res.status(200).send(parser(t));
  } catch (err) {
    res.status(400).send(err);
  }
}
