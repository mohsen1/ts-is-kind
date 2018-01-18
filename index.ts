import * as ts from 'typescript';

/**
 * Return true if node is `EndOfFileToken`
 * @param node A TypeScript node
 */
export function isEndOfFileToken(node: ts.EndOfFileToken): node is ts.EndOfFileToken {
    return node.kind === ts.SyntaxKind.EndOfFileToken;
}

/**
 * Return true if node is `NumericLiteral`
 * @param node A TypeScript node
 */
export function isNumericLiteral(node: ts.NumericLiteral): node is ts.NumericLiteral {
    return node.kind === ts.SyntaxKind.NumericLiteral;
}

/**
 * Return true if node is `StringLiteral`
 * @param node A TypeScript node
 */
export function isStringLiteral(node: ts.StringLiteral): node is ts.StringLiteral {
    return node.kind === ts.SyntaxKind.StringLiteral;
}

/**
 * Return true if node is `JsxText`
 * @param node A TypeScript node
 */
export function isJsxText(node: ts.JsxText): node is ts.JsxText {
    return node.kind === ts.SyntaxKind.JsxText;
}

/**
 * Return true if node is `RegularExpressionLiteral`
 * @param node A TypeScript node
 */
export function isRegularExpressionLiteral(node: ts.RegularExpressionLiteral): node is ts.RegularExpressionLiteral {
    return node.kind === ts.SyntaxKind.RegularExpressionLiteral;
}

/**
 * Return true if node is `NoSubstitutionTemplateLiteral`
 * @param node A TypeScript node
 */
export function isNoSubstitutionTemplateLiteral(node: ts.NoSubstitutionTemplateLiteral): node is ts.NoSubstitutionTemplateLiteral {
    return node.kind === ts.SyntaxKind.NoSubstitutionTemplateLiteral;
}

/**
 * Return true if node is `TemplateHead`
 * @param node A TypeScript node
 */
export function isTemplateHead(node: ts.TemplateHead): node is ts.TemplateHead {
    return node.kind === ts.SyntaxKind.TemplateHead;
}

/**
 * Return true if node is `TemplateMiddle`
 * @param node A TypeScript node
 */
export function isTemplateMiddle(node: ts.TemplateMiddle): node is ts.TemplateMiddle {
    return node.kind === ts.SyntaxKind.TemplateMiddle;
}

/**
 * Return true if node is `TemplateTail`
 * @param node A TypeScript node
 */
export function isTemplateTail(node: ts.TemplateTail): node is ts.TemplateTail {
    return node.kind === ts.SyntaxKind.TemplateTail;
}

/**
 * Return true if node is `DotDotDotToken`
 * @param node A TypeScript node
 */
export function isDotDotDotToken(node: ts.DotDotDotToken): node is ts.DotDotDotToken {
    return node.kind === ts.SyntaxKind.DotDotDotToken;
}

/**
 * Return true if node is `EqualsGreaterThanToken`
 * @param node A TypeScript node
 */
export function isEqualsGreaterThanToken(node: ts.EqualsGreaterThanToken): node is ts.EqualsGreaterThanToken {
    return node.kind === ts.SyntaxKind.EqualsGreaterThanToken;
}

/**
 * Return true if node is `AsteriskToken`
 * @param node A TypeScript node
 */
export function isAsteriskToken(node: ts.AsteriskToken): node is ts.AsteriskToken {
    return node.kind === ts.SyntaxKind.AsteriskToken;
}

/**
 * Return true if node is `QuestionToken`
 * @param node A TypeScript node
 */
export function isQuestionToken(node: ts.QuestionToken): node is ts.QuestionToken {
    return node.kind === ts.SyntaxKind.QuestionToken;
}

/**
 * Return true if node is `ColonToken`
 * @param node A TypeScript node
 */
export function isColonToken(node: ts.ColonToken): node is ts.ColonToken {
    return node.kind === ts.SyntaxKind.ColonToken;
}

/**
 * Return true if node is `AtToken`
 * @param node A TypeScript node
 */
export function isAtToken(node: ts.AtToken): node is ts.AtToken {
    return node.kind === ts.SyntaxKind.AtToken;
}

/**
 * Return true if node is `EqualsToken`
 * @param node A TypeScript node
 */
export function isEqualsToken(node: ts.EqualsToken): node is ts.EqualsToken {
    return node.kind === ts.SyntaxKind.EqualsToken;
}

/**
 * Return true if node is `Identifier`
 * @param node A TypeScript node
 */
export function isIdentifier(node: ts.Identifier): node is ts.Identifier {
    return node.kind === ts.SyntaxKind.Identifier;
}

/**
 * Return true if node is `QualifiedName`
 * @param node A TypeScript node
 */
