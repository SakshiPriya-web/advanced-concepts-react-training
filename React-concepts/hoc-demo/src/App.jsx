import withCounter from './components/withCounter';
import Counter from './components/Counter';
import './App.css';

const EnhancedCounter = withCounter(Counter);
const App = () => {
  return <EnhancedCounter/>;
};
export default App;