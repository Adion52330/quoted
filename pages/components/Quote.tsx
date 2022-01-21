const Quote = (props: any) => {
  return (
    <div
      className={`text-5xl mx-5 pl-5 border-l-8 leading-relaxed border-[#F7DF94] text-left ${
        props.isLoading && "animate-pulse"
      }`}
    >
      {props.text}
    </div>
  );
};

export default Quote;
