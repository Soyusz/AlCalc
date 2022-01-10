import { QueryClientProvider, QueryClient } from "react-query";
import { Navigator } from "./components/Navigation/Navigator";
import { UserContextProvider } from "./contexts/UserProvider";

function App() {
  return (
    <>
      <UserContextProvider>
        <QueryClientProvider client={new QueryClient()}>
          <Navigator />
        </QueryClientProvider>
      </UserContextProvider>
    </>
  );
}

export default App;