export function isQualifiedName(node: ts.QualifiedName): node is ts.QualifiedName {
    return node.kind === ts.SyntaxKind.QualifiedName;
}

/**
 * Return true if node is `ComputedPropertyName`
 * @param node A TypeScript node
 */
export function isComputedPropertyName(node: ts.ComputedPropertyName): node is ts.ComputedPropertyName {
    return node.kind === ts.SyntaxKind.ComputedPropertyName;
}

/**
 * Return true if node is `Decorator`
 * @param node A TypeScript node
 */
export function isDecorator(node: ts.Decorator): node is ts.Decorator {
    return node.kind === ts.SyntaxKind.Decorator;
}

/**
 * Return true if node is `PropertySignature`
 * @param node A TypeScript node
 */
export function isPropertySignature(node: ts.PropertySignature): node is ts.PropertySignature {
    return node.kind === ts.SyntaxKind.PropertySignature;
}

/**
 * Return true if node is `PropertyDeclaration`
 * @param node A TypeScript node
 */
export function isPropertyDeclaration(node: ts.PropertyDeclaration): node is ts.PropertyDeclaration {
    return node.kind === ts.SyntaxKind.PropertyDeclaration;
}

/**
 * Return true if node is `MethodSignature`
 * @param node A TypeScript node
 */
export function isMethodSignature(node: ts.MethodSignature): node is ts.MethodSignature {
    return node.kind === ts.SyntaxKind.MethodSignature;
}

/**
 * Return true if node is `MethodDeclaration`
 * @param node A TypeScript node
 */
export function isMethodDeclaration(node: ts.MethodDeclaration): node is ts.MethodDeclaration {
    return node.kind === ts.SyntaxKind.MethodDeclaration;
}

/**
 * Return true if node is `ObjectBindingPattern`
 * @param node A TypeScript node
 */
export function isObjectBindingPattern(node: ts.ObjectBindingPattern): node is ts.ObjectBindingPattern {
    return node.kind === ts.SyntaxKind.ObjectBindingPattern;
}

/**
 * Return true if node is `ArrayBindingPattern`
 * @param node A TypeScript node
 */
export function isArrayBindingPattern(node: ts.ArrayBindingPattern): node is ts.ArrayBindingPattern {
    return node.kind === ts.SyntaxKind.ArrayBindingPattern;
}

/**
 * Return true if node is `BindingElement`
 * @param node A TypeScript node
 */
export function isBindingElement(node: ts.BindingElement): node is ts.BindingElement {
    return node.kind === ts.SyntaxKind.BindingElement;
}

/**
 * Return true if node is `ArrayLiteralExpression`
 * @param node A TypeScript node
 */
export function isArrayLiteralExpression(node: ts.ArrayLiteralExpression): node is ts.ArrayLiteralExpression {
    return node.kind === ts.SyntaxKind.ArrayLiteralExpression;
}

/**
 * Return true if node is `ObjectLiteralExpression`
 * @param node A TypeScript node
 */
export function isObjectLiteralExpression(node: ts.ObjectLiteralExpression): node is ts.ObjectLiteralExpression {
    return node.kind === ts.SyntaxKind.ObjectLiteralExpression;
}

/**
 * Return true if node is `PropertyAccessExpression`
 * @param node A TypeScript node
 */
export function isPropertyAccessExpression(node: ts.PropertyAccessExpression): node is ts.PropertyAccessExpression {
    return node.kind === ts.SyntaxKind.PropertyAccessExpression;
}

/**
 * Return true if node is `ElementAccessExpression`
 * @param node A TypeScript node
 */
export function isElementAccessExpression(node: ts.ElementAccessExpression): node is ts.ElementAccessExpression {
    return node.kind === ts.SyntaxKind.ElementAccessExpression;
}

/**
 * Return true if node is `CallExpression`
 * @param node A TypeScript node
 */
export function isCallExpression(node: ts.CallExpression): node is ts.CallExpression {
    return node.kind === ts.SyntaxKind.CallExpression;
}

/**
 * Return true if node is `NewExpression`
 * @param node A TypeScript node
 */
export function isNewExpression(node: ts.NewExpression): node is ts.NewExpression {
    return node.kind === ts.SyntaxKind.NewExpression;
}

/**
 * Return true if node is `TaggedTemplateExpression`
 * @param node A TypeScript node
 */
export function isTaggedTemplateExpression(node: ts.TaggedTemplateExpression): node is ts.TaggedTemplateExpression {
    return node.kind === ts.SyntaxKind.TaggedTemplateExpression;
}


/**
 * Return true if node is `ParenthesizedExpression`
 * @param node A TypeScript node
 */
export function isParenthesizedExpression(node: ts.ParenthesizedExpression): node is ts.ParenthesizedExpression {
    return node.kind === ts.SyntaxKind.ParenthesizedExpression;
}

