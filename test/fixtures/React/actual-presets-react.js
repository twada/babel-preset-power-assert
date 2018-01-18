var _powerAssertVisitorKeys = '{"ArrayExpression":["elements"],"AssignmentExpression":["left","right"],"BinaryExpression":["left","right"],"Directive":["value"],"DirectiveLiteral":[],"BlockStatement":["directives","body"],"BreakStatement":["label"],"CallExpression":["callee","arguments"],"CatchClause":["param","body"],"ConditionalExpression":["test","consequent","alternate"],"ContinueStatement":["label"],"DebuggerStatement":[],"DoWhileStatement":["test","body"],"EmptyStatement":[],"ExpressionStatement":["expression"],"File":["program"],"ForInStatement":["left","right","body"],"ForStatement":["init","test","update","body"],"FunctionDeclaration":["id","params","body","returnType","typeParameters"],"FunctionExpression":["id","params","body","returnType","typeParameters"],"Identifier":["typeAnnotation"],"IfStatement":["test","consequent","alternate"],"LabeledStatement":["label","body"],"StringLiteral":[],"NumericLiteral":[],"NullLiteral":[],"BooleanLiteral":[],"RegExpLiteral":[],"LogicalExpression":["left","right"],"MemberExpression":["object","property"],"NewExpression":["callee","arguments"],"Program":["directives","body"],"ObjectExpression":["properties"],"ObjectMethod":["key","params","body","decorators","returnType","typeParameters"],"ObjectProperty":["key","value","decorators"],"RestElement":["argument","typeAnnotation"],"ReturnStatement":["argument"],"SequenceExpression":["expressions"],"SwitchCase":["test","consequent"],"SwitchStatement":["discriminant","cases"],"ThisExpression":[],"ThrowStatement":["argument"],"TryStatement":["block","handler","finalizer"],"UnaryExpression":["argument"],"UpdateExpression":["argument"],"VariableDeclaration":["declarations"],"VariableDeclarator":["id","init"],"WhileStatement":["test","body"],"WithStatement":["object","body"],"AssignmentPattern":["left","right"],"ArrayPattern":["elements","typeAnnotation"],"ArrowFunctionExpression":["params","body","returnType","typeParameters"],"ClassBody":["body"],"ClassDeclaration":["id","body","superClass","mixins","typeParameters","superTypeParameters","implements","decorators"],"ClassExpression":["id","body","superClass","mixins","typeParameters","superTypeParameters","implements","decorators"],"ExportAllDeclaration":["source"],"ExportDefaultDeclaration":["declaration"],"ExportNamedDeclaration":["declaration","specifiers","source"],"ExportSpecifier":["local","exported"],"ForOfStatement":["left","right","body"],"ImportDeclaration":["specifiers","source"],"ImportDefaultSpecifier":["local"],"ImportNamespaceSpecifier":["local"],"ImportSpecifier":["local","imported"],"MetaProperty":["meta","property"],"ClassMethod":["key","params","body","decorators","returnType","typeParameters"],"ObjectPattern":["properties","typeAnnotation"],"SpreadElement":["argument"],"Super":[],"TaggedTemplateExpression":["tag","quasi"],"TemplateElement":[],"TemplateLiteral":["quasis","expressions"],"YieldExpression":["argument"],"AnyTypeAnnotation":[],"ArrayTypeAnnotation":["elementType"],"BooleanTypeAnnotation":[],"BooleanLiteralTypeAnnotation":[],"NullLiteralTypeAnnotation":[],"ClassImplements":["id","typeParameters"],"ClassProperty":["key","value","typeAnnotation","decorators"],"DeclareClass":["id","typeParameters","extends","body"],"DeclareFunction":["id"],"DeclareInterface":["id","typeParameters","extends","body"],"DeclareModule":["id","body"],"DeclareModuleExports":["typeAnnotation"],"DeclareTypeAlias":["id","typeParameters","right"],"DeclareOpaqueType":["id","typeParameters","supertype"],"DeclareVariable":["id"],"DeclareExportDeclaration":["declaration","specifiers","source"],"ExistentialTypeParam":[],"FunctionTypeAnnotation":["typeParameters","params","rest","returnType"],"FunctionTypeParam":["name","typeAnnotation"],"GenericTypeAnnotation":["id","typeParameters"],"InterfaceExtends":["id","typeParameters"],"InterfaceDeclaration":["id","typeParameters","extends","body"],"IntersectionTypeAnnotation":["types"],"MixedTypeAnnotation":[],"EmptyTypeAnnotation":[],"NullableTypeAnnotation":["typeAnnotation"],"NumericLiteralTypeAnnotation":[],"NumberTypeAnnotation":[],"StringLiteralTypeAnnotation":[],"StringTypeAnnotation":[],"ThisTypeAnnotation":[],"TupleTypeAnnotation":["types"],"TypeofTypeAnnotation":["argument"],"TypeAlias":["id","typeParameters","right"],"OpaqueType":["id","typeParameters","impltype","supertype"],"TypeAnnotation":["typeAnnotation"],"TypeCastExpression":["expression","typeAnnotation"],"TypeParameter":["bound"],"TypeParameterDeclaration":["params"],"TypeParameterInstantiation":["params"],"ObjectTypeAnnotation":["properties","indexers","callProperties"],"ObjectTypeCallProperty":["value"],"ObjectTypeIndexer":["id","key","value"],"ObjectTypeProperty":["key","value"],"ObjectTypeSpreadProperty":["argument"],"QualifiedTypeIdentifier":["id","qualification"],"UnionTypeAnnotation":["types"],"VoidTypeAnnotation":[],"JSXAttribute":["name","value"],"JSXClosingElement":["name"],"JSXElement":["openingElement","children","closingElement"],"JSXEmptyExpression":[],"JSXExpressionContainer":["expression"],"JSXSpreadChild":["expression"],"JSXIdentifier":[],"JSXMemberExpression":["object","property"],"JSXNamespacedName":["namespace","name"],"JSXOpeningElement":["name","attributes"],"JSXSpreadAttribute":["argument"],"JSXText":[],"Noop":[],"ParenthesizedExpression":["expression"],"AwaitExpression":["argument"],"ForAwaitStatement":["left","right","body"],"BindExpression":["object","callee"],"Import":[],"Decorator":["expression"],"DoExpression":["body"],"ExportDefaultSpecifier":["exported"],"ExportNamespaceSpecifier":["exported"],"RestProperty":["argument"],"SpreadProperty":["argument"]}',
    _powerAssertRecorder = function () { function PowerAssertRecorder() { this.captured = []; } PowerAssertRecorder.prototype._capt = function _capt(value, espath) { this.captured.push({ value: value, espath: espath }); return value; }; PowerAssertRecorder.prototype._expr = function _expr(value, source) { var capturedValues = this.captured; this.captured = []; return { powerAssertContext: { value: value, events: capturedValues }, source: source }; }; return PowerAssertRecorder; }();

