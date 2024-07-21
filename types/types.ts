import colors from "../src/colors";

export type ColorSet = Record<string, `#${string}`>;
export type TungstenCarbidePalette = typeof colors;

export type ThemeBuilderFn = ( params: {
    name: string;
    colorSet: TungstenCarbidePalette
} ) => VscodeTheme

export type Variants = {
    [name: string]: {
        theme: ThemeBuilderFn
        , colors: ColorSet
        , getColor: (color: keyof ColorSet) => string
    }
}

export type VscodeTheme = {
    name: string;
    type?: 'light' | 'dark';
    colors: ColorSet
    tokenColors: Array<{
        name?: string;
        scope: string | string[];
        settings: {
            foreground?: string;
            background?: string;
            fontStyle?: string;
        };
    }>;
    semanticTokenColors?: {
        [key: string]: string | {
            foreground?: string;
            fontStyle?: string;
            bold?: boolean;
            italic?: boolean;
            underline?: boolean;
            strikethrough?: boolean;
        };
    };
    semanticHighlighting?: boolean;
    iconThemes?: {
        [key: string]: string;
    };
}