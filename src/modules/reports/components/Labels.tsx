import {Text} from "react-native-svg";
import React from "react";

export const Labels = ({ slices }: { slices?: any}) => {
    return slices.map((slice, index) => {
        const {pieCentroid, data} = slice;
        return (
            <Text
                key={index}
                x={pieCentroid[ 0 ]}
                y={pieCentroid[ 1 ]}
                fill={'white'}
                textAnchor={'middle'}
                alignmentBaseline={'middle'}
                fontSize={18}
                stroke={'black'}
                strokeWidth={0.2}
            >
                {data.amount}
            </Text>
        )
    })
}