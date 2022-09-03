import './App.css';
import drugs from "./db/drug_info.json"

function App() {
  return (
    <div className="App">
      <div className='header'>
        {/* <h1>DRUGS BLOG</h1> */}
      </div>

      <div className='container'>
        <div className='drugs'>
          {
            drugs.map(drug => (
              <div className='drug'>

                <h1> {drug.drugName} </h1>
              </div>
            ))
          }
        </div>

        <div className='sidebar'>
          Sidebar
        </div>
      </div>
    </div>
  );
}

export default App;
