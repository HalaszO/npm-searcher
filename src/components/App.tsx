import { Provider } from "react-redux";
import { store } from "../state";
import RepoSearch from "./RepoSearch";

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <h1>Search for a package</h1>
        <RepoSearch />
      </div>
    </Provider>
  );
};

export default App;
