import React from 'react';
import { View, ActivityIndicator,Text } from 'react-native';
// import styled from 'styled-components/native';

// const LoadingWrap = styled.View`
//   flex: 1;
//   justify-content: center;
//   align-items: center;
// `;

const Loading = () => {
    return (
        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
            <ActivityIndicator size="large" />
            <Text>Loading ...</Text>
        </View>
    );
};

export default Loading;