import React from 'react';
import assert from 'power-assert';
import { shallow, mount } from 'enzyme';
import * as sinon from 'sinon';
import Foo from '../src/Foo';

class ToDoItem extends React.Component {
    render() {
        const { item, onCompleteChange } = this.props;
        return React.createElement(
            'div',
            { className: 'item' },
            React.createElement(
                'span',
                { className: 'item-mark' },
                item.complete ? '✓' : '•'
            ),
            React.createElement(
                'span',
                { className: 'item-title' },
                item.title
            ),
            React.createElement(
                'a',
                { className: 'item-button', onClick: () => onCompleteChange(item, !item.complete) },
                'Mark as ',
                item.complete ? 'Pending' : 'Complete'
            )
        );
    }
}

function mockItem(overrides) {
    // … create mock ToDo Item
}

describe('<ToDoItem />', () => {
    it('renders the title', () => {
        var _rec = new _powerAssertRecorder();

        const item = mockItem();
        assert(_rec._expr(_rec._capt(_rec._capt(_rec._capt(_rec._capt(shallow(React.createElement(ToDoItem, { item: item })), 'arguments/0/left/callee/object/callee/object').text(), 'arguments/0/left/callee/object').indexOf(_rec._capt(_rec._capt(item, 'arguments/0/left/arguments/0/object').title, 'arguments/0/left/arguments/0')), 'arguments/0/left') !== _rec._capt(-1, 'arguments/0/right'), 'arguments/0'), {
            content: 'assert(shallow(<ToDoItem item={item} />).text().indexOf(item.title) !== -1)',
            filepath: 'test/fixtures/React/fixture.js',
            line: 29,
            ast: '{"type":"CallExpression","callee":{"type":"Identifier","name":"assert","range":[0,6]},"arguments":[{"type":"BinaryExpression","operator":"!==","left":{"type":"CallExpression","callee":{"type":"MemberExpression","object":{"type":"CallExpression","callee":{"type":"MemberExpression","object":{"type":"CallExpression","callee":{"type":"Identifier","name":"shallow","range":[7,14]},"arguments":[{"type":"JSXElement","openingElement":{"type":"JSXOpeningElement","name":{"type":"JSXIdentifier","name":"ToDoItem","range":[16,24]},"attributes":[{"type":"JSXAttribute","name":{"type":"JSXIdentifier","name":"item","range":[25,29]},"value":{"type":"JSXExpressionContainer","expression":{"type":"Identifier","name":"item","range":[31,35]},"range":[30,36]},"range":[25,36]}],"selfClosing":true,"range":[15,39]},"closingElement":null,"children":[],"range":[15,39]}],"range":[7,40]},"property":{"type":"Identifier","name":"text","range":[41,45]},"computed":false,"range":[7,45]},"arguments":[],"range":[7,47]},"property":{"type":"Identifier","name":"indexOf","range":[48,55]},"computed":false,"range":[7,55]},"arguments":[{"type":"MemberExpression","object":{"type":"Identifier","name":"item","range":[56,60]},"property":{"type":"Identifier","name":"title","range":[61,66]},"computed":false,"range":[56,66]}],"range":[7,67]},"right":{"type":"UnaryExpression","operator":"-","argument":{"type":"NumericLiteral","value":1,"range":[73,74]},"prefix":true,"range":[72,74]},"range":[7,74]}],"range":[0,75]}',
            tokens: '[{"type":{"label":"name"},"value":"assert","range":[0,6]},{"type":{"label":"("},"range":[6,7]},{"type":{"label":"name"},"value":"shallow","range":[7,14]},{"type":{"label":"("},"range":[14,15]},{"type":{"label":"jsxTagStart"},"range":[15,16]},{"type":{"label":"jsxName"},"value":"ToDoItem","range":[16,24]},{"type":{"label":"jsxName"},"value":"item","range":[25,29]},{"type":{"label":"="},"value":"=","range":[29,30]},{"type":{"label":"{"},"range":[30,31]},{"type":{"label":"name"},"value":"item","range":[31,35]},{"type":{"label":"}"},"range":[35,36]},{"type":{"label":"/"},"value":"/","range":[37,38]},{"type":{"label":"jsxTagEnd"},"range":[38,39]},{"type":{"label":")"},"range":[39,40]},{"type":{"label":"."},"range":[40,41]},{"type":{"label":"name"},"value":"text","range":[41,45]},{"type":{"label":"("},"range":[45,46]},{"type":{"label":")"},"range":[46,47]},{"type":{"label":"."},"range":[47,48]},{"type":{"label":"name"},"value":"indexOf","range":[48,55]},{"type":{"label":"("},"range":[55,56]},{"type":{"label":"name"},"value":"item","range":[56,60]},{"type":{"label":"."},"range":[60,61]},{"type":{"label":"name"},"value":"title","range":[61,66]},{"type":{"label":")"},"range":[66,67]},{"type":{"label":"==/!="},"value":"!==","range":[68,71]},{"type":{"label":"+/-"},"value":"-","range":[72,73]},{"type":{"label":"num"},"value":1,"range":[73,74]},{"type":{"label":")"},"range":[74,75]}]',
            visitorKeys: _powerAssertVisitorKeys
        }));
    });
    it('renders a check mark when complete', () => {
        var _rec2 = new _powerAssertRecorder();

        const item = mockItem({ complete: true });
        assert(_rec2._expr(_rec2._capt(_rec2._capt(_rec2._capt(_rec2._capt(shallow(React.createElement(ToDoItem, { item: item })), 'arguments/0/left/callee/object/callee/object').find('.item-mark'), 'arguments/0/left/callee/object').text(), 'arguments/0/left') === '✓', 'arguments/0'), {
            content: 'assert(shallow(<ToDoItem item={item} />).find(\'.item-mark\').text() === \'\u2713\')',
            filepath: 'test/fixtures/React/fixture.js',
            line: 33,
            ast: '{"type":"CallExpression","callee":{"type":"Identifier","name":"assert","range":[0,6]},"arguments":[{"type":"BinaryExpression","operator":"===","left":{"type":"CallExpression","callee":{"type":"MemberExpression","object":{"type":"CallExpression","callee":{"type":"MemberExpression","object":{"type":"CallExpression","callee":{"type":"Identifier","name":"shallow","range":[7,14]},"arguments":[{"type":"JSXElement","openingElement":{"type":"JSXOpeningElement","name":{"type":"JSXIdentifier","name":"ToDoItem","range":[16,24]},"attributes":[{"type":"JSXAttribute","name":{"type":"JSXIdentifier","name":"item","range":[25,29]},"value":{"type":"JSXExpressionContainer","expression":{"type":"Identifier","name":"item","range":[31,35]},"range":[30,36]},"range":[25,36]}],"selfClosing":true,"range":[15,39]},"closingElement":null,"children":[],"range":[15,39]}],"range":[7,40]},"property":{"type":"Identifier","name":"find","range":[41,45]},"computed":false,"range":[7,45]},"arguments":[{"type":"StringLiteral","value":".item-mark","range":[46,58]}],"range":[7,59]},"property":{"type":"Identifier","name":"text","range":[60,64]},"computed":false,"range":[7,64]},"arguments":[],"range":[7,66]},"right":{"type":"StringLiteral","value":"\u2713","range":[71,74]},"range":[7,74]}],"range":[0,75]}',
            tokens: '[{"type":{"label":"name"},"value":"assert","range":[0,6]},{"type":{"label":"("},"range":[6,7]},{"type":{"label":"name"},"value":"shallow","range":[7,14]},{"type":{"label":"("},"range":[14,15]},{"type":{"label":"jsxTagStart"},"range":[15,16]},{"type":{"label":"jsxName"},"value":"ToDoItem","range":[16,24]},{"type":{"label":"jsxName"},"value":"item","range":[25,29]},{"type":{"label":"="},"value":"=","range":[29,30]},{"type":{"label":"{"},"range":[30,31]},{"type":{"label":"name"},"value":"item","range":[31,35]},{"type":{"label":"}"},"range":[35,36]},{"type":{"label":"/"},"value":"/","range":[37,38]},{"type":{"label":"jsxTagEnd"},"range":[38,39]},{"type":{"label":")"},"range":[39,40]},{"type":{"label":"."},"range":[40,41]},{"type":{"label":"name"},"value":"find","range":[41,45]},{"type":{"label":"("},"range":[45,46]},{"type":{"label":"string"},"value":".item-mark","range":[46,58]},{"type":{"label":")"},"range":[58,59]},{"type":{"label":"."},"range":[59,60]},{"type":{"label":"name"},"value":"text","range":[60,64]},{"type":{"label":"("},"range":[64,65]},{"type":{"label":")"},"range":[65,66]},{"type":{"label":"==/!="},"value":"===","range":[67,70]},{"type":{"label":"string"},"value":"\u2713","range":[71,74]},{"type":{"label":")"},"range":[74,75]}]',
            visitorKeys: _powerAssertVisitorKeys
        }));
    });
    it('renders a bullet when not complete', () => {
        var _rec3 = new _powerAssertRecorder();

        const item = mockItem({ complete: false });
        assert(_rec3._expr(_rec3._capt(_rec3._capt(_rec3._capt(_rec3._capt(shallow(React.createElement(ToDoItem, { item: item })), 'arguments/0/left/callee/object/callee/object').find('.item-mark'), 'arguments/0/left/callee/object').text(), 'arguments/0/left') === '•', 'arguments/0'), {
            content: 'assert(shallow(<ToDoItem item={item} />).find(\'.item-mark\').text() === \'\u2022\')',
            filepath: 'test/fixtures/React/fixture.js',
            line: 37,
            ast: '{"type":"CallExpression","callee":{"type":"Identifier","name":"assert","range":[0,6]},"arguments":[{"type":"BinaryExpression","operator":"===","left":{"type":"CallExpression","callee":{"type":"MemberExpression","object":{"type":"CallExpression","callee":{"type":"MemberExpression","object":{"type":"CallExpression","callee":{"type":"Identifier","name":"shallow","range":[7,14]},"arguments":[{"type":"JSXElement","openingElement":{"type":"JSXOpeningElement","name":{"type":"JSXIdentifier","name":"ToDoItem","range":[16,24]},"attributes":[{"type":"JSXAttribute","name":{"type":"JSXIdentifier","name":"item","range":[25,29]},"value":{"type":"JSXExpressionContainer","expression":{"type":"Identifier","name":"item","range":[31,35]},"range":[30,36]},"range":[25,36]}],"selfClosing":true,"range":[15,39]},"closingElement":null,"children":[],"range":[15,39]}],"range":[7,40]},"property":{"type":"Identifier","name":"find","range":[41,45]},"computed":false,"range":[7,45]},"arguments":[{"type":"StringLiteral","value":".item-mark","range":[46,58]}],"range":[7,59]},"property":{"type":"Identifier","name":"text","range":[60,64]},"computed":false,"range":[7,64]},"arguments":[],"range":[7,66]},"right":{"type":"StringLiteral","value":"\u2022","range":[71,74]},"range":[7,74]}],"range":[0,75]}',
            tokens: '[{"type":{"label":"name"},"value":"assert","range":[0,6]},{"type":{"label":"("},"range":[6,7]},{"type":{"label":"name"},"value":"shallow","range":[7,14]},{"type":{"label":"("},"range":[14,15]},{"type":{"label":"jsxTagStart"},"range":[15,16]},{"type":{"label":"jsxName"},"value":"ToDoItem","range":[16,24]},{"type":{"label":"jsxName"},"value":"item","range":[25,29]},{"type":{"label":"="},"value":"=","range":[29,30]},{"type":{"label":"{"},"range":[30,31]},{"type":{"label":"name"},"value":"item","range":[31,35]},{"type":{"label":"}"},"range":[35,36]},{"type":{"label":"/"},"value":"/","range":[37,38]},{"type":{"label":"jsxTagEnd"},"range":[38,39]},{"type":{"label":")"},"range":[39,40]},{"type":{"label":"."},"range":[40,41]},{"type":{"label":"name"},"value":"find","range":[41,45]},{"type":{"label":"("},"range":[45,46]},{"type":{"label":"string"},"value":".item-mark","range":[46,58]},{"type":{"label":")"},"range":[58,59]},{"type":{"label":"."},"range":[59,60]},{"type":{"label":"name"},"value":"text","range":[60,64]},{"type":{"label":"("},"range":[64,65]},{"type":{"label":")"},"range":[65,66]},{"type":{"label":"==/!="},"value":"===","range":[67,70]},{"type":{"label":"string"},"value":"\u2022","range":[71,74]},{"type":{"label":")"},"range":[74,75]}]',
            visitorKeys: _powerAssertVisitorKeys
        }));
    });
    it('calls onCompleteChange handler with the right arguments when clicked', () => {
        var _rec4 = new _powerAssertRecorder(),
            _rec5 = new _powerAssertRecorder();

        const spy = sinon.spy();
        const item = mockItem();
        const wrapper = shallow(React.createElement(ToDoItem, { item: item, onCompleteChange: spy }));
        wrapper.find('.item-button').simulate('click');
        assert(_rec4._expr(_rec4._capt(_rec4._capt(_rec4._capt(spy, 'arguments/0/left/object').calledOnce, 'arguments/0/left') === true, 'arguments/0'), {
            content: 'assert(spy.calledOnce === true)',
            filepath: 'test/fixtures/React/fixture.js',
            line: 44,
            ast: '{"type":"CallExpression","callee":{"type":"Identifier","name":"assert","range":[0,6]},"arguments":[{"type":"BinaryExpression","operator":"===","left":{"type":"MemberExpression","object":{"type":"Identifier","name":"spy","range":[7,10]},"property":{"type":"Identifier","name":"calledOnce","range":[11,21]},"computed":false,"range":[7,21]},"right":{"type":"BooleanLiteral","value":true,"range":[26,30]},"range":[7,30]}],"range":[0,31]}',
            tokens: '[{"type":{"label":"name"},"value":"assert","range":[0,6]},{"type":{"label":"("},"range":[6,7]},{"type":{"label":"name"},"value":"spy","range":[7,10]},{"type":{"label":"."},"range":[10,11]},{"type":{"label":"name"},"value":"calledOnce","range":[11,21]},{"type":{"label":"==/!="},"value":"===","range":[22,25]},{"type":{"label":"true"},"value":"true","range":[26,30]},{"type":{"label":")"},"range":[30,31]}]',
            visitorKeys: _powerAssertVisitorKeys
        }));
        assert(_rec5._expr(_rec5._capt(_rec5._capt(_rec5._capt(spy, 'arguments/0/left/callee/object').calledWith(_rec5._capt(item, 'arguments/0/left/arguments/0'), false), 'arguments/0/left') === true, 'arguments/0'), {
            content: 'assert(spy.calledWith(item, false) === true)',
            filepath: 'test/fixtures/React/fixture.js',
            line: 45,
            ast: '{"type":"CallExpression","callee":{"type":"Identifier","name":"assert","range":[0,6]},"arguments":[{"type":"BinaryExpression","operator":"===","left":{"type":"CallExpression","callee":{"type":"MemberExpression","object":{"type":"Identifier","name":"spy","range":[7,10]},"property":{"type":"Identifier","name":"calledWith","range":[11,21]},"computed":false,"range":[7,21]},"arguments":[{"type":"Identifier","name":"item","range":[22,26]},{"type":"BooleanLiteral","value":false,"range":[28,33]}],"range":[7,34]},"right":{"type":"BooleanLiteral","value":true,"range":[39,43]},"range":[7,43]}],"range":[0,44]}',
            tokens: '[{"type":{"label":"name"},"value":"assert","range":[0,6]},{"type":{"label":"("},"range":[6,7]},{"type":{"label":"name"},"value":"spy","range":[7,10]},{"type":{"label":"."},"range":[10,11]},{"type":{"label":"name"},"value":"calledWith","range":[11,21]},{"type":{"label":"("},"range":[21,22]},{"type":{"label":"name"},"value":"item","range":[22,26]},{"type":{"label":","},"range":[26,27]},{"type":{"label":"false"},"value":"false","range":[28,33]},{"type":{"label":")"},"range":[33,34]},{"type":{"label":"==/!="},"value":"===","range":[35,38]},{"type":{"label":"true"},"value":"true","range":[39,43]},{"type":{"label":")"},"range":[43,44]}]',
            visitorKeys: _powerAssertVisitorKeys
        }));
    });
});

