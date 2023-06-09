import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SetaImage = (props) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={20}
        height={30}
        fill="none"
        {...props}
    >
        <Path
            fill="#fff"
            fillOpacity={0.9}
            d="M17.273 2.727a3.857 3.857 0 0 0-5.455 0l-8.99 8.99a4 4 0 0 0 0 5.657l8.99 8.99a3.857 3.857 0 1 0 5.455-5.455l-3.535-3.535a4 4 0 0 1 0-5.657l3.535-3.535a3.857 3.857 0 0 0 0-5.455Z"
        />
    </Svg>
);
export default SetaImage;
