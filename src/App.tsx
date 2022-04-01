import { ThemeProvider } from "styled-components";
import { QueryClientProvider, QueryClient } from "react-query";
import { Navigator } from "./components/Navigation/Navigator";
import { UserContextProvider } from "./contexts/User/UserProvider";
import { defaultTheme } from "./utils/theme";
import { BrowserRouter as Router } from "react-router-dom";
import "react-loading-skeleton/dist/skeleton.css";
import { CacheContextProvider } from "./contexts/Cache/CacheProvider";
import { HistoryProvider } from "./contexts/History/HistoryProvider";

function App() {
  return (
    <HistoryProvider>
      <Router>
        <ThemeProvider theme={defaultTheme}>
          <CacheContextProvider>
            <QueryClientProvider client={new QueryClient()}>
              <UserContextProvider>
                <Navigator />
              </UserContextProvider>
            </QueryClientProvider>
          </CacheContextProvider>
        </ThemeProvider>
      </Router>
    </HistoryProvider>
  );
}

export default App;
