import * as React from "react";
import type { NextPage } from "next";
import Image from "next/image";
import classes from "~/styles/library/Record.module.scss";
import useSWR from "swr";
import type { Data, Item } from "~/types/books";

import Circle from "react-circle";

const Home: NextPage = () => {
  async function fetcher(url: string): Promise<Data | null> {
    const response = await fetch(url);
    return response.json();
  }
  const { data } = useSWR(
    "https://www.googleapis.com/books/v1/volumes?q=鬼滅&maxResults=10",
    fetcher
  );

  //進捗率
  const [progress, setProgress] = React.useState(0);

  //レンダリング時に進捗率をセット
  React.useEffect(() => {
    setProgress(80);
  }, [setProgress]);

  const items: Item[] | undefined = data?.items;

  const handleClick = () => console.log("hello");
  return (
    <div className={classes.container}>
      <div className={classes.grid}>
        {items?.map((item) => (
          <div key={item.id} className={classes.card}>
            <div
              style={{
                textAlign: "center",
                position: "relative",
              }}
            >
              <Circle
                progress={progress} //進捗率
                size="280px"
                lineWidth="40px" //円グラフの線幅
                progressColor="#00ac4f"
                roundedStroke={true}
                animationDuration="1s" //アニメーション時間
              />
              <img
                src={item.volumeInfo.imageLinks?.thumbnail}
                width="120px"
                height="168px"
                alt="No data"
                className={classes.image}
                style={{
                  position: "absolute",
                  top: "58px",
                  left: "78px",
                  boxShadow: "10px 10px 2rem rgba(0, 0, 0, 0.3)",
                  transition: "0.5s",
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
