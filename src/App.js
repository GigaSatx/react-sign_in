import "./App.css";
import MyNav from "./Components/MyNav";
import SignIn from "./Components/Form";
import PageContent from "./Components/PageContent";
import { ThemeProvider } from "./Contexts/ThemeContext";
import { LanguageProvider } from "./Contexts/LanguageContext";

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <PageContent>
          <MyNav />
          <SignIn />
        </PageContent>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
