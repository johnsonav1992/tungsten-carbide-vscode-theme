export type ColorSet = Record<string, `#${string}`>;

export type Variants = {
    [name: string]: {
        theme: any
        , colors: ColorSet
        , getColor: (color: keyof ColorSet) => string
    }
}