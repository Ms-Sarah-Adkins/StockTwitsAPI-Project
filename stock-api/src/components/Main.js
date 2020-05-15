import React from 'react';
import { Button } from 'reactstrap';
import Add from './Add';
import SymbolList from './SymbolList';

class Main extends React.Component {
    render() {
        return (
            <React.Fragment>
                <h1>Frontend Engineer Challenge</h1>
                <Add />
                <SymbolList />
            </React.Fragment>
        );
    }
}

export default Main;