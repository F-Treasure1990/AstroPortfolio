import "./QuoteText.scss"
import useQuote from "src/Hooks/useQuote";
import { CubeSpinner } from "react-spinners-kit"


export default function QuoteText() {
  const { data, isSuccess, refetch, isLoading } = useQuote();
  return (
    <figure className="quote-text__container" onClick={() => refetch()}>
      {isLoading && <CubeSpinner frontColor="var(--c-accent)" backColor="var(--c-highlight)" size={20} />}
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

