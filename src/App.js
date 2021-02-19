import './App.css';
import InlineStyle from './components/InlineStyle';
import StyleSheets from './components/StyleSheets';

// problem is if 'line 21' is used in any other component, it will be applied there as well
import './appStyles.css'

// css modules are imported this way.
// it cannot be used in any other component as it can be used using variable 'styles'
import styles from './appStyles.module.css'; 

function App() {


  return (
    //<StyleSheets primary={false}/>
    //<InlineStyle/>
    <div>
    
    
    <h1 className="error">Error (using basic css stylesheets)</h1>
    
    <h1 className={styles.success}>Success using css modules </h1>
    </div>
  );
}

export default App;
