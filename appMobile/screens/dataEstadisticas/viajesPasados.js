import React, { useState, useEffect } from "react";
import { View } from 'react-native'
import { BarChart, XAxis, gri } from 'react-native-svg-charts'
import {Card} from 'react-native-paper'
import * as scale from 'd3-scale'


const viajesPasados = ({navigation}) => {

  const data = [
    {
        value: 50,
        label: 'Viajes',
    },
    {
        value: 10,
        label: 'Facturado',
    },
    {
        value: 40,
        label: 'Three',
    },
    {
        value: 95,
        label: 'Four',
    },
    {
        value: 85,
        label: 'Five',
    },
]

const CUT_OFF = 20
        const Labels = ({ x, y, bandwidth, data }) => (
            data.map((value, index) => (
                <Text
                    key={ index }
                    x={ x(index) + (bandwidth / 2) }
                    y={ value < CUT_OFF ? y(value) - 10 : y(value) + 15 }
                    fontSize={ 14 }
                    fill={ value >= CUT_OFF ? 'white' : 'black' }
                    alignmentBaseline={ 'middle' }
                    textAnchor={ 'middle' }
                >
                    {value}
                </Text>
            ))
        )

  return (
    <View style={{ height: 200, padding: 20 }}>
        <BarChart
            style={{ flex: 1 }}
            data={data}
            gridMin={0}
            svg={{ fill: 'rgb(134, 65, 244)' }}
            yAccessor={({ item }) => item.value}
        />
        <XAxis
            style={{ marginTop: 10 }}
            data={ data }
            scale={scale.scaleBand}
            formatLabel={(_, index) => data[ index ].label}
            labelStyle={ { color: 'black' } }
        />
    </View>
  )
}



export default viajesPasados;
