import React from 'react'

class InnerComponent extends React.Component {
    render() {
        return (
            <div>
                <h1>
                    This Is My Inner Component.
                </h1>
            </div>

        );
    };
};

class OuterComponent extends React.Component {
    render() {
        return (
            <div>
                <h1>
                    This Is My Outer Component.
                </h1>
            </div>

        );
    };
};

class NestedComponent extends React.Component {
    render() {
        return (
            <div>
                <h1>

                    This Is My Nested Component.
                </h1>

                <InnerComponent />
                <OuterComponent />



            </div>

        );
    };
};

export default NestedComponent;