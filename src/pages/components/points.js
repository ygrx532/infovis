import React, { useState } from 'react';

function Points(props) {
    const { data, xScale, yScale, selectedStation, setSelectedStation, setTooltipData, setTooltipX, setTooltipY} = props;

    const handleMouseEnter = (d, event) => {
        setSelectedStation(d.station);
        setTooltipData(d);
        setTooltipX(xScale(event.pageX));
        setTooltipY(yScale(event.pageY));
        
    };

    const handleMouseLeave = () => {
        setSelectedStation(null);
        setTooltipData(null);
        setTooltipX(null);
        setTooltipY(null);
    };

    const getColor = (selectedStation, station) => 
        selectedStation === station ? 'red' : 'steelblue';

    const getRadius = (selectedStation, station) => 
        selectedStation === station ? 10 : 5;
    
    if (data){

    return (
        <g>
            {selectedStation && (
                // Draw a yellow rectangle behind all points when one is selected
                // Ensure the rectangle covers the full area by adjusting width and height as needed
                <rect x={0} y={0} width="100%" height="100%" fill="yellow" fillOpacity="0.5" />
            )}
            {data.map((d, i) => (
                <circle
                    key={i}
                    cx={xScale(d.tripdurationS)}
                    cy={yScale(d.tripdurationE)}
                    r={getRadius(selectedStation, d.station)}
                    fill={getColor(selectedStation, d.station)}
                    stroke="black"
                    strokeWidth="0.5"
                    onMouseEnter={(event) => handleMouseEnter(d, event)}
                    onMouseLeave={handleMouseLeave} // Correctly bind the handler
                />
            ))}
        </g>
        );
        
    }else{
        return <g></g>
    }
}

export default Points;
