import { QueryClientProvider, QueryClient } from "react-query";
import { Navigator } from "./components/Navigation/Navigator";

function App() {
  return (
    <>
      <QueryClientProvider client={new QueryClient()}>
        <Navigator />
      </QueryClientProvider>
    </>
  );
}

export default App;
