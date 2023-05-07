import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Router from './components/Router'
import {
    RecoilRoot,
} from 'recoil';

function App() {
    const [hello, setHello] = useState('')

    return (
        <RecoilRoot>
            <Router/>
        </RecoilRoot>
    );
}

export default App;