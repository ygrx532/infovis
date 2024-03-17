


import React from 'react';
import * as d3 from 'd3';

function YAxis({ yScale, height, axisLable }) {
    const axisRef = React.useRef(null);

    React.useEffect(() => {
        if (yScale) {

            const yAxisGenerator = d3.axisLeft(yScale);
            yAxisGenerator.ticks(12);

            d3.select(axisRef.current).call(yAxisGenerator);
        }
    }, [yScale]);

    if (yScale){

        return (
            <g ref={axisRef} transform={`translate(0, 0)`}>
                <text
                    style={{ textAnchor: 'end', fontSize: '15px', fill: 'black'}}
                    transform={`translate(20, 0)rotate(-90)`}>
                    {axisLable}
                </text>
            </g>
        );
    } else {
        return<g></g>
    }
}

export default YAxis;









