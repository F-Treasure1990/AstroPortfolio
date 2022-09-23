import type { CSSProperties } from "react"
import "./QuoteText.scss"
import useQuote from "src/Hooks/useQuote";
import { PuffLoader } from "react-spinners"



const QuoteText = () => {
  const { data, isSuccess, refetch, isLoading } = useQuote();
  return (
    <figure className="quote-text__container" onClick={() => refetch()}>
      {isLoading && <PuffLoader color="var(--c-accent)" size={10}/>}
      {isSuccess && (
        <>
          <figcaption className="quote-text__author">{data?.author}</figcaption>
          <blockquote className="quote-text__quote">
            &quot; {data?.content?.split(".")} &quot;
          </blockquote>
        </>
      )}
    </figure>
  )
}

export default QuoteText
