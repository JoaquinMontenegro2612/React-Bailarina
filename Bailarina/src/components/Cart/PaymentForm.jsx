import { Box, FormControl,FormLabel } from '@chakra-ui/react';
import React from 'react';
import Cards from 'react-credit-cards';

export default class PaymentForm extends React.Component {
state = {
cvc: '',
expiry: '',
focus: '',
name: '',
number: '',
};

handleInputFocus = (e) => {
this.setState({ focus: e.target.name });
}

handleInputChange = (e) => {
const { name, value } = e.target;

this.setState({ [name]: value });
}

render() {debugger;
return (
    
    <Box id="PaymentForm">
        
    <Cards
        cvc={this.state.cvc}
        expiry={this.state.expiry}
        focused={this.state.focus}
        name={this.state.name}
        number={this.state.number}
    />
    <FormControl>
        <FormLabel
        type="tel"
        name="number"
        placeholder="Card Number"
        onChange={this.handleInputChange}
        onFocus={this.handleInputFocus}
        />
        ...
    </FormControl>
    </Box>
);
}
}