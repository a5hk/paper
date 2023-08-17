highlight clear
if exists("syntax_on")
  syntax reset
endif

if has("termguicolors")
  set termguicolors
endif

set background=light
let colors_name="Paper"

highlight clear CursorLine
set cursorline
highlight LineNr guifg=#c3c0b5
highlight CursorLineNr cterm=NONE gui=NONE guifg=#898883

highlight Normal guifg=#3e3d39 guibg=#fcf8e8

highlight NCDefaultLibraryFunctionCall  guifg=#007aa3
highlight NCFunctionCall  guifg=#9e4200
highlight NCVariable  guifg=#3e3d39
highlight NCConstant  guifg=#c91d1d
highlight NCMiscellaneous  guifg=#675332
highlight NCType  guifg=#2059cb
highlight NCParameter  guifg=#1a1918
highlight NCOperator  guifg=#981aff
highlight NCComparisonLogicalOperator  guifg=#0000ff
highlight NCComment cterm=italic gui=italic guifg=#b9b6aa
highlight NCDocumentationComment  guifg=#54534d
highlight NCFunctionDeclaration  guifg=#007aa3
highlight NCLiteralConstant  guifg=#a100d6
highlight NCDefaultLibraryClassType  guifg=#2059cb
highlight NCNamespaceClassStruct  guifg=#2059cb
highlight NCString  guifg=#3b7203
highlight NCProperty  guifg=#956a04
highlight NCKeyword  guifg=#c20aac
highlight NCPunctuation  guifg=#86847c
highlight NCTag  guifg=#956a04
highlight NCItalic  guifg=#0000ff
highlight NCHeading cterm=bold gui=bold guifg=#9e4200
highlight NCLinkTag  guifg=#c20aac
highlight NCMetaTag  guifg=#c20aac
highlight NCStyleTag  guifg=#c20aac
highlight NCObjectTag  guifg=#2059cb
highlight NCInlineTag  guifg=#007aa3
highlight NCCustomTag  guifg=#a100d6
highlight NCScriptTag  guifg=#c20aac
highlight NCAttributeName  guifg=#9e4200
highlight NCTagPunctuation  guifg=#86847c
highlight NCUnrecognizedTag  guifg=#c91d1d
highlight NCJsonLevel01  guifg=#c20aac
highlight NCJsonLevel02  guifg=#2059cb
highlight NCJsonLevel03  guifg=#c91d1d
highlight NCJsonLevel04  guifg=#007aa3
highlight NCJsonLevel05  guifg=#956a04
highlight NCJsonLevel06  guifg=#c20aac
highlight NCJsonLevel07  guifg=#2059cb
highlight NCJsonLevel08  guifg=#c91d1d
highlight NCJsonLevel09  guifg=#007aa3
highlight NCJsonLevel10  guifg=#956a04
highlight NCJsonLevel11  guifg=#c20aac

hi! link xmlAttrib NCAttributeName
hi! link cssTagName NCAttributeName
hi! link htmlArg NCAttributeName
hi! link Comment NCComment
hi! link cssAtRuleLogical NCComparisonLogicalOperator
hi! link shOption NCComparisonLogicalOperator
hi! link awkBoolLogic NCComparisonLogicalOperator
hi! link Constant NCConstant
hi! link rubyInstanceVariable NCConstant
hi! link rubyClassVariable NCConstant
hi! link csInterpolationDelimiter NCConstant
hi! link elixirVariable NCConstant
hi! link elixirInterpolationDelimiter NCConstant
hi! link shDeref NCConstant
hi! link yamlNodeTag NCConstant
hi! link yamlAlias NCConstant
hi! link phpIntVar NCDefaultLibraryClassType
hi! link cssColor NCDefaultLibraryClassType
hi! link awkVariables NCDefaultLibraryClassType
hi! link phpFunctions NCDefaultLibraryFunctionCall
hi! link cssFunctionName NCDefaultLibraryFunctionCall
hi! link pythonBuiltin NCDefaultLibraryFunctionCall
hi! link goBuiltins NCDefaultLibraryFunctionCall
hi! link shCmdSubRegion NCDefaultLibraryFunctionCall
hi! link javaCommentTitle NCDocumentationComment
hi! link shArithmetic NCForeground
hi! link shCommandSub NCForeground
hi! link Function NCFunctionCall
hi! link rustMacro NCFunctionCall
hi! link perlMethod NCFunctionCall
hi! link rubyMethodName NCFunctionDeclaration
hi! link rustFuncName NCFunctionDeclaration
hi! link elixirFunctionDeclaration NCFunctionDeclaration
hi! link shFunction NCFunctionDeclaration
hi! link perlSubName NCFunctionDeclaration
hi! link perlFunctionName NCFunctionDeclaration
hi! link htmlTitle NCHeading
hi! link tomlTable NCHeading
hi! link Statement NCKeyword
hi! link PreProc NCKeyword
hi! link phpStructure NCKeyword
hi! link phpStorageClass NCKeyword
hi! link javaScriptFunction NCKeyword
hi! link rustStorage NCKeyword
hi! link csStorage NCKeyword
hi! link csModifier NCKeyword
hi! link csClass NCKeyword
hi! link javaScopeDecl NCKeyword
hi! link javaClassDecl NCKeyword
hi! link javaStorageClass NCKeyword
hi! link Number NCLiteralConstant
hi! link Boolean NCLiteralConstant
hi! link Float NCLiteralConstant
hi! link cssAttr NCLiteralConstant
hi! link elixirAtom NCLiteralConstant
hi! link poHeaderItem NCLiteralConstant
hi! link htmlSpecialTagName NCMetaTag
hi! link Special NCMiscellaneous
hi! link rustAttribute NCMiscellaneous
hi! link javaAnnotation NCMiscellaneous
hi! link yamlDocumentStart NCMiscellaneous
hi! link poCommentSources NCMiscellaneous
hi! link Identifier NCNamespaceClassStruct
hi! link phpClasses NCNamespaceClassStruct
hi! link rubyModuleName NCNamespaceClassStruct
hi! link rubyClassName NCNamespaceClassStruct
hi! link rustModPath NCNamespaceClassStruct
hi! link csClassType NCNamespaceClassStruct
hi! link elixirModuleDeclaration NCNamespaceClassStruct
hi! link elixirAlias NCNamespaceClassStruct
hi! link perlPackageDecl NCNamespaceClassStruct
hi! link perlPackageRef NCNamespaceClassStruct
hi! link Operator NCOperator
hi! link cssSelectorOp NCOperator
hi! link shVarAssign NCOperator
hi! link shArithRegion NCOperator
hi! link awkOperator NCOperator
hi! link awkExpression NCOperator
hi! link cssProp NCProperty
hi! link tomlKey NCProperty
hi! link shSetList NCProperty
hi! link shVariable NCProperty
hi! link yamlBlockMappingKey NCProperty
hi! link yamlBlockCollectionItemStart NCPunctuation
hi! link String NCString
hi! link Character NCString
hi! link yamlPlainScalar NCString
hi! link Tag NCTag
hi! link csXmlTag NCTag
hi! link xmlTag NCTag
hi! link htmlTagName NCTag
hi! link xmlTagName NCTag
hi! link htmlTag NCTagPunctuation
hi! link xmlTag NCTagPunctuation
hi! link Type NCType
hi! link htmlTagN NCUnrecognizedTag
hi! link perlVarPlain NCVariable