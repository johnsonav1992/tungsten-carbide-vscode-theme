import { writeFile } from 'fs';
import { promisify } from 'util';
import theme from './theme.js';
import colors from './colors.js';
import { TungstenCarbidePalette, Variants } from '../types/types.js';

const promisifiedWriteFile = promisify( writeFile );

const VARIANTS: Variants = {
    'Tungsten Carbide': {
        theme
        , colors: colors
        , getColor: color => color
    }
};

const buildTheme = async ( variants: Variants ) => {
    try {
        await Promise.all(
            Object.entries( variants ).map( ( [ variantName, variant ] ) => {
                const themeWithColors = variant.theme( {
                    name: variantName
                    , colorSet: Object.entries( colors ).reduce(
                        ( acc, [ colorName, colorValue ] ) => ( {
                            ...acc
                            , [ colorName ]: variant.getColor( colorValue )
                        } ),
                        {} as TungstenCarbidePalette
                    )
                } );

                return promisifiedWriteFile(
                    './themes/tungsten-carbide-color-theme.json',
                    JSON.stringify( themeWithColors )
                );
            } )
        );
        console.log( 'Theme built!' );
    } catch ( error ) {
        console.log( error );
    }
};

buildTheme( VARIANTS );
