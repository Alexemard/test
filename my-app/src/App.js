import { useState } from 'react';
import './App.css';

function App() {
  const [bread, setBread] = useState('Wheat');
  const [protein, setProtein] = useState('Turkey');
  const [extras, setExtras] = useState({
    lettuce: false,
    tomato: false,
    cheese: false,
  });
  const [submitted, setSubmitted] = useState(false);

  const handleExtrasChange = (e) => {
    const { name, checked } = e.target;
    setExtras(prev => ({ ...prev, [name]: checked }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const extrasList = Object.keys(extras).filter(k => extras[k]).join(', ') || 'None';
  const summary = `Bread: ${bread}, Protein: ${protein}, Extras: ${extrasList}`;

  return (
    <div className="App">
      <h1>Order a Sandwich</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Bread:
          <select value={bread} onChange={e => setBread(e.target.value)}>
            <option>Wheat</option>
            <option>White</option>
            <option>Rye</option>
          </select>
        </label>
        <label>
          Protein:
          <select value={protein} onChange={e => setProtein(e.target.value)}>
            <option>Turkey</option>
            <option>Ham</option>
            <option>Veggie</option>
          </select>
        </label>
        <fieldset>
          <legend>Extras</legend>
          <label>
            <input
              type="checkbox"
              name="lettuce"
              checked={extras.lettuce}
              onChange={handleExtrasChange}
            />
            Lettuce
          </label>
          <label>
            <input
              type="checkbox"
              name="tomato"
              checked={extras.tomato}
              onChange={handleExtrasChange}
            />
            Tomato
          </label>
          <label>
            <input
              type="checkbox"
              name="cheese"
              checked={extras.cheese}
              onChange={handleExtrasChange}
            />
            Cheese
          </label>
        </fieldset>
        <button type="submit">Place Order</button>
      </form>
      {submitted && (
        <p data-testid="summary">{summary}</p>
      )}
    </div>
  );
}

export default App;
