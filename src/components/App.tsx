import { Provider } from "react-redux";
import { store } from "../state";
import RepoSearch from "./RepoSearch";
import { Typography, Container } from "@material-ui/core";

const App = () => {
  return (
    <Provider store={store}>
      <Container maxWidth="md">
        <Typography variant="h3" gutterBottom>
          Search for a package
        </Typography>
        <RepoSearch />
      </Container>
    </Provider>
  );
};

export default App;
