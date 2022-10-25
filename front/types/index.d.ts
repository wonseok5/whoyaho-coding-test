import "styled-components";
import { Color } from "../constants/colors";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: Color;
  }
}
