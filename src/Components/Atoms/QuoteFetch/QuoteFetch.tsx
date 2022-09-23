import { QueryClient, QueryClientProvider } from "react-query";
import QuoteText from "./QuoteText"

const queryClient = new QueryClient();

export default function QuoteFetch() {
  return (
    <QueryClientProvider client={queryClient}>
      <QuoteText />
    </QueryClientProvider>
  )
}

