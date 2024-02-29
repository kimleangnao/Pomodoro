

import DrawLines from "../components/DrawLines"

const Graph = ({days}) => {

    function drawXLine(xyValue, dayNumber , startYText){
        const arrayPath=[];
        const startX = xyValue.startX;
        const startY = xyValue.startY;

        const endX = xyValue.endX;
        const endY = xyValue.endY;

        const path = `M${startX} ${startY} L ${endX} ${endY}`;

        arrayPath.push( 
        <path
            key={`${startY}`}
            d={path}
            stroke={`white`}
            fill="none"
          />,
          <text
          key={`${Math.random() * 100000}`}
          x={`${startX - 5}`}
          y={`${startYText}`}
          fontSize="16"
          fill="white"
        >
          {dayNumber}
        </text>,
        );

        return arrayPath;
    }

    function drawYLine(xyValue , i, startXText){
        const arrayPath=[];
        const startX = xyValue.startX;
        const startY = xyValue.startY;

        const endX = xyValue.endX;
        const endY = xyValue.endY;

        const path = `M${startX} ${startY} L ${endX} ${endY}`;

        arrayPath.push( 
        <path
            key={`${startY}`}
            d={path}
            stroke={`white`}
            fill="none"
          />,
          <text
          key={`${Math.random() * 100000}`}
          x={`${startXText}`}
          y={`${startY + 5}`}
          fontSize="16"
          fill="white"
        >
          {i * 2}
        </text>,
        );

        return arrayPath;
    }

    function drawDot(xyValue){
        const arrayDots = [];
        const cx = xyValue.cx;
        const cy = xyValue.cy;
        const r = xyValue.r;

        arrayDots.push(<circle cx={cx} cy={cy} r={r} fill="rgba(230, 215, 103, 1)" />);

        return arrayDots;
    }


    //fake coordinate
    let fakeArrayX = [];
    let fakeArrayY = [];
    let fakeDots = [];
    let dotsValue = [5, 7, 8, 0, 4, 10, 18];
    let connectArray = [];

    let MAX_WIDTH = 900 / days;
    let MAX_HEIGHT = 300 / 24;

    let f_X = 150;
    let f_startY = 50;
    let f_endY = 450;

    //x coordinate fake
    for(let i = 0; i <= days; i++){
        if(i == 0){
            fakeArrayX.push({startX: f_X, startY: f_startY - 25, endX: f_X, endY: f_endY+25,});
        }else{
            fakeArrayX.push({startX: f_X, startY: f_startY, endX: f_X, endY: f_endY,});
        }
        
        f_X += MAX_WIDTH;
    }
    //console.log(fakeArrayX)

    let yF_startX = 150;
    let yF_endX = 1350;
    let yF_Y = 450;

    //y coordinate fake
    for(let i = 0; i <= 12; i++){
        if(i == 0){
            fakeArrayY.push({startX: yF_startX - 25, startY: yF_Y, endX: yF_endX + 25, endY: yF_Y,});
        }else{
            fakeArrayY.push({startX: yF_startX , startY: yF_Y, endX: yF_endX, endY: yF_Y,});
        }
    
    
        //I only want the line to be at EVEN NUMBER
        yF_Y -= (MAX_HEIGHT*2);
    }

    //console.log(fakeArrayY)
    let dot_startX = 150; // +
    let dot_startY = 450; // -

    let connect_startX = 150;
    let connect_startY = 450;
    let connect_endX = 0; 
    let connect_endY = 0;

    //dots coordinate fake
    for(let i = 0; i < dotsValue.length; i++){
        let y;
        y = dot_startY  - (dotsValue[i] * MAX_HEIGHT);
        dot_startX +=  MAX_WIDTH;
       
        connect_endX = connect_startX +  MAX_WIDTH;
        connect_endY = y;
        //do the connect line
        connectArray.push({startX: connect_startX , startY: connect_startY, endX : connect_endX,  endY: connect_endY})
    
        
        fakeDots.push({cx: dot_startX, cy: y, r: 4,})

        connect_startX = connect_endX;
        connect_startY = connect_endY;
        connect_endX = 0;
        connect_endY = 0;
        
    }
  
    //only need to change these coordinate values
    const pointValuesVertical = fakeArrayX;
    const pointValuesHorizontal = fakeArrayY;
    const pointValuesDot = fakeDots;
    

    //loop X coordinates
    let drawMyXLineOutline = [];
    for(let i = 0; i < pointValuesVertical.length; i++){
        drawMyXLineOutline.push(drawXLine(pointValuesVertical[i], i , 500));
    }

    //loop Y coordinates
    let drawMyYLineOutline  = [];
    for(let i = 0; i < pointValuesHorizontal.length; i++){
        drawMyYLineOutline.push(drawYLine(pointValuesHorizontal[i], i, 100));
    }

    //loop circle dot coordinate
    let drawMyDots = [];
    for(let i = 0; i < pointValuesDot.length; i++){
        drawMyDots.push(drawDot(pointValuesDot[i]));
    }

    //lines
    let drawMyLines = <DrawLines arrayValue={connectArray} />;
    console.log(DrawLines)


    return(
        <svg width="1400" height="550" className="statistic_graph">
            {drawMyXLineOutline}
            {drawMyYLineOutline}
            {drawMyLines}
            {drawMyDots}
       
        </svg>
    )
}


export default Graph;
