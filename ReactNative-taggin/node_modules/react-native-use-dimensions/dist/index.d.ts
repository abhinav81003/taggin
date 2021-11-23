import { ScaledSize as RNScaledSize } from "react-native";
declare type ScaledSize = RNScaledSize;
/**
 * Use this hook to access the screen dimensions _only_.
 *
 * ```js
 * const { height, width, fontScale, scale } = useScreenDimensions();
 * ```
 *
 * @returns Object containing screen dimensions
 */
export declare const useScreenDimensions: () => ScaledSize;
/**
 * Use this hook to access the window dimensions _only_.
 *
 * This can be useful on Android devices, where the [window has different dimensions than the screen](https://stackoverflow.com/a/44979327/11960129).
 *
 * ```js
 * const { height, width, fontScale, scale } = useWindowDimensions();
 * ```
 *
 * @returns Object containing window dimensions
 */
export declare const useWindowDimensions: () => ScaledSize;
/**
 * Use this hook to access _both the screen and window dimensions_.
 *
 * ```js
 * const { screen, window } = useDimensions();
 * ```
 *
 * @returns Object containing both screen and window dimensions.
 */
declare const useDimensions: () => {
    screen: ScaledSize;
    window: ScaledSize;
};
export default useDimensions;
