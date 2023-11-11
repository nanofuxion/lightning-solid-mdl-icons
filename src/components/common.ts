// common.ts
export type Props = {
    color?: any;
    size?: number;
    focusedColor?: any;
    focusedSize?: number;
    type?: FontTypes;
};

export const createStyles = (fontFamily: FontTypes) => ({
    icon: {
        height: 100,
        width: 100,
        fontSize: 100,
        color: 0xFFFFFFFF,
        fontFamily: fontFamily
    }
});

export enum FontTypes {
    "regular" = "MDL_Regular",
    "outlined" = "MDL_Outlined",
    "rounded" = "MDL_Rounded",
    "sharp" = "MDL_Sharp",
    "twoTone" = "MDL_TwoTone",
}