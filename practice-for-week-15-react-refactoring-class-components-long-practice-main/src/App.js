import React, {useState} from 'react';
import Clock, { ClockToggle } from './components/Clock';
import Folder from './components/Folder';
import Weather from './components/Weather';
import Autocomplete from './components/Autocomplete';

const names = [
  'Abba',
  'Barbara',
  'Barney',
  'Jeff',
  'Jenny',
  'Sally',
  'Sarah',
  'Xander'
];

const folders = [
  { title: 'one', content: 'I am the first' },
  { title: 'two', content: 'Second folder here' },
  { title: 'three', content: 'Third folder here' }
];


function App() {
    const [showClock, setShowClock] = useState(true)
    const clickHandler = e => {
        e.preventDefault();

        setShowClock((oldShowClock) => !oldShowClock)
    }

  return (
      <> 
        <div className="widgets">
            <Folder folders={folders} />
            <Weather />
          <button onClick={clickHandler}>Toggle Clock</button>
          {showClock && (
            <Clock />
          )}
            <Autocomplete names={names} />
        </div>
      </>
  );
}

export default App;
// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       showClock: true
//     };
//   }


//   toggleClock = () => this.setState({ showClock: !this.state.showClock });
  
//   render () {
//     return (
//       <div className="widgets">
//         <Folder folders={folders} />
//         <Weather />
//         <ClockToggle toggleClock={this.toggleClock} />
//         {this.state.showClock && <Clock />}
//         <Autocomplete names={names} />
//       </div>
//     );
//   }
// }

