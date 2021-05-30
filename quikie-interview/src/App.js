
import './App.css';
// import Table from ''
import Button from './components/atoms/Button'
import Badge from './components/atoms/Badge'
import Header from './components/molecules/Header'
import StockTable from './components/molecules/StockTable'
const onClickHandler = (e) => {
  console.log('e.target.value', e.target.value)

}
function App() {
  return (
    <div className="App">
      <Header />
      <Button
        color='rgb(51, 153, 255)'
        name='Save Data'
        onClickHandler={onClickHandler}
      />
      <Badge />
      <StockTable />
    </div>
  );
}

export default App;
