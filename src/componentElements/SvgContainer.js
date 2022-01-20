import IdGenerator from '../IdGenerator'
function SvgContainer({svgProps,pathProps}) {
    console.log("Yes Loading...SVG")
    return ( 
        <svg key={IdGenerator()} xmlns={svgProps.xmlns} width={svgProps.width} height={svgProps.height} fill={svgProps.fill} viewBox={svgProps.viewBox}>
            {pathProps.map(p=> <path key={IdGenerator()} fill={p.fill} d={p.d}></path> )}
            
        </svg>
     );
}

export default SvgContainer;