describe('<Foo />', () => {
    describe('#shallow', () => {
        it('#contains', () => {
            var _rec6 = new _powerAssertRecorder();

            assert(_rec6._expr(_rec6._capt(_rec6._capt(shallow(React.createElement(Foo, null)), 'arguments/0/callee/object').contains(React.createElement('div', { className: 'foo' })), 'arguments/0'), {
                content: 'assert(shallow(<Foo />).contains(<div className="foo" />))',
                filepath: 'test/fixtures/React/fixture.js',
                line: 52,
                ast: '{"type":"CallExpression","callee":{"type":"Identifier","name":"assert","range":[0,6]},"arguments":[{"type":"CallExpression","callee":{"type":"MemberExpression","object":{"type":"CallExpression","callee":{"type":"Identifier","name":"shallow","range":[7,14]},"arguments":[{"type":"JSXElement","openingElement":{"type":"JSXOpeningElement","name":{"type":"JSXIdentifier","name":"Foo","range":[16,19]},"attributes":[],"selfClosing":true,"range":[15,22]},"closingElement":null,"children":[],"range":[15,22]}],"range":[7,23]},"property":{"type":"Identifier","name":"contains","range":[24,32]},"computed":false,"range":[7,32]},"arguments":[{"type":"JSXElement","openingElement":{"type":"JSXOpeningElement","name":{"type":"JSXIdentifier","name":"div","range":[34,37]},"attributes":[{"type":"JSXAttribute","name":{"type":"JSXIdentifier","name":"className","range":[38,47]},"value":{"type":"StringLiteral","value":"foo","range":[48,53]},"range":[38,53]}],"selfClosing":true,"range":[33,56]},"closingElement":null,"children":[],"range":[33,56]}],"range":[7,57]}],"range":[0,58]}',
                tokens: '[{"type":{"label":"name"},"value":"assert","range":[0,6]},{"type":{"label":"("},"range":[6,7]},{"type":{"label":"name"},"value":"shallow","range":[7,14]},{"type":{"label":"("},"range":[14,15]},{"type":{"label":"jsxTagStart"},"range":[15,16]},{"type":{"label":"jsxName"},"value":"Foo","range":[16,19]},{"type":{"label":"/"},"value":"/","range":[20,21]},{"type":{"label":"jsxTagEnd"},"range":[21,22]},{"type":{"label":")"},"range":[22,23]},{"type":{"label":"."},"range":[23,24]},{"type":{"label":"name"},"value":"contains","range":[24,32]},{"type":{"label":"("},"range":[32,33]},{"type":{"label":"jsxTagStart"},"range":[33,34]},{"type":{"label":"jsxName"},"value":"div","range":[34,37]},{"type":{"label":"jsxName"},"value":"className","range":[38,47]},{"type":{"label":"="},"value":"=","range":[47,48]},{"type":{"label":"string"},"value":"foo","range":[48,53]},{"type":{"label":"/"},"value":"/","range":[54,55]},{"type":{"label":"jsxTagEnd"},"range":[55,56]},{"type":{"label":")"},"range":[56,57]},{"type":{"label":")"},"range":[57,58]}]',
                visitorKeys: _powerAssertVisitorKeys
            }));
        });
        it('#is', () => {
            var _rec7 = new _powerAssertRecorder();

            assert(_rec7._expr(_rec7._capt(_rec7._capt(shallow(React.createElement(Foo, null)), 'arguments/0/callee/object').is('.foo'), 'arguments/0'), {
                content: 'assert(shallow(<Foo />).is(\'.foo\'))',
                filepath: 'test/fixtures/React/fixture.js',
                line: 55,
                ast: '{"type":"CallExpression","callee":{"type":"Identifier","name":"assert","range":[0,6]},"arguments":[{"type":"CallExpression","callee":{"type":"MemberExpression","object":{"type":"CallExpression","callee":{"type":"Identifier","name":"shallow","range":[7,14]},"arguments":[{"type":"JSXElement","openingElement":{"type":"JSXOpeningElement","name":{"type":"JSXIdentifier","name":"Foo","range":[16,19]},"attributes":[],"selfClosing":true,"range":[15,22]},"closingElement":null,"children":[],"range":[15,22]}],"range":[7,23]},"property":{"type":"Identifier","name":"is","range":[24,26]},"computed":false,"range":[7,26]},"arguments":[{"type":"StringLiteral","value":".foo","range":[27,33]}],"range":[7,34]}],"range":[0,35]}',
                tokens: '[{"type":{"label":"name"},"value":"assert","range":[0,6]},{"type":{"label":"("},"range":[6,7]},{"type":{"label":"name"},"value":"shallow","range":[7,14]},{"type":{"label":"("},"range":[14,15]},{"type":{"label":"jsxTagStart"},"range":[15,16]},{"type":{"label":"jsxName"},"value":"Foo","range":[16,19]},{"type":{"label":"/"},"value":"/","range":[20,21]},{"type":{"label":"jsxTagEnd"},"range":[21,22]},{"type":{"label":")"},"range":[22,23]},{"type":{"label":"."},"range":[23,24]},{"type":{"label":"name"},"value":"is","range":[24,26]},{"type":{"label":"("},"range":[26,27]},{"type":{"label":"string"},"value":".foo","range":[27,33]},{"type":{"label":")"},"range":[33,34]},{"type":{"label":")"},"range":[34,35]}]',
                visitorKeys: _powerAssertVisitorKeys
            }));
        });
    });
    describe('#mount', () => {
        it('#find', () => {
            var _rec8 = new _powerAssertRecorder();

            assert(_rec8._expr(_rec8._capt(_rec8._capt(_rec8._capt(_rec8._capt(mount(React.createElement(Foo, null)), 'arguments/0/left/object/callee/object').find('.foo'), 'arguments/0/left/object').length, 'arguments/0/left') === 1, 'arguments/0'), {
                content: 'assert(mount(<Foo />).find(\'.foo\').length === 1)',
                filepath: 'test/fixtures/React/fixture.js',
                line: 60,
                ast: '{"type":"CallExpression","callee":{"type":"Identifier","name":"assert","range":[0,6]},"arguments":[{"type":"BinaryExpression","operator":"===","left":{"type":"MemberExpression","object":{"type":"CallExpression","callee":{"type":"MemberExpression","object":{"type":"CallExpression","callee":{"type":"Identifier","name":"mount","range":[7,12]},"arguments":[{"type":"JSXElement","openingElement":{"type":"JSXOpeningElement","name":{"type":"JSXIdentifier","name":"Foo","range":[14,17]},"attributes":[],"selfClosing":true,"range":[13,20]},"closingElement":null,"children":[],"range":[13,20]}],"range":[7,21]},"property":{"type":"Identifier","name":"find","range":[22,26]},"computed":false,"range":[7,26]},"arguments":[{"type":"StringLiteral","value":".foo","range":[27,33]}],"range":[7,34]},"property":{"type":"Identifier","name":"length","range":[35,41]},"computed":false,"range":[7,41]},"right":{"type":"NumericLiteral","value":1,"range":[46,47]},"range":[7,47]}],"range":[0,48]}',
                tokens: '[{"type":{"label":"name"},"value":"assert","range":[0,6]},{"type":{"label":"("},"range":[6,7]},{"type":{"label":"name"},"value":"mount","range":[7,12]},{"type":{"label":"("},"range":[12,13]},{"type":{"label":"jsxTagStart"},"range":[13,14]},{"type":{"label":"jsxName"},"value":"Foo","range":[14,17]},{"type":{"label":"/"},"value":"/","range":[18,19]},{"type":{"label":"jsxTagEnd"},"range":[19,20]},{"type":{"label":")"},"range":[20,21]},{"type":{"label":"."},"range":[21,22]},{"type":{"label":"name"},"value":"find","range":[22,26]},{"type":{"label":"("},"range":[26,27]},{"type":{"label":"string"},"value":".foo","range":[27,33]},{"type":{"label":")"},"range":[33,34]},{"type":{"label":"."},"range":[34,35]},{"type":{"label":"name"},"value":"length","range":[35,41]},{"type":{"label":"==/!="},"value":"===","range":[42,45]},{"type":{"label":"num"},"value":1,"range":[46,47]},{"type":{"label":")"},"range":[47,48]}]',
                visitorKeys: _powerAssertVisitorKeys
            }));
        });
    });
});