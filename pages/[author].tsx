import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Quote from "./components/Quote";

const Author = () => {
  const [quoteData, setQuoteData] = useState({
    statusCode: 200,
    message: "Quotes",
    pagination: {
      currentPage: 1,
      nextPage: null,
      totalPages: 1,
    },
    totalQuotes: 2,
    data: [
      {
        _id: "5eb17aaeb69dc744b4e74a78",
        quoteText:
          "IN April 1882 my father died and I was at once whirled out of my land of dreams into a very different sphere.",
        quoteAuthor: "Edward Carpenter",
        quoteGenre: "dreams",
        __v: 0,
      },
      {
        _id: "5eb17ab1b69dc744b4e7b07a",
        quoteText:
          "It is curious that, with my somewhat antinomian tendencies, I should have gone to Trinity Hall - which was, and is, before all a Law College - and should thus have been thrown into close touch with the legal element in life.",
        quoteAuthor: "Edward Carpenter",
        quoteGenre: "legal",
        __v: 0,
      },
    ],
  });
  const router = useRouter();
  const author = router.query.author;

  const getQuote = async () => {
    const res = await fetch(
      `https://quote-garden.herokuapp.com/api/v3/quotes/?author=${author}`
    );
    const data = await res.json();
    setQuoteData(data);
  };

  useEffect(() => {
    getQuote();
  }, []);

  console.log(quoteData);

  return (
    <div className="relative min-h-screen">
      <div
        className="flex absolute font-bold right-0 justify-end m-2 cursor-pointer"
        onClick={() => {
          router.push(`/`);
        }}
      >
        <p>Go back</p>
      </div>
      <div className="flex flex-col space-y-10 items-center h-screen">
        <div
          className={`flex flex-col  space-y-10 py-10 items-start px-10 justify-center transition `}
        >
          <p className="font-bold text-4xl">{author}</p>
          {quoteData.data.map((quote, index) => (
            <Quote
              key={index}
              text={quote.quoteText}
              author={quote.quoteAuthor}
              genre={quote.quoteGenre}
            />
          ))}
        </div>
        <Quote />
      </div>
    </div>
  );
};

export default Author;
