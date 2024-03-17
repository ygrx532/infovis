import React, { useState } from 'react';

function Bars(props) {
    const { data, xScale, yScale, height, selectedStation, setSelectedStation } = props;

    const handleMouseEnter = (station) => {
        setSelectedStation(station);
    };

    const handleMouseLeave = () => {
        setSelectedStation(null);
    };

    const getColor = (selectedStation, station) => 
        selectedStation === station ? 'red' : 'steelblue';

    if (data) {
        return (
            <g>
                {data.map((d, i) => (
                    <rect
                        key={i}
                        x={xScale(d.station)}
                        y={yScale(d.start)}
                        width={xScale.bandwidth()}
                        height={height - yScale(d.start)}
                        fill={getColor(selectedStation, d.station)}
                        stroke="black"
                        strokeWidth="0.5"
                        onMouseEnter={() => handleMouseEnter(d.station)}
                        onMouseLeave={handleMouseLeave}
                    />
                ))}
            </g>
        );
    } else {
        return <g></g>;
    }
}

export default Bars;
