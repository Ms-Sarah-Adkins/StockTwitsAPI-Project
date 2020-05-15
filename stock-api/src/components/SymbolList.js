import React from 'react';
import { InputGroup, InputGroupAddon, InputGroupText, Input, Button } from 'reactstrap';
import SymbolTweets from './SymbolTweets';

class SymbolList extends React.Component {
    render() {
        return (
            <React.Fragment>
                <SymbolTweets />
            </React.Fragment>
        );
    }
}

export default SymbolList;