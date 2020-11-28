import useSWR from "swr";
import App from "../components/App";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Index() {
  const { data, error } = useSWR("/api/honda", fetcher);

  let listing = data ? data : null;

  if (error) return <div>Failed to load...</div>;
  if (!data) return <div>Loading...</div>;

  return <App listing={listing} />;
}
