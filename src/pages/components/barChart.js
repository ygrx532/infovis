import React from 'react';
import * as d3 from 'd3';
import Bars from './bars';
import XAxis from './xAxis';
import YAxis from './yAxis';

function BarChart(props){
    const {offsetX, offsetY, data, xScale, yScale, height, width, selectedStation, setSelectedStation} = props;
    //task1: transform the <g> with the offsets so that the barchart can show properly 
    const transform = `translate(${offsetX}, ${offsetY})`;

    //task2: import the components needed and uncomment the components in the return 

    return (
        <g transform={transform}>
            <Bars data={data} xScale={xScale} yScale={yScale} height={height} 
            selectedStation={selectedStation} setSelectedStation={setSelectedStation}/>
            <YAxis yScale={yScale} height={height} axisLable={"Bikers start from"}/>
            <XAxis xScale={xScale} height={height} width={width}/>
        </g>
    );
}

export default BarChart