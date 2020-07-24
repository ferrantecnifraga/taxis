import React, { useState, useEffect } from "react";
import { View } from 'react-native'
import { BarChart, XAxis } from 'react-native-svg-charts'
import {Card} from 'react-native-paper'
import * as scale from 'd3-scale'

const cantidadViajes = ({navigation}) => {
    
    const data = [ 14, 80, 100, 55 ]

      return (
        <Card style={{ height: 200, padding: 20 }}>
            <BarChart
                style={{ flex: 1 }}
                data={data}
                gridMin={0}
                svg={{ fill: 'rgb(134, 65, 244)' }}
            />
            <XAxis
                style={{ marginTop: 10 }}
                data={ data }
                scale={scale.scaleBand}
                formatLabel={ (value, index) => index }
                labelStyle={ { color: 'black' } }
            />
        </Card>
      )
  }

  export default cantidadViajes;
