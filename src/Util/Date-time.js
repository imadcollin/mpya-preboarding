import React from 'react';

 class DateTime extends React.Component {
    constructor() {
        super();

        var today = new Date(),
            date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();

        this.state = {
            date: date,
            text: "someData"
        };
    }

    render() {
        return (
            <div className='date'>
                <h2>{this.state.date}</h2>
        <h2>test</h2> 
        <h2>{this.props.text}</h2> 

        {/* this have to be accessed out of this Component */}
            </div>
        );
    }
}

export default DateTime;