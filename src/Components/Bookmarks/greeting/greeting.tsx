import * as React from 'react';
import './greeting.css';
import { action } from 'mobx';

interface GreetingProps {
    surname: string;
}

export class Greeting extends React.Component<GreetingProps, any> {

    private greeting: string;

    constructor(props: any) {
        super(props);
        this.greeting = 'Hi ' + this.props.surname + ', Welcome to Barbra.';
    }

    @action('set Theme')
    setTheme = (selectedTheme: string) => {
        this.greeting = 'Your ' + selectedTheme + ' content';
    }

    render() {
        return (
            <div id={'greeting'}>
                {this.greeting}
            </div>
        );
    }
}