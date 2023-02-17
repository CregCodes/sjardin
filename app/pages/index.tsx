import Head from "next/head";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Sjardin</title>
      </Head>
      <main className="underline font-bold">
        <h1>WELCOME TO SJARDIN (AGAIN)</h1>
      </main>
    </>
  );
}