/**
 * Return true if node is `FunctionExpression`
 * @param node A TypeScript node
 */
export function isFunctionExpression(node: ts.FunctionExpression): node is ts.FunctionExpression {
    return node.kind === ts.SyntaxKind.FunctionExpression;
}

/**
 * Return true if node is `ArrowFunction`
 * @param node A TypeScript node
 */
export function isArrowFunction(node: ts.ArrowFunction): node is ts.ArrowFunction {
    return node.kind === ts.SyntaxKind.ArrowFunction;
}

/**
 * Return true if node is `DeleteExpression`
 * @param node A TypeScript node
 */
export function isDeleteExpression(node: ts.DeleteExpression): node is ts.DeleteExpression {
    return node.kind === ts.SyntaxKind.DeleteExpression;
}

/**
 * Return true if node is `TypeOfExpression`
 * @param node A TypeScript node
 */
export function isTypeOfExpression(node: ts.TypeOfExpression): node is ts.TypeOfExpression {
    return node.kind === ts.SyntaxKind.TypeOfExpression;
}

/**
 * Return true if node is `VoidExpression`
 * @param node A TypeScript node
 */
export function isVoidExpression(node: ts.VoidExpression): node is ts.VoidExpression {
    return node.kind === ts.SyntaxKind.VoidExpression;
}

/**
 * Return true if node is `AwaitExpression`
 * @param node A TypeScript node
 */
export function isAwaitExpression(node: ts.AwaitExpression): node is ts.AwaitExpression {
    return node.kind === ts.SyntaxKind.AwaitExpression;
}

/**
 * Return true if node is `PrefixUnaryExpression`
 * @param node A TypeScript node
 */
export function isPrefixUnaryExpression(node: ts.PrefixUnaryExpression): node is ts.PrefixUnaryExpression {
    return node.kind === ts.SyntaxKind.PrefixUnaryExpression;
}

/**
 * Return true if node is `PostfixUnaryExpression`
 * @param node A TypeScript node
 */
export function isPostfixUnaryExpression(node: ts.PostfixUnaryExpression): node is ts.PostfixUnaryExpression {
    return node.kind === ts.SyntaxKind.PostfixUnaryExpression;
}

/**
 * Return true if node is `BinaryExpression`
 * @param node A TypeScript node
 */
export function isBinaryExpression(node: ts.BinaryExpression): node is ts.BinaryExpression {
    return node.kind === ts.SyntaxKind.BinaryExpression;
}

/**
 * Return true if node is `ConditionalExpression`
 * @param node A TypeScript node
 */
export function isConditionalExpression(node: ts.ConditionalExpression): node is ts.ConditionalExpression {
    return node.kind === ts.SyntaxKind.ConditionalExpression;
}

/**
 * Return true if node is `TemplateExpression`
 * @param node A TypeScript node
 */
export function isTemplateExpression(node: ts.TemplateExpression): node is ts.TemplateExpression {
    return node.kind === ts.SyntaxKind.TemplateExpression;
}

/**
 * Return true if node is `YieldExpression`
 * @param node A TypeScript node
 */
export function isYieldExpression(node: ts.YieldExpression): node is ts.YieldExpression {
    return node.kind === ts.SyntaxKind.YieldExpression;
}

/**
 * Return true if node is `SpreadElement`
 * @param node A TypeScript node
 */
export function isSpreadElement(node: ts.SpreadElement): node is ts.SpreadElement {
    return node.kind === ts.SyntaxKind.SpreadElement;
}

/**
 * Return true if node is `ClassExpression`
 * @param node A TypeScript node
 */
export function isClassExpression(node: ts.ClassExpression): node is ts.ClassExpression {
    return node.kind === ts.SyntaxKind.ClassExpression;
}

/**
 * Return true if node is `OmittedExpression`
 * @param node A TypeScript node
 */
export function isOmittedExpression(node: ts.OmittedExpression): node is ts.OmittedExpression {
    return node.kind === ts.SyntaxKind.OmittedExpression;
}

/**
 * Return true if node is `ExpressionWithTypeArguments`
 * @param node A TypeScript node
 */
export function isExpressionWithTypeArguments(node: ts.ExpressionWithTypeArguments): node is ts.ExpressionWithTypeArguments {
    return node.kind === ts.SyntaxKind.ExpressionWithTypeArguments;
}

/**
 * Return true if node is `AsExpression`
 * @param node A TypeScript node
 */
export function isAsExpression(node: ts.AsExpression): node is ts.AsExpression {
    return node.kind === ts.SyntaxKind.AsExpression;
}

/**
 * Return true if node is `NonNullExpression`
 * @param node A TypeScript node
 */
