

const DrawLines = ({arrayValue}) => {
    let linePath = ` `;
    console.log(arrayValue)
    
   for(let i = 0; i < arrayValue.length; i++){
        let path;
        console.log(arrayValue[i])
        if(i == arrayValue.length - 1){
            //
            path = `L ${arrayValue[i].endX} ${arrayValue[i].endY} L ${arrayValue[i].endX} ${arrayValue[0].startY}`;

        }else if(i == 0){
            path = `M ${arrayValue[i].startX} ${arrayValue[i].startY} L ${arrayValue[i].endX} ${arrayValue[i].endY} `;
        }else{
            path = `L ${arrayValue[i].endX} ${arrayValue[i].endY} `;
        }

        console.log("Path:", path)
        linePath += path;
   }
   console.log("dl: ", linePath)


    return(
        <path
            key={`${Math.random()* 1000}`}
            d={linePath}
            stroke={`rgba(235, 235, 235, 0.8)`}
            fill="rgba(235, 235, 235, 0.4)"
        />
    )
}

export default DrawLines;