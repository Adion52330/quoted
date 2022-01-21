import Head from "next/head";
import React, { useEffect, useState } from "react";
import SyncIcon from "@mui/icons-material/Sync";
import { useRouter } from "next/router";
import Quote from "./Quote";

const Main = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [quote, setQoute] = useState({
    data: [
      {
        _id: "5eb17ab1b69dc744b4e7ba5f",
        quoteText: "Do it or Don't. There is no try.",
        quoteAuthor: "Yoda",
        quoteGenre: "Inspirational",
        __v: 0,
      },
    ],
  });

  const getQuote = async () => {
    setIsLoading(true);
    const res = await fetch(
      "https://quote-garden.herokuapp.com/api/v3/quotes/random"
    );
    const data = await res.json();
    setQoute(data);
    setIsLoading(false);
  };

  useEffect(() => {
    getQuote();
  }, []);

  return (
    <div className="relative min-h-screen">
      <div
        className="flex absolute right-0 justify-end m-2 cursor-pointer"
        onClick={getQuote}
      >
        <p>random</p>
        <SyncIcon className={`${isLoading && "animate-spin"}`} />
      </div>
      <div
        className={`flex flex-col space-y-10 md:mt-0 ${
          quote?.data[0]?.quoteText.length < 200 && "justify-center"
        } md:justify-center items-center h-screen`}
      >
        <Quote isLoading={isLoading} text={quote?.data[0]?.quoteText} />
        <div
          className={`flex w-full mx-10 md:w-[614px] py-10 justify-between px-10 items-center hover:bg-[#333333] hover:text-white transition cursor-pointer ${
            isLoading && "animate-pulse"
          }`}
          onClick={() => {
            router.push(`/${quote?.data[0]?.quoteAuthor}`);
          }}
        >
          <div className="flex flex-col">
            <p className="font-bold text-2xl">{quote?.data[0]?.quoteAuthor}</p>
            <p>{quote?.data[0]?.quoteGenre}</p>
          </div>
          <p className="">&#8594;</p>
        </div>
      </div>
    </div>
  );
};

export default Main;
