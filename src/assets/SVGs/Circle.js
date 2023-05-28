import * as React from "react"
import Svg, { SvgProps, G, Circle, Defs } from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: filter */
const SvgComponent = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={108}
    height={108}
    fill="none"
    {...props}
  >
    <G filter="url(#a)">
      <Circle cx={55} cy={53} r={49} fill="#4F913E" />
    </G>
    <Defs></Defs>
  </Svg>
)
export default SvgComponent
