import * as React from "react";
import type { NextPage } from "next";
import Image from "next/image";
import classes from "~/styles/home/Book.module.scss";
import useSWR from "swr";
import type { Data, Item } from "~/types/books";

const Home: NextPage = () => {
  async function fetcher(url: string): Promise<Data | null> {
    const response = await fetch(url);
    return response.json();
  }
  const { data } = useSWR(
    "https://www.googleapis.com/books/v1/volumes?q=鬼滅&maxResults=10",
    fetcher
  );

  const items: Item[] | undefined = data?.items;

  const handleClick = () => console.log("hello");
  return (
    <div className={classes.container}>
      <div className={classes.grid}>
        {items?.map((item) => (
          <div key={item.id} className={classes.card}>
            <div className={classes.image}>
              <img
                src={item.volumeInfo.imageLinks?.thumbnail}
                width="212px"
                height="300px"
                alt="No data"
              />
            </div>
            <div className={classes.information}>
              <h6 className={classes.title}>{item.volumeInfo.title}</h6>
              <p className={classes.description}>
                {item.volumeInfo.description}
              </p>
              <p className={classes.price}>{item.volumeInfo.pageCount}ページ</p>
              <button className={classes.button} onClick={handleClick}>
                check
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