export function isNonNullExpression(node: ts.NonNullExpression): node is ts.NonNullExpression {
    return node.kind === ts.SyntaxKind.NonNullExpression;
}

/**
 * Return true if node is `MetaProperty`
 * @param node A TypeScript node
 */
export function isMetaProperty(node: ts.MetaProperty): node is ts.MetaProperty {
    return node.kind === ts.SyntaxKind.MetaProperty;
}

/**
 * Return true if node is `TemplateSpan`
 * @param node A TypeScript node
 */
export function isTemplateSpan(node: ts.TemplateSpan): node is ts.TemplateSpan {
    return node.kind === ts.SyntaxKind.TemplateSpan;
}

/**
 * Return true if node is `SemicolonClassElement`
 * @param node A TypeScript node
 */
export function isSemicolonClassElement(node: ts.SemicolonClassElement): node is ts.SemicolonClassElement {
    return node.kind === ts.SyntaxKind.SemicolonClassElement;
}

/**
 * Return true if node is `Block`
 * @param node A TypeScript node
 */
export function isBlock(node: ts.Block): node is ts.Block {
    return node.kind === ts.SyntaxKind.Block;
}

/**
 * Return true if node is `VariableStatement`
 * @param node A TypeScript node
 */
export function isVariableStatement(node: ts.VariableStatement): node is ts.VariableStatement {
    return node.kind === ts.SyntaxKind.VariableStatement;
}

/**
 * Return true if node is `EmptyStatement`
 * @param node A TypeScript node
 */
export function isEmptyStatement(node: ts.EmptyStatement): node is ts.EmptyStatement {
    return node.kind === ts.SyntaxKind.EmptyStatement;
}

/**
 * Return true if node is `ExpressionStatement`
 * @param node A TypeScript node
 */
export function isExpressionStatement(node: ts.ExpressionStatement): node is ts.ExpressionStatement {
    return node.kind === ts.SyntaxKind.ExpressionStatement;
}

/**
 * Return true if node is `IfStatement`
 * @param node A TypeScript node
 */
export function isIfStatement(node: ts.IfStatement): node is ts.IfStatement {
    return node.kind === ts.SyntaxKind.IfStatement;
}

/**
 * Return true if node is `DoStatement`
 * @param node A TypeScript node
 */
export function isDoStatement(node: ts.DoStatement): node is ts.DoStatement {
    return node.kind === ts.SyntaxKind.DoStatement;
}

/**
 * Return true if node is `WhileStatement`
 * @param node A TypeScript node
 */
export function isWhileStatement(node: ts.WhileStatement): node is ts.WhileStatement {
    return node.kind === ts.SyntaxKind.WhileStatement;
}

/**
 * Return true if node is `ForStatement`
 * @param node A TypeScript node
 */
export function isForStatement(node: ts.ForStatement): node is ts.ForStatement {
    return node.kind === ts.SyntaxKind.ForStatement;
}

/**
 * Return true if node is `ForInStatement`
 * @param node A TypeScript node
 */
export function isForInStatement(node: ts.ForInStatement): node is ts.ForInStatement {
    return node.kind === ts.SyntaxKind.ForInStatement;
}

/**
 * Return true if node is `ForOfStatement`
 * @param node A TypeScript node
 */
export function isForOfStatement(node: ts.ForOfStatement): node is ts.ForOfStatement {
    return node.kind === ts.SyntaxKind.ForOfStatement;
}

/**
 * Return true if node is `ContinueStatement`
 * @param node A TypeScript node
 */
export function isContinueStatement(node: ts.ContinueStatement): node is ts.ContinueStatement {
    return node.kind === ts.SyntaxKind.ContinueStatement;
}

/**
 * Return true if node is `BreakStatement`
 * @param node A TypeScript node
 */
export function isBreakStatement(node: ts.BreakStatement): node is ts.BreakStatement {
    return node.kind === ts.SyntaxKind.BreakStatement;
}

/**
 * Return true if node is `ReturnStatement`
 * @param node A TypeScript node
 */
export function isReturnStatement(node: ts.ReturnStatement): node is ts.ReturnStatement {
    return node.kind === ts.SyntaxKind.ReturnStatement;
}

/**
 * Return true if node is `WithStatement`
 * @param node A TypeScript node
 */
export function isWithStatement(node: ts.WithStatement): node is ts.WithStatement {
    return node.kind === ts.SyntaxKind.WithStatement;
}

/**
 * Return true if node is `SwitchStatement`
 * @param node A TypeScript node
 */
export function isSwitchStatement(node: ts.SwitchStatement): node is ts.SwitchStatement {
    return node.kind === ts.SyntaxKind.SwitchStatement;
}

/**
 * Return true if node is `LabeledStatement`
 * @param node A TypeScript node
 */
