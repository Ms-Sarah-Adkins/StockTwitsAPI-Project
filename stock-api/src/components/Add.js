import React from 'react';
import { InputGroup, InputGroupAddon, InputGroupText, Input, Button } from 'reactstrap';

class Add extends React.Component {
    render() {
        return (
            <React.Fragment>
                <InputGroup>
                    <InputGroupAddon addonType="prepend">
                        <InputGroupText>$</InputGroupText>
                    </InputGroupAddon>
                    <Input placeholder="Symbol" />
                    <InputGroupAddon addonType="append">
                        <Button>Add</Button>
                    </InputGroupAddon>
                </InputGroup>
            </React.Fragment>
        );
    }
}

export default Add;