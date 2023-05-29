import * as React from "react";
import { SlideImage } from "./styles";

export function Slide({ data }) {
  return <SlideImage source={{ uri: data.image }} />;
}