export function isLabeledStatement(node: ts.LabeledStatement): node is ts.LabeledStatement {
    return node.kind === ts.SyntaxKind.LabeledStatement;
}

/**
 * Return true if node is `ThrowStatement`
 * @param node A TypeScript node
 */
export function isThrowStatement(node: ts.ThrowStatement): node is ts.ThrowStatement {
    return node.kind === ts.SyntaxKind.ThrowStatement;
}

/**
 * Return true if node is `TryStatement`
 * @param node A TypeScript node
 */
export function isTryStatement(node: ts.TryStatement): node is ts.TryStatement {
    return node.kind === ts.SyntaxKind.TryStatement;
}

/**
 * Return true if node is `DebuggerStatement`
 * @param node A TypeScript node
 */
export function isDebuggerStatement(node: ts.DebuggerStatement): node is ts.DebuggerStatement {
    return node.kind === ts.SyntaxKind.DebuggerStatement;
}

/**
 * Return true if node is `VariableDeclaration`
 * @param node A TypeScript node
 */
export function isVariableDeclaration(node: ts.VariableDeclaration): node is ts.VariableDeclaration {
    return node.kind === ts.SyntaxKind.VariableDeclaration;
}

/**
 * Return true if node is `VariableDeclarationList`
 * @param node A TypeScript node
 */
export function isVariableDeclarationList(node: ts.VariableDeclarationList): node is ts.VariableDeclarationList {
    return node.kind === ts.SyntaxKind.VariableDeclarationList;
}

/**
 * Return true if node is `FunctionDeclaration`
 * @param node A TypeScript node
 */
export function isFunctionDeclaration(node: ts.FunctionDeclaration): node is ts.FunctionDeclaration {
    return node.kind === ts.SyntaxKind.FunctionDeclaration;
}

/**
 * Return true if node is `ClassDeclaration`
 * @param node A TypeScript node
 */
export function isClassDeclaration(node: ts.ClassDeclaration): node is ts.ClassDeclaration {
    return node.kind === ts.SyntaxKind.ClassDeclaration;
}

/**
 * Return true if node is `InterfaceDeclaration`
 * @param node A TypeScript node
 */
export function isInterfaceDeclaration(node: ts.InterfaceDeclaration): node is ts.InterfaceDeclaration {
    return node.kind === ts.SyntaxKind.InterfaceDeclaration;
}

/**
 * Return true if node is `TypeAliasDeclaration`
 * @param node A TypeScript node
 */
export function isTypeAliasDeclaration(node: ts.TypeAliasDeclaration): node is ts.TypeAliasDeclaration {
    return node.kind === ts.SyntaxKind.TypeAliasDeclaration;
}

/**
 * Return true if node is `EnumDeclaration`
 * @param node A TypeScript node
 */
export function isEnumDeclaration(node: ts.EnumDeclaration): node is ts.EnumDeclaration {
    return node.kind === ts.SyntaxKind.EnumDeclaration;
}

/**
 * Return true if node is `ModuleDeclaration`
 * @param node A TypeScript node
 */
export function isModuleDeclaration(node: ts.ModuleDeclaration): node is ts.ModuleDeclaration {
    return node.kind === ts.SyntaxKind.ModuleDeclaration;
}

/**
 * Return true if node is `ModuleBlock`
 * @param node A TypeScript node
 */
export function isModuleBlock(node: ts.ModuleBlock): node is ts.ModuleBlock {
    return node.kind === ts.SyntaxKind.ModuleBlock;
}

/**
 * Return true if node is `CaseBlock`
 * @param node A TypeScript node
 */
export function isCaseBlock(node: ts.CaseBlock): node is ts.CaseBlock {
    return node.kind === ts.SyntaxKind.CaseBlock;
}

/**
 * Return true if node is `NamespaceExportDeclaration`
 * @param node A TypeScript node
 */
export function isNamespaceExportDeclaration(node: ts.NamespaceExportDeclaration): node is ts.NamespaceExportDeclaration {
    return node.kind === ts.SyntaxKind.NamespaceExportDeclaration;
}

/**
 * Return true if node is `ImportEqualsDeclaration`
 * @param node A TypeScript node
 */
export function isImportEqualsDeclaration(node: ts.ImportEqualsDeclaration): node is ts.ImportEqualsDeclaration {
    return node.kind === ts.SyntaxKind.ImportEqualsDeclaration;
}

/**
 * Return true if node is `ImportDeclaration`
 * @param node A TypeScript node
 */
export function isImportDeclaration(node: ts.ImportDeclaration): node is ts.ImportDeclaration {
    return node.kind === ts.SyntaxKind.ImportDeclaration;
}

/**
 * Return true if node is `ImportClause`
 * @param node A TypeScript node
 */
export function isImportClause(node: ts.ImportClause): node is ts.ImportClause {
    return node.kind === ts.SyntaxKind.ImportClause;
}

