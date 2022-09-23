import { useQuery } from "react-query";

const fetchQuotes = async () => {
  const res = await fetch(
    "https://api.quotable.io/random?tags=wisdom|inspirational|love|happiness|life|faith"
  );
  try {
    return await res.json();
  } catch (error) {
    return { error };
  }
};

const useQuote = () => {
  return useQuery("quotes", fetchQuotes, {
    refetchOnWindowFocus: false,
    /* refetchInterval:1000, */
  });
};

export default useQuote;
