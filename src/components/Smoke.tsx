
import Konva from 'konva';
import React, { useRef, useEffect } from 'react';
import { Layer, Circle } from 'react-konva'






export const  Smoke = () => {
  const [color, setColor] = React.useState<any>();

  return (
    <Circle
      x={2}
      y={5}
      draggable
      radius={100}
      fill={color}
      onDragEnd={() => {
        setColor(Konva.Util.getRandomColor());
      }}
    />
  );
};

  
    