/**
 * Return true if node is `NamespaceImport`
 * @param node A TypeScript node
 */
export function isNamespaceImport(node: ts.NamespaceImport): node is ts.NamespaceImport {
    return node.kind === ts.SyntaxKind.NamespaceImport;
}

/**
 * Return true if node is `NamedImports`
 * @param node A TypeScript node
 */
export function isNamedImports(node: ts.NamedImports): node is ts.NamedImports {
    return node.kind === ts.SyntaxKind.NamedImports;
}

/**
 * Return true if node is `ImportSpecifier`
 * @param node A TypeScript node
 */
export function isImportSpecifier(node: ts.ImportSpecifier): node is ts.ImportSpecifier {
    return node.kind === ts.SyntaxKind.ImportSpecifier;
}

/**
 * Return true if node is `ExportAssignment`
 * @param node A TypeScript node
 */
export function isExportAssignment(node: ts.ExportAssignment): node is ts.ExportAssignment {
    return node.kind === ts.SyntaxKind.ExportAssignment;
}

/**
 * Return true if node is `ExportDeclaration`
 * @param node A TypeScript node
 */
export function isExportDeclaration(node: ts.ExportDeclaration): node is ts.ExportDeclaration {
    return node.kind === ts.SyntaxKind.ExportDeclaration;
}

/**
 * Return true if node is `NamedExports`
 * @param node A TypeScript node
 */
export function isNamedExports(node: ts.NamedExports): node is ts.NamedExports {
    return node.kind === ts.SyntaxKind.NamedExports;
}

/**
 * Return true if node is `ExportSpecifier`
 * @param node A TypeScript node
 */
export function isExportSpecifier(node: ts.ExportSpecifier): node is ts.ExportSpecifier {
    return node.kind === ts.SyntaxKind.ExportSpecifier;
}

/**
 * Return true if node is `MissingDeclaration`
 * @param node A TypeScript node
 */
export function isMissingDeclaration(node: ts.MissingDeclaration): node is ts.MissingDeclaration {
    return node.kind === ts.SyntaxKind.MissingDeclaration;
}

/**
 * Return true if node is `ExternalModuleReference`
 * @param node A TypeScript node
 */
export function isExternalModuleReference(node: ts.ExternalModuleReference): node is ts.ExternalModuleReference {
    return node.kind === ts.SyntaxKind.ExternalModuleReference;
}

/**
 * Return true if node is `JsxElement`
 * @param node A TypeScript node
 */
export function isJsxElement(node: ts.JsxElement): node is ts.JsxElement {
    return node.kind === ts.SyntaxKind.JsxElement;
}

/**
 * Return true if node is `JsxSelfClosingElement`
 * @param node A TypeScript node
 */
export function isJsxSelfClosingElement(node: ts.JsxSelfClosingElement): node is ts.JsxSelfClosingElement {
    return node.kind === ts.SyntaxKind.JsxSelfClosingElement;
}

/**
 * Return true if node is `JsxOpeningElement`
 * @param node A TypeScript node
 */
export function isJsxOpeningElement(node: ts.JsxOpeningElement): node is ts.JsxOpeningElement {
    return node.kind === ts.SyntaxKind.JsxOpeningElement;
}

/**
 * Return true if node is `JsxClosingElement`
 * @param node A TypeScript node
 */
export function isJsxClosingElement(node: ts.JsxClosingElement): node is ts.JsxClosingElement {
    return node.kind === ts.SyntaxKind.JsxClosingElement;
}

/**
 * Return true if node is `JsxFragment`
 * @param node A TypeScript node
 */
export function isJsxFragment(node: ts.JsxFragment): node is ts.JsxFragment {
    return node.kind === ts.SyntaxKind.JsxFragment;
}

/**
 * Return true if node is `JsxOpeningFragment`
 * @param node A TypeScript node
 */
export function isJsxOpeningFragment(node: ts.JsxOpeningFragment): node is ts.JsxOpeningFragment {
    return node.kind === ts.SyntaxKind.JsxOpeningFragment;
}

/**
 * Return true if node is `JsxClosingFragment`
 * @param node A TypeScript node
 */
export function isJsxClosingFragment(node: ts.JsxClosingFragment): node is ts.JsxClosingFragment {
    return node.kind === ts.SyntaxKind.JsxClosingFragment;
}

/**
 * Return true if node is `JsxAttribute`
 * @param node A TypeScript node
 */
export function isJsxAttribute(node: ts.JsxAttribute): node is ts.JsxAttribute {
    return node.kind === ts.SyntaxKind.JsxAttribute;
}

/**
 * Return true if node is `JsxAttributes`
 * @param node A TypeScript node
 */
