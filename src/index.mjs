import { writeFile } from 'fs';
import { promisify } from 'util';
import theme from './theme.mjs';
import colors from './colors.mjs';

const promisifiedWriteFile = promisify( writeFile );

const VARIANTS = {
    'Tungsten Carbide': {
        theme: theme
        , colors: colors
        , getColor: color => color
    }
};

const buildTheme = async variants => {
    try {
        await Promise.all(
            Object.entries( variants ).map( ( [ variantName, variant ] ) => {
                const themeWithColors = variant.theme( {
                    'name': variantName
                    , 'colors': Object.entries( colors ).reduce(
                        ( acc, [ colorName, colorValue ] ) => ( {
                            ...acc
                            , [ colorName ]: variant.getColor( colorValue )
                        } ),
                        {}
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
