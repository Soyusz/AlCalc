import { QueryClientProvider, QueryClient } from "react-query";
import { Navigator } from "./components/Navigation/Navigator";
import { UserContextProvider } from "./contexts/UserProvider";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./utils/theme";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <UserContextProvider>
        <QueryClientProvider client={new QueryClient()}>
          <Navigator />
        </QueryClientProvider>
      </UserContextProvider>
    </ThemeProvider>
  );
}

export default App;
