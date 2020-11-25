import { useRouter } from "next/router";
import useSWR from "swr";
import HondaCanada from "../../components/HondaCanada";

const fetcher = async (url) => {
  const res = await fetch(url);
  const data = await res.json();

  if (res.status !== 200) {
    throw new Error(data.message);
  }
  return data;
};

export default function Honda() {
  const { query } = useRouter();
  const { data, error } = useSWR(
    () => query.id && `/api/honda/${query.id}`,
    fetcher
  );

  let listing = data ? data : null;
  console.log(listing)

  if (error) return <div>{error.message}</div>;
  if (!data) return <div>Loading...</div>;

  return <HondaCanada listing={listing} />;
}
