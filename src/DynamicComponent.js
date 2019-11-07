import React from "react";

function DynamicComponent(componentImport) {
    return class extends React.Component {
        constructor(props) {
            super(props);

            this.state = { Component: null };

            componentImport().then(loaded => this.setState({ Component: loaded.default }));
        }

        render() {
            if (this.state.Component === null) {
                return <div>Loading component, please wait</div>;
            }

            return <this.state.Component {...this.props} />;
        }
    };
}

export default DynamicComponent;
