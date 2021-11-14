import React from "react";
import { useRouter } from 'next/router'
import { Wrapper } from "~/components/Wrapper";
import styles from "~/styles/Content.module.scss";

const Content: React.VFC = () => {
  const router = useRouter();
  return (
    <Wrapper>
      <img src="/wave001.svg" width="100%" height="100%" alt="Wave" />
      <h1 className={styles.header}>Teelog</h1>
      <button onClick={() => router.push('/home')}>
        send to home
      </button>
    </Wrapper>
  );
};

export default Content;
