import React from 'react';
import {AppLoading} from 'expo';
import {Container} from 'native-base';
import * as Font from 'expo-font';
import {Ionicons} from '@expo/vector-icons';
import {RootApp} from "./src/modules/root/RootApp";

interface State {
    isReady: boolean;
}

class App extends React.Component<any, State> {
    state = {
        isReady: false,
    };

    async componentDidMount() {
        await Font.loadAsync({
            Roboto: require('native-base/Fonts/Roboto.ttf'),
            Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
            ...Ionicons.font,
        });
        this.setState({isReady: true});
    }

    render() {
        if (!this.state.isReady) {
            return <AppLoading/>;
        }

        return (
            <Container>
                <RootApp/>
            </Container>
        );
    }
}

export default App;
