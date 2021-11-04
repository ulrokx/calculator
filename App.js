import * as React from 'react';
import { render } from 'react-dom';
import { View, useWindowDimensions} from 'react-native';
import {TabView, SceneMap} from 'react-native-tab-view';
import Calculator from './screens/calculator';
import Mappy from './screens/map'
import Runner from './screens/runner';

const CalcPage = () => {
    return (
    <Calculator/>
    )
}
const MapPage = () => {
    return (
    <Mappy/>
    )
}  
const Collatz = () => {
    return (
    <Runner/>
    )
}
const renderScene = SceneMap({
    first: CalcPage,
    second: MapPage,
    third: Collatz,
});

export default function App () {
    const layout = useWindowDimensions();

    const [index, setIndex] = React.useState(0)
    const [routes] = React.useState([
        { key: 'first', title: 'calculator'},
        { key: 'second', title: 'map'},
        { key: 'third', title: 'runner'}
    ]);

    return (
        <TabView
            navigationState={{ index, routes }}
            renderScene = {renderScene}
            onIndexChange={setIndex}
            initialLayout={{ width: layout.width}}
            renderTabBar={() => null}

        />
    )
}