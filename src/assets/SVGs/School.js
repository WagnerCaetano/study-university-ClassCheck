import * as React from 'react';
import Svg, {
    G,
    Circle,
    Path,
    Defs,
    LinearGradient,
    Stop,
    Pattern,
    Use,
    Image
} from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: filter */
const SvgComponent = (props) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        fill="none"
        {...props}
    >
        <G filter="url(#a)">
            <Circle cx={55} cy={53} r={49} fill="url(#b)" />
        </G>
        <G filter="url(#c)">
            <Path
                fill="url(#d)"
                d="M16 23h74v74H16z"
                shapeRendering="crispEdges"
            />
        </G>
        <Defs>
            <LinearGradient
                id="b"
                x1={55}
                x2={55}
                y1={4}
                y2={102}
                gradientUnits="userSpaceOnUse"
            >
                <Stop stopColor="#1E7D4F" />
                <Stop offset={1} stopColor="#5EA84B" />
            </LinearGradient>
            <Pattern
                id="d"
                width={1}
                height={1}
                patternContentUnits="objectBoundingBox"
            >
                <Use xlinkHref="#e" transform="scale(.00781)" />
            </Pattern>
            <Image
                xlinkHref="data:image/png;base64,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"
                id="e"
                width={128}
                height={128}
            />
        </Defs>
    </Svg>
);
export default SvgComponent;