export function isJsxAttributes(node: ts.JsxAttributes): node is ts.JsxAttributes {
    return node.kind === ts.SyntaxKind.JsxAttributes;
}

/**
 * Return true if node is `JsxSpreadAttribute`
 * @param node A TypeScript node
 */
export function isJsxSpreadAttribute(node: ts.JsxSpreadAttribute): node is ts.JsxSpreadAttribute {
    return node.kind === ts.SyntaxKind.JsxSpreadAttribute;
}

/**
 * Return true if node is `JsxExpression`
 * @param node A TypeScript node
 */
export function isJsxExpression(node: ts.JsxExpression): node is ts.JsxExpression {
    return node.kind === ts.SyntaxKind.JsxExpression;
}

/**
 * Return true if node is `CaseClause`
 * @param node A TypeScript node
 */
export function isCaseClause(node: ts.CaseClause): node is ts.CaseClause {
    return node.kind === ts.SyntaxKind.CaseClause;
}

/**
 * Return true if node is `DefaultClause`
 * @param node A TypeScript node
 */
export function isDefaultClause(node: ts.DefaultClause): node is ts.DefaultClause {
    return node.kind === ts.SyntaxKind.DefaultClause;
}

/**
 * Return true if node is `HeritageClause`
 * @param node A TypeScript node
 */
export function isHeritageClause(node: ts.HeritageClause): node is ts.HeritageClause {
    return node.kind === ts.SyntaxKind.HeritageClause;
}

/**
 * Return true if node is `CatchClause`
 * @param node A TypeScript node
 */
export function isCatchClause(node: ts.CatchClause): node is ts.CatchClause {
    return node.kind === ts.SyntaxKind.CatchClause;
}

/**
 * Return true if node is `PropertyAssignment`
 * @param node A TypeScript node
 */
export function isPropertyAssignment(node: ts.PropertyAssignment): node is ts.PropertyAssignment {
    return node.kind === ts.SyntaxKind.PropertyAssignment;
}

/**
 * Return true if node is `ShorthandPropertyAssignment`
 * @param node A TypeScript node
 */
export function isShorthandPropertyAssignment(node: ts.ShorthandPropertyAssignment): node is ts.ShorthandPropertyAssignment {
    return node.kind === ts.SyntaxKind.ShorthandPropertyAssignment;
}

/**
 * Return true if node is `SpreadAssignment`
 * @param node A TypeScript node
 */
export function isSpreadAssignment(node: ts.SpreadAssignment): node is ts.SpreadAssignment {
    return node.kind === ts.SyntaxKind.SpreadAssignment;
}

/**
 * Return true if node is `EnumMember`
 * @param node A TypeScript node
 */
export function isEnumMember(node: ts.EnumMember): node is ts.EnumMember {
    return node.kind === ts.SyntaxKind.EnumMember;
}

/**
 * Return true if node is `SourceFile`
 * @param node A TypeScript node
 */
export function isSourceFile(node: ts.SourceFile): node is ts.SourceFile {
    return node.kind === ts.SyntaxKind.SourceFile;
}

/**
 * Return true if node is `Bundle`
 * @param node A TypeScript node
 */
export function isBundle(node: ts.Bundle): node is ts.Bundle {
    return node.kind === ts.SyntaxKind.Bundle;
}

/**
 * Return true if node is `JSDocTypeExpression`
 * @param node A TypeScript node
 */
export function isJSDocTypeExpression(node: ts.JSDocTypeExpression): node is ts.JSDocTypeExpression {
    return node.kind === ts.SyntaxKind.JSDocTypeExpression;
}

/**
 * Return true if node is `JSDocAllType`
 * @param node A TypeScript node
 */
export function isJSDocAllType(node: ts.JSDocAllType): node is ts.JSDocAllType {
    return node.kind === ts.SyntaxKind.JSDocAllType;
}

/**
 * Return true if node is `JSDocUnknownType`
 * @param node A TypeScript node
 */
export function isJSDocUnknownType(node: ts.JSDocUnknownType): node is ts.JSDocUnknownType {
    return node.kind === ts.SyntaxKind.JSDocUnknownType;
}

/**
 * Return true if node is `JSDocNullableType`
 * @param node A TypeScript node
 */
export function isJSDocNullableType(node: ts.JSDocNullableType): node is ts.JSDocNullableType {
    return node.kind === ts.SyntaxKind.JSDocNullableType;
}

/**
 * Return true if node is `JSDocNonNullableType`
 * @param node A TypeScript node
 */
export function isJSDocNonNullableType(node: ts.JSDocNonNullableType): node is ts.JSDocNonNullableType {
    return node.kind === ts.SyntaxKind.JSDocNonNullableType;
}

/**
 * Return true if node is `JSDocOptionalType`
 * @param node A TypeScript node
 */
