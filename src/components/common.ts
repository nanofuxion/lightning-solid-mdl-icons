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
    "regular" = "Regular",
    "outlined" = "Outlined",
    "rounded" = "Rounded",
    "sharp" = "Sharp",
    "twoTone" = "TwoTone",
}