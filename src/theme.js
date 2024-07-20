/* eslint-disable no-autofix/unused-imports/no-unused-imports */
import colors from './colors.js';

/**
 * @param {{ name: string; colors: typeof colors }} params
 */
export default ( {
    name
    , colors
} ) => ( {
    name
    , colors: {
        'editor.background': colors.black
        , 'editor.foreground': colors.lightGray
        , 'editorBracketHighlight.foreground1': colors.lightGreen
        , 'editorBracketHighlight.foreground2': colors.cobalt
        , 'editorBracketHighlight.foreground3': colors.teal
        , 'editorCursor.foreground': colors.lightGray
        , 'activityBar.activeBackground': colors.cobaltDarker
        , 'activityBar.background': colors.black
        , 'activityBar.foreground': colors.lightGreen
        , 'activityBarBadge.background': colors.cobaltDarker
        , 'activityBarBadge.foreground': colors.lightGreen
        , 'activityBar.border': colors.black2
        , 'badge.background': colors.lightGreen
        , 'badge.foreground': colors.black
        , 'button.foreground': colors.lightGray
        , 'button.background': colors.cobaltDarker
        , 'button.hoverBackground': colors.cobaltTranslucent
        , 'icon.foreground': colors.lightGray
        , 'tab.activeBackground': colors.darkBlue
        , 'tab.activeBorder': colors.lightGreen
        , 'tab.activeForeground': colors.lightGray
        , 'tab.hoverBackground': colors.translucentDarkGray
        , 'tab.inactiveBackground': colors.black
        , 'tab.inactiveForeground': colors.translucentLightGray
        , 'panel.background': colors.black
        , 'panel.border': colors.translucentLightGreen
        , 'panelTitle.activeForeground': colors.lightGray
        , 'breadcrumb.background': colors.black2
        , 'breadcrumb.foreground': colors.lightGreen
        , 'minimap.background': colors.black
        , 'sideBar.background': colors.translucentDarkBlue
        , 'sideBar.foreground': colors.translucentCerulean
        , 'sideBar.border': colors.translucentLightGreen
        , 'sideBarSectionHeader.background': colors.black
        , 'sideBarSectionHeader.foreground': colors.cobaltTranslucent2
        , 'sideBarSectionHeader.border': colors.translucentGray
        , 'statusBar.background': colors.black2
        , 'titleBar.activeBackground': colors.black2
        , 'terminal.foreground': colors.cobaltDarker
        , 'terminal.tab.activeBorder': colors.cobaltDarker
        , 'terminal.border': colors.extraLightTeal
        , 'terminalCursor.foreground': colors.lightGreen
        , 'editorGroupHeader.tabsBackground': colors.black
    }
    , semanticHighlighting: true
    , semanticTokenColors: {
        interface: {
            fontStyle: 'italic bold'
            , foreground: colors.cobaltDarker
        }
        , type: {
            fontStyle: 'italic bold'
            , foreground: colors.cobaltDarker
        }
        , 'property.readonly': {
            fontStyle: ''
        }
        , 'parameter.defaultLibrary': {
            fontStyle: ''
        }
    }
    , tokenColors: [
        {
            name: 'Comment'
            , scope: [
                'comment'
                , 'punctuation.definition.comment'
            ]
            , settings: {
                foreground: colors.lilac
            }
        }
        , {
            name: 'Variables'
            , scope: [
                'variable'
                , 'meta.definition.variable.name'
                , 'meta.object-literal.key'
                , 'support.variable'
                , 'entity.name.variable'
                , 'constant.other.placeholder'
            ]
            , settings: {
                foreground: colors.extraLightTeal
            }
        }
        , {
            name: 'This keyword'
            , scope: [
                'variable.language.this'
            ]
            , settings: {
                foreground: colors.mint
            }
        }
        , {
            name: 'This keyword TS'
            , scope: [
                'variable.language.this'
            ]
            , settings: {
                foreground: colors.lilac
            }
        }
        , {
            name: 'Constants and enums'
            , scope: [
                'variable.other.constant'
                , 'variable.other.enummember'
            ]
            , settings: {
                foreground: colors.cerulean
                , 'fontStyle': 'bold'
            }
        }
        , {
            name: 'Types'
            , scope: [
                'entity.name.type'
                , 'entity.name.type.class'
                , 'entity.name.type.ts'
                , 'meta.type.annotation.ts'
                , 'support.type.primitive'
            ]
            , settings: {
                foreground: colors.cobaltDarker
                , 'fontStyle': 'bold italic'
            }
        }
        , {
            name: 'Type Overrides'
            , scope: [
                'keyword.operator.expression.typeof.ts'
                , 'meta.object.type.ts'
                , 'keyword.operator.type.ts'
                , 'meta.brace.square.ts'
                , 'keyword.operator.type.annotation.ts'
                , 'punctuation.definition.typeparameters.begin.ts'
                , 'punctuation.definition.typeparameters.end.ts'
                , 'string.quoted.single.ts'
                , 'keyword.operator.expression.typeof.tsx'
                , 'meta.object.type.tsx'
                , 'keyword.operator.type.tsx'
                , 'meta.brace.square.tsx'
                , 'keyword.operator.type.annotation.tsx'
                , 'punctuation.definition.typeparameters.begin.tsx'
                , 'punctuation.definition.typeparameters.end.tsx'
                , 'string.quoted.single.tsx'
                , 'punctuation.definition.parameters.begin.ts'
                , 'punctuation.definition.parameters.begin.tsx'
                , 'storage.type.function.arrow.ts'
                , 'storage.type.function.arrow.tsx'
                , 'keyword.operator.expression.infer.ts'
                , 'keyword.operator.expression.infer.tsx'
                , 'string.template.ts'
                , 'string.template.tsx'
                , 'constant.numeric.decimal.ts'
                , 'constant.numeric.decimal.tsx'
                , 'variable.parameter.ts'
                , 'meta.brace.round.ts'
                , 'variable.parameter.tsx'
                , 'meta.brace.round.tsx'
                , 'punctuation.definition.parameters.end.ts'
                , 'punctuation.definition.parameters.end.tsx'
                , 'keyword.operator.expression.extends.ts'
            ]
            , settings: {
                'fontStyle': ''
            }
        }
        , {
            name: 'Keyword'
            , scope: [
                'keyword'
                , 'keyword.control'
                , 'keyword.operator.new'
                , 'keyword.other.using'
                , 'keyword.other.operator'
                , 'entity.name.operator'
            ]
            , settings: {
                foreground: colors.grayBlue
            }
        }
        , {
            name: 'Assignment, Comparison, Logical'
            , scope: [
                'keyword.operator'
            ]
            , settings: {
                foreground: colors.lightYellow
            }
        }
        , {
            name: 'Template Literal Brackets'
            , scope: [
                'punctuation.definition.template-expression.begin'
                , 'punctuation.definition.template-expression.end'
                , 'punctuation.definition.template-expression.begin.js.jsx'
                , 'punctuation.definition.template-expression.begin.js'
                , 'punctuation.definition.template-expression.begin.ts'
                , 'punctuation.definition.template-expression.end.js'
                , 'punctuation.definition.template-expression.end.ts'
                , 'meta.template.expression.js'
            ]
            , settings: {
                foreground: colors.lightScarlet
            }
        }
        , {
            name: 'Storage / TS Keywords'
            , scope: [
                'storage.type'
                , 'storage.modifier'
                , 'keyword.operator.expression.keyof.ts'
                , 'keyword.operator.expression.keyof.tsx'
                , 'keyword.operator.expression.is.ts'
                , 'keyword.operator.expression.is.tsx'
                , 'keyword.operator.expression.in.ts'
                , 'keyword.operator.expression.in.tsx'
                , 'keyword.operator.expression.infer.ts'
                , 'keyword.operator.expression.infer.tsx'
                , 'punctuation.definition.typeparameters.begin.ts'
                , 'punctuation.definition.typeparameters.begin.tsx'
            ]
            , settings: {
                foreground: colors.lightCerulean
            }
        }
        , {
            name: 'Arrow Function - Arrow'
            , scope: [
                'storage.type.function.arrow'
            ]
            , settings: {
                foreground: colors.brightGreen
            }
        }
        , {
            name: 'Operator, Misc'
            , scope: [
                'constant.other.color'
                , 'punctuation'
                , 'meta.tag'
                , 'punctuation.separator.inheritance.php'
                , 'keyword.other.template'
                , 'keyword.other.substitution'
            ]
            , settings: {
                foreground: colors.gray
            }
        }
        , {
            name: 'HTML Tag Brackets'
            , scope: [
                'punctuation.definition.tag'
                , 'punctuation.definition.tag.html'
                , 'punctuation.definition.tag.begin.html'
                , 'punctuation.definition.tag.end.html'
            ]
            , settings: {
                foreground: colors.lightCerulean
            }
        }
        , {
            name: 'HTML Tag / Generic Tag'
            , scope: [
                'entity.name.tag'
                , 'entity.name.tag.html'
                , 'meta.tag.sgml'
                , 'markup.deleted.git_gutter'
            ]
            , settings: {
                foreground: colors.slateBlue
            }
        }
        , {
            name: 'JSX/TSX Tag'
            , scope: [
                'entity.name.tag.tsx'
                , 'entity.name.tag.jsx'
                , 'meta.tag.sgml'
                , 'markup.deleted.git_gutter'
            ]
            , settings: {
                foreground: colors.jsxGreen
                , fontStyle: 'bold'
            }
        }
        , {
            name: 'Function, Special Method'
            , scope: [
                'entity.name.function'
                , 'meta.function-call'
                , 'variable.function'
                , 'support.function'
                , 'keyword.other.special-method'
            ]
            , settings: {
                foreground: colors.neonYellowGreen
            }
        }
        , {
            name: 'Function Argument, Tag Attribute, Embedded'
            , scope: [
                'support.constant'
                , 'constant.character'
                , 'constant.escape'
                , 'variable.parameter'
                , 'keyword.other.unit'
                , 'keyword.other'
            ]
            , settings: {
                foreground: colors.brightGreen
            }
        }
        , {
            name: 'Constant (booleans, null, undefined)'
            , scope: [
                'constant.language'
            ]
            , settings: {
                foreground: colors.mint
            }
        }
        , {
            name: 'Numbers'
            , scope: [
                'constant.numeric'
            ]
            , settings: {
                foreground: colors.gold
            }
        }
        , {
            name: 'String, Symbols, Inherited Class, Markup Heading'
            , scope: [
                'string'
                , 'constant.other.symbol'
                , 'constant.other.key'
                , 'entity.other.inherited-class'
                , 'markup.heading'
                , 'markup.inserted.git_gutter'
                , 'meta.group.braces.curly constant.other.object.key.js string.unquoted.label.js'
            ]
            , settings: {
                foreground: colors.feededGray
            }
        }
        , {
            name: 'Class, Support'
            , scope: [
                'support.type'
                , 'support.class'
                , 'entity.name.type.class'
                , 'support.other.namespace.use.php'
                , 'meta.use.php'
                , 'support.other.namespace.php'
                , 'markup.changed.git_gutter'
                , 'support.type.sys-types'
            ]
            , settings: {
                foreground: colors.mint
                , 'fontStyle': ''
            }
        }
        , {
            name: 'JSX/TSX Tags'
            , scope: [
                'support.class.component.js.jsx'
                , 'support.class.component.tsx'
                , 'markup.changed.git_gutter'
                , 'support.type.sys-types'
            ]
            , settings: {
                foreground: colors.jsxGreen
                , 'fontStyle': 'bold'
            }
        }
        , {
            name: 'HTML Attributes'
            , scope: [
                'entity.other.attribute-name.html'
            ]
            , settings: {
                foreground: colors.paleYellowGreen
            }
        }
        , {
            name: 'JSX Props'
            , scope: [
                'entity.other.attribute-name.js.jsx'
                , 'entity.other.attribute-name.tsx'
                , 'meta.tag.attributes.tsx'
            ]
            , settings: {
                foreground: colors.lightSlateBlue
            }
        }
        , {
            name: 'HTML Comments'
            , scope: [
                'comment.block.html'
                , 'punctuation.definition.comment.html'
            ]
            , settings: {
                foreground: colors.brightSage
            }
        }
        , {
            name: 'URL'
            , scope: [
                '*url*'
                , '*link*'
                , '*uri*'
            ]
            , settings: {
                'fontStyle': 'underline'
            }
        }
        , {
            name: 'Decorators'
            , scope: [
                'tag.decorator.js entity.name.tag.js'
                ,'tag.decorator.js punctuation.definition.tag.js'
                , 'punctuation.decorator.ts'
                , 'meta.decorator.ts'
            ]
            , settings: {
                foreground: colors.decoratorPurple
            }
        }
        , {
            name: 'ES7 Bind Operator'
            , scope: [
                'source.js constant.other.object.key.js string.unquoted.label.js'
            ]
            , settings: {
                'fontStyle': 'italic'
                , foreground: colors.gunmetal
            }
        }
        , {
            name: 'CSS Properties'
            , scope: [
                'support.type.property-name.css'
            ]
            , settings: {
                foreground: colors.lightSlateBlue
            }
        }
        , {
            name: 'CSS Property Value'
            , scope: [
                'support.constant.property-value.css'
            ]
            , settings: {
                foreground: colors.neonYellowGreen
            }
        }
        , {
            name: 'CSS Attribute Name'
            , scope: [
                'entity.other.attribute-name.class.css'
            ]
            , settings: {
                foreground: colors.mint
            }
        }
        , {
            name: 'CSS Punc. && Pseudo Elements/Classes'
            , scope: [
                'punctuation.definition.entity.css'
                , 'entity.other.attribute-name.pseudo-class.css'
                , 'keyword.operator.combinator.css'
                , 'punctuation.terminator.rule.css'
                , 'entity.other.attribute-name.pseudo-element.css'
            ]
            , settings: {
                foreground: colors.extraLightTeal
            }
        }
        , {
            name: 'CSS Units'
            , scope: [
                'keyword.other.unit.rem.css'
                , 'keyword.other.unit.px.css'
                , 'keyword.other.unit.em.css'
                , 'keyword.other.unit.percentage.css'
            ]
            , settings: {
                foreground: colors.lightCerulean
            }
        }
        , {
            name: 'Decorators'
            , scope: [
                'support.function.css'
            ]
            , settings: {
                foreground: colors.brightGreen
            }
        }
        , {
            name: 'Angular Pipe'
            , scope: [
                'entity.name.function.pipe.ng'
            ]
            , settings: {
                foreground: colors.pipeGreen
                , fontStyle: 'bold italic'
            }
        }
        , {
            name: 'Angular Template Control Flow & Variables'
            , scope: [
                'keyword.control.block.kind.ng'
                , 'keyword.control.block.transition.ng'
                , 'storage.type.ng'
            ]
            , settings: {
                foreground: colors.brightGreen
            }
        }
        , {
            name: 'Angular Event Bindings'
            , scope: [
                'entity.other.ng-binding-name.event.html'
            ]
            , settings: {
                foreground: colors.brightGreen
            }
        }
        , {
            name: 'Angular Property Bindings'
            , scope: [
                'entity.other.ng-binding-name.property.html'
                , 'punctuation.definition.ng-binding-name.begin.html'
                , 'punctuation.definition.ng-binding-name.end.html'
            ]
            , settings: {
                foreground: colors.lilac
            }
        }
        , {
            name: 'Angular Template Bindings'
            , scope: [
                'entity.other.ng-binding-name.template.html'
            ]
            , settings: {
                foreground: colors.ngBinding
            }
        }
    ]
} );