export function isJSDocOptionalType(node: ts.JSDocOptionalType): node is ts.JSDocOptionalType {
    return node.kind === ts.SyntaxKind.JSDocOptionalType;
}

/**
 * Return true if node is `JSDocFunctionType`
 * @param node A TypeScript node
 */
export function isJSDocFunctionType(node: ts.JSDocFunctionType): node is ts.JSDocFunctionType {
    return node.kind === ts.SyntaxKind.JSDocFunctionType;
}

/**
 * Return true if node is `JSDocVariadicType`
 * @param node A TypeScript node
 */
export function isJSDocVariadicType(node: ts.JSDocVariadicType): node is ts.JSDocVariadicType {
    return node.kind === ts.SyntaxKind.JSDocVariadicType;
}

/**
 * Return true if node is `JSDocTag`
 * @param node A TypeScript node
 */
export function isJSDocTag(node: ts.JSDocTag): node is ts.JSDocTag {
    return node.kind === ts.SyntaxKind.JSDocTag;
}

/**
 * Return true if node is `JSDocAugmentsTag`
 * @param node A TypeScript node
 */
export function isJSDocAugmentsTag(node: ts.JSDocAugmentsTag): node is ts.JSDocAugmentsTag {
    return node.kind === ts.SyntaxKind.JSDocAugmentsTag;
}

/**
 * Return true if node is `JSDocClassTag`
 * @param node A TypeScript node
 */
export function isJSDocClassTag(node: ts.JSDocClassTag): node is ts.JSDocClassTag {
    return node.kind === ts.SyntaxKind.JSDocClassTag;
}

/**
 * Return true if node is `JSDocParameterTag`
 * @param node A TypeScript node
 */
export function isJSDocParameterTag(node: ts.JSDocParameterTag): node is ts.JSDocParameterTag {
    return node.kind === ts.SyntaxKind.JSDocParameterTag;
}

/**
 * Return true if node is `JSDocReturnTag`
 * @param node A TypeScript node
 */
export function isJSDocReturnTag(node: ts.JSDocReturnTag): node is ts.JSDocReturnTag {
    return node.kind === ts.SyntaxKind.JSDocReturnTag;
}

/**
 * Return true if node is `JSDocTypeTag`
 * @param node A TypeScript node
 */
export function isJSDocTypeTag(node: ts.JSDocTypeTag): node is ts.JSDocTypeTag {
    return node.kind === ts.SyntaxKind.JSDocTypeTag;
}

/**
 * Return true if node is `JSDocTemplateTag`
 * @param node A TypeScript node
 */
export function isJSDocTemplateTag(node: ts.JSDocTemplateTag): node is ts.JSDocTemplateTag {
    return node.kind === ts.SyntaxKind.JSDocTemplateTag;
}

/**
 * Return true if node is `JSDocTypedefTag`
 * @param node A TypeScript node
 */
export function isJSDocTypedefTag(node: ts.JSDocTypedefTag): node is ts.JSDocTypedefTag {
    return node.kind === ts.SyntaxKind.JSDocTypedefTag;
}

/**
 * Return true if node is `JSDocPropertyTag`
 * @param node A TypeScript node
 */
export function isJSDocPropertyTag(node: ts.JSDocPropertyTag): node is ts.JSDocPropertyTag {
    return node.kind === ts.SyntaxKind.JSDocPropertyTag;
}

/**
 * Return true if node is `JSDocTypeLiteral`
 * @param node A TypeScript node
 */
export function isJSDocTypeLiteral(node: ts.JSDocTypeLiteral): node is ts.JSDocTypeLiteral {
    return node.kind === ts.SyntaxKind.JSDocTypeLiteral;
}

/**
 * Return true if node is `SyntaxList`
 * @param node A TypeScript node
 */
export function isSyntaxList(node: ts.SyntaxList): node is ts.SyntaxList {
    return node.kind === ts.SyntaxKind.SyntaxList;
}

/**
 * Return true if node is `NotEmittedStatement`
 * @param node A TypeScript node
 */
export function isNotEmittedStatement(node: ts.NotEmittedStatement): node is ts.NotEmittedStatement {
    return node.kind === ts.SyntaxKind.NotEmittedStatement;
}

/**
 * Return true if node is `PartiallyEmittedExpression`
 * @param node A TypeScript node
 */
export function isPartiallyEmittedExpression(node: ts.PartiallyEmittedExpression): node is ts.PartiallyEmittedExpression {
    return node.kind === ts.SyntaxKind.PartiallyEmittedExpression;
}

/**
 * Return true if node is `CommaListExpression`
 * @param node A TypeScript node
 */
export function isCommaListExpression(node: ts.CommaListExpression): node is ts.CommaListExpression {
    return node.kind === ts.SyntaxKind.CommaListExpression;
}
