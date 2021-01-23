import { Provider } from "react-redux";
import { store } from "../store/store";
import RepositoriesList from "./RepositoriesList/RepositoriesList";

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <h1>Search for a NPM package</h1>
        <RepositoriesList />
      </div>
    </Provider>
  );
};

export default App;
