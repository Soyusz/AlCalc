import { ThemeProvider } from "styled-components";
import { QueryClientProvider, QueryClient } from "react-query";
import { Navigator } from "./components/Navigation/Navigator";
import { UserContextProvider } from "./contexts/UserProvider";
import { defaultTheme } from "./utils/theme";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <ThemeProvider theme={defaultTheme}>
        <QueryClientProvider client={new QueryClient()}>
          <UserContextProvider>
            <Navigator />
          </UserContextProvider>
        </QueryClientProvider>
      </ThemeProvider>
    </Router>
  );
}

export default App;
