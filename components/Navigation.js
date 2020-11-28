import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const Navigation = ({ pages }) => {
  const router = useRouter();

  let navigation = [...new Array(pages)].map((i, index) => (
    <Link href="/honda/[id]" as={`/honda/${++index}`} key={index} >
      <a className={router.query.id == index ? "active" : null}>{index++}</a>
    </Link>
  ));
  return <nav>{navigation}</nav>;
};

export default Navigation;
