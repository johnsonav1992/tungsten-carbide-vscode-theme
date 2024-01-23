export default ( {
    name
    , colors
} ) => ( {
    name
    , colors: {
        'editor.background': colors.black
        , 'editor.foreground': '#e8e8e8'
        , 'editorBracketHighlight.foreground1': '#96f8a3'
        , 'editorBracketHighlight.foreground2': '#3b58fa'
        , 'editorBracketHighlight.foreground3': '#1997c1'
        , 'editorCursor.foreground': '#e8e8e8'
        , 'activityBar.activeBackground': '#404cfa'
        , 'activityBar.background': '#030c14'
        , 'activityBar.foreground': '#96f8a3'
        , 'activityBarBadge.background': '#404cfa'
        , 'activityBarBadge.foreground': '#96f8a3'
        , 'activityBar.border': '#0a0c27'
        , 'badge.background': '#96f8a3'
        , 'badge.foreground': '#030c14'
        , 'button.foreground': '#e8e8e8'
        , 'button.background': '#404cfa'
        , 'button.hoverBackground': '#404cfad6'
        , 'icon.foreground': '#e8e8e8'
        , 'tab.activeBackground': '#0d115c'
        , 'tab.activeBorder': '#96f8a3'
        , 'tab.activeForeground': '#e8e8e8'
        , 'tab.hoverBackground': '#e8e8e82f'
        , 'tab.inactiveBackground': '#030c14'
        , 'tab.inactiveForeground': '#e8e8e897'
        , 'panel.background': '#030c14'
        , 'panel.border': '#96f8a391'
        , 'panelTitle.activeForeground': '#e8e8e8'
        , 'breadcrumb.background': '#0a0c27'
        , 'breadcrumb.foreground': '#96f8a3'
        , 'minimap.background': '#030c14'
        , 'sideBar.background': '#030c148e'
        , 'sideBar.foreground': '#21a3e98b'
        , 'sideBar.border': '#96f8a391'
        , 'sideBarSectionHeader.background': '#030c14'
        , 'sideBarSectionHeader.foreground': '#404cfac4'
        , 'sideBarSectionHeader.border': '#e8e8e839'
        , 'statusBar.background': '#0a0c27'
        , 'titleBar.activeBackground': '#0a0c27'
        , 'terminal.foreground': '#404cfa'
        , 'terminal.tab.activeBorder': '#404cfa'
        , 'terminal.border': '#acfcff'
        , 'terminalCursor.foreground': '#96f8a3'
        , 'editorGroupHeader.tabsBackground': '#030c14'
    }
    , semanticHighlighting: true
    , semanticTokenColors: {
        interface: {
            fontStyle: 'italic bold'
            , foreground: '#404cfa'
        }
        , type: {
            fontStyle: 'italic bold'
            , foreground: '#404cfa'
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
                foreground: '#aebfff'
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
                foreground: '#acfcff'
            }
        }
        , {
            name: 'This keyword'
            , scope: [
                'variable.language.this'
            ]
            , settings: {
                foreground: '#10dfc0'
            }
        }
        , {
            name: 'Constants and enums'
            , scope: [
                'variable.other.constant'
                , 'variable.other.enummember'
            ]
            , settings: {
                foreground: '#21a3e9'
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
                foreground: '#404cfa'
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
                foreground: '#557edf'
            }
        }
        , {
            name: 'Assignment, Comparison, Logical'
            , scope: [
                'keyword.operator'
            ]
            , settings: {
                foreground: '#e7ff9e'
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
                foreground: '#fa745f'
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
                foreground: '#50b4f1'
            }
        }
        , {
            name: 'Arrow Function - Arrow'
            , scope: [
                'storage.type.function.arrow'
            ]
            , settings: {
                foreground: '#37e07a'
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
                foreground: '#b2b8bc'
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
                foreground: '#50b4f1'
            }
        }
        , {
            name: 'Tag'
            , scope: [
                'entity.name.tag'
                , 'meta.tag.sgml'
                , 'markup.deleted.git_gutter'
            ]
            , settings: {
                foreground: '#2466e9'
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
                foreground: '#d9f461'
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
                foreground: '#37e07a'
            }
        }
        , {
            name: 'Constant (booleans, null, undefined)'
            , scope: [
                'constant.language'
            ]
            , settings: {
                foreground: '#10dfc0'
            }
        }
        , {
            name: 'Numbers'
            , scope: [
                'constant.numeric'
            ]
            , settings: {
                foreground: '#ffd500'
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
                foreground: '#feeded'
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
                foreground: '#10dfc0'
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
                foreground: '#7df81fda'
                , 'fontStyle': 'bold'
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
                foreground: '#448fff'
            }
        }
        , {
            name: 'HTML Attributes'
            , scope: [
                'entity.other.attribute-name.html'
            ]
            , settings: {
                foreground: '#5fb7ed'
            }
        }
        , {
            name: 'HTML Comments'
            , scope: [
                'comment.block.html'
                , 'punctuation.definition.comment.html'
            ]
            , settings: {
                foreground: '#52d486'
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
                , 'tag.decorator.js punctuation.definition.tag.js'
            ]
            , settings: {
                'fontStyle': 'italic'
                , foreground: '#e5ecfb'
            }
        }
        , {
            name: 'ES7 Bind Operator'
            , scope: [
                'source.js constant.other.object.key.js string.unquoted.label.js'
            ]
            , settings: {
                'fontStyle': 'italic'
                , foreground: '#788AB3'
            }
        }
        , {
            name: 'CSS Properties'
            , scope: [
                'support.type.property-name.css'
            ]
            , settings: {
                foreground: '#448fff'
            }
        }
        , {
            name: 'CSS Property Value'
            , scope: [
                'support.constant.property-value.css'
            ]
            , settings: {
                foreground: '#d9f461'
            }
        }
        , {
            name: 'CSS Attribute Name'
            , scope: [
                'entity.other.attribute-name.class.css'
            ]
            , settings: {
                foreground: '#10dfc0'
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
                foreground: '#acfcff'
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
                foreground: '#50b4f1'
            }
        }
    ]
} );
