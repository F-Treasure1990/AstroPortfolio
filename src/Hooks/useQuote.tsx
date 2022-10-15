import { useQuery } from "react-query";

async function fetchQuotes(){
  const res = await fetch(
    "https://api.quotable.io/random?tags=wisdom|inspirational|love|happiness|life|faith"
  );
  try {
    return await res.json();
  } catch (error) {
    return { FentonsError:error };
  }
};

export default function useQuote() {
  return useQuery("quotes", fetchQuotes, {
    refetchOnWindowFocus: false,
    /* refetchInterval:1000, */
  });
};

