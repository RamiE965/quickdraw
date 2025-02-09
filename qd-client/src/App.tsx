import { useState } from 'react';
import  { HelpModal } from './components/HelpModal.tsx'

import './index.css';

const App = () => {
    const [showHelp, setShowHelp] = useState(false);

    return (
        <> 
            <button className="button-3d" onClick={() => setShowHelp(true)}>?</button>
            <HelpModal isVisible={showHelp} onClose={() => setShowHelp(false)} />
        </> 
    );
};

export default App;