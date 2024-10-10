import store from "./redux/store";
import { Provider } from "react-redux";
import QuoteMaster from "./components/Quote";
import './styles/app.scss';

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <QuoteMaster />
      </div>
    </Provider>
  );
};

export default App;
