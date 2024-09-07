import { 
    ThemeBuilderFn,
    VscodeTheme 
} from '../types/types.js';

const themeBuilder: ThemeBuilderFn = ( {
    name
    , colorSet
} ): VscodeTheme => ( {
    name
    , colors: {
        'editor.background': colorSet.black
        , 'editor.foreground': colorSet.lightGray
        , 'editorBracketHighlight.foreground1': colorSet.lightGreen
        , 'editorBracketHighlight.foreground2': colorSet.cobalt
        , 'editorBracketHighlight.foreground3': colorSet.teal
        , 'editorCursor.foreground': colorSet.lightGray
        , 'activityBar.activeBackground': colorSet.cobaltDarker
        , 'activityBar.background': colorSet.black
        , 'activityBar.foreground': colorSet.lightGreen
        , 'activityBarBadge.background': colorSet.cobaltDarker
        , 'activityBarBadge.foreground': colorSet.lightGreen
        , 'activityBar.border': colorSet.black2
        , 'badge.background': colorSet.lightGreen
        , 'badge.foreground': colorSet.black
        , 'button.foreground': colorSet.lightGray
        , 'button.background': colorSet.cobaltDarker
        , 'button.hoverBackground': colorSet.cobaltTranslucent
        , 'icon.foreground': colorSet.lightGray
        , 'tab.activeBackground': colorSet.darkBlue
        , 'tab.activeBorder': colorSet.lightGreen
        , 'tab.activeForeground': colorSet.lightGray
        , 'tab.hoverBackground': colorSet.translucentDarkGray
        , 'tab.inactiveBackground': colorSet.black
        , 'tab.inactiveForeground': colorSet.translucentLightGray
        , 'panel.background': colorSet.black
        , 'panel.border': colorSet.translucentLightGreen
        , 'panelTitle.activeForeground': colorSet.lightGray
        , 'breadcrumb.background': colorSet.black2
        , 'breadcrumb.foreground': colorSet.lightGreen
        , 'minimap.background': colorSet.black
        , 'sideBar.background': colorSet.translucentDarkBlue
        , 'sideBar.foreground': colorSet.translucentCerulean
        , 'sideBar.border': colorSet.translucentLightGreen
        , 'sideBarSectionHeader.background': colorSet.black
        , 'sideBarSectionHeader.foreground': colorSet.cobaltTranslucent2
        , 'sideBarSectionHeader.border': colorSet.translucentGray
        , 'statusBar.background': colorSet.black2
        , 'titleBar.activeBackground': colorSet.black2
        , 'terminal.foreground': colorSet.cobaltDarker
        , 'terminal.tab.activeBorder': colorSet.cobaltDarker
        , 'terminal.border': colorSet.extraLightTeal
        , 'terminalCursor.foreground': colorSet.lightGreen
        , 'editorGroupHeader.tabsBackground': colorSet.black
    }
    , semanticHighlighting: true
    , semanticTokenColors: {
        interface: {
            fontStyle: 'italic bold'
            , foreground: colorSet.cobaltDarker
        }
        , type: {
            fontStyle: 'italic bold'
            , foreground: colorSet.cobaltDarker
        }
        , 'property.readonly': {
            fontStyle: ''
        }
        , 'parameter.defaultLibrary': {
            fontStyle: ''
        }
        , class: {}
    }
    , tokenColors: [
        {
            name: 'Comment'
            , scope: [
                'comment'
                , 'punctuation.definition.comment'
            ]
            , settings: {
                foreground: colorSet.lilac
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
                foreground: colorSet.extraLightTeal
            }
        }
        , {
            name: 'This keyword'
            , scope: [
                'variable.language.this'
            ]
            , settings: {
                foreground: colorSet.mint
            }
        }
        , {
            name: 'This keyword TS'
            , scope: [
                'variable.language.this'
            ]
            , settings: {
                foreground: colorSet.lilac
            }
        }
        , {
            name: 'Constants and enums'
            , scope: [
                'variable.other.constant'
                , 'variable.other.enummember'
            ]
            , settings: {
                foreground: colorSet.cerulean
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
                foreground: colorSet.cobaltDarker
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
                foreground: colorSet.grayBlue
            }
        }
        , {
            name: 'Assignment, Comparison, Logical'
            , scope: [
                'keyword.operator'
            ]
            , settings: {
                foreground: colorSet.lightYellow
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
                foreground: colorSet.lightScarlet
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
                foreground: colorSet.lightCerulean
            }
        }
        , {
            name: 'Arrow Function - Arrow'
            , scope: [
                'storage.type.function.arrow'
            ]
            , settings: {
                foreground: colorSet.brightGreen
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
                foreground: colorSet.gray
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
                foreground: colorSet.lightCerulean
            }
        }
        , {
            name: 'HTML Custom Tags'
            , scope: [
                'text.html.derivative meta.tag.custom.start.html entity.name.tag.html'
                , 'text.html.derivative meta.tag.custom.end.html entity.name.tag.html'
            ]
            , settings: {
                foreground: colorSet.decoratorPurple
                , fontStyle: "bold"
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
                foreground: colorSet.slateBlue
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
                foreground: colorSet.jsxGreen
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
                foreground: colorSet.neonYellowGreen
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
                foreground: colorSet.brightGreen
            }
        }
        , {
            name: 'Constant (booleans, null, undefined)'
            , scope: [
                'constant.language'
            ]
            , settings: {
                foreground: colorSet.mint
            }
        }
        , {
            name: 'Numbers'
            , scope: [
                'constant.numeric'
            ]
            , settings: {
                foreground: colorSet.gold
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
                foreground: colorSet.feededGray
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
                foreground: colorSet.mint
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
                foreground: colorSet.jsxGreen
                , 'fontStyle': 'bold'
            }
        }
        , {
            name: 'HTML Custom Attributes'
            , scope: [
                'meta.attribute.unrecognized entity.other.attribute-name.html',
            ]
            , settings: {
                foreground: colorSet.lightGreen
            }
        }
        , {
            name: 'HTML Attributes'
            , scope: [
                'entity.other.attribute-name.html'
            ]
            , settings: {
                foreground: colorSet.paleYellowGreen
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
                foreground: colorSet.lightSlateBlue
            }
        }
        , {
            name: 'HTML Comments'
            , scope: [
                'comment.block.html'
                , 'punctuation.definition.comment.html'
            ]
            , settings: {
                foreground: colorSet.brightSage
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
                , 'source.ts meta.decorator.ts meta.function-call.ts entity.name.function.ts'
            ]
            , settings: {
                foreground: colorSet.decoratorPurple
            }
        }
        , {
            name: 'ES7 Bind Operator'
            , scope: [
                'source.js constant.other.object.key.js string.unquoted.label.js'
            ]
            , settings: {
                'fontStyle': 'italic'
                , foreground: colorSet.gunmetal
            }
        }
        , {
            name: 'CSS Properties'
            , scope: [
                'support.type.property-name.css'
            ]
            , settings: {
                foreground: colorSet.lightSlateBlue
            }
        }
        , {
            name: 'CSS Property Value'
            , scope: [
                'support.constant.property-value.css'
            ]
            , settings: {
                foreground: colorSet.neonYellowGreen
            }
        }
        , {
            name: 'CSS Attribute Name'
            , scope: [
                'entity.other.attribute-name.class.css'
            ]
            , settings: {
                foreground: colorSet.mint
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
                foreground: colorSet.extraLightTeal
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
                foreground: colorSet.lightCerulean
            }
        }
        , {
            name: 'Decorators'
            , scope: [
                'support.function.css'
            ]
            , settings: {
                foreground: colorSet.brightGreen
            }
        }
        , {
            name: 'Angular Pipe'
            , scope: [
                'entity.name.function.pipe.ng'
            ]
            , settings: {
                foreground: colorSet.pipeGreen
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
                foreground: colorSet.brightGreen
            }
        }
        , {
            name: 'Angular Event Bindings'
            , scope: [
                'entity.other.ng-binding-name.event.html'
            ]
            , settings: {
                foreground: colorSet.brightGreen
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
                foreground: colorSet.lilac
            }
        }
        , {
            name: 'Angular Template Bindings'
            , scope: [
                'entity.other.ng-binding-name.template.html'
            ]
            , settings: {
                foreground: colorSet.ngBinding
            }
        }
    ]
} );

export default themeBuilder;
