let fs = require('fs');
let path = require('path');

let ts = require('typescript');
let acorn = require('acorn');
let walker = require('acorn-walk');
let dyncmicImport = require('acorn-dynamic-import');
let importWalk = require('acorn-dynamic-import/lib/walk');
walker = importWalk.default(walker);
acorn = acorn.Parser.extend(dyncmicImport.default);

let AST = {
    parse(content) {
        return acorn.parse(content, {
            sourceType: 'module',
            ecmaVersion: 9
        });
    },
    walk(ast, visitors) {
        walker.simple(ast, visitors, walker.base);
    }
};

let fileWalk = (folder, callback) => {
    fs.readdir(folder, (err, files) => {
        if (err) {
            console.error(err);
        } else {
            for (let file of files) {
                let p = folder + path.sep + file;
                let stat = fs.lstatSync(p);
                if (stat.isDirectory()) {
                    fileWalk(p, callback);
                } else {
                    callback(p);
                }
            }
        }
    });
};

let findModuleByIds = (ast, ids) => {
    let used = {},
        find = false;
    AST.walk(ast, {
        VariableDeclarator(node) {
            let r = node.init;
            if (r &&
                r.type == 'CallExpression' &&
                node.id.type == 'Identifier') {
                if (r.arguments.length == 1) {
                    let a0 = r.arguments[0];
                    let callee = r.callee;
                    if (callee.type == 'Identifier' &&
                        a0.type == 'Literal' &&
                        callee.name == 'require') {
                        let mId = a0.value;
                        if (ids.includes(mId)) {
                            find = true;
                            used[node.id.name] = 1;
                        }
                    }
                }
            }
        }
    });
    return {
        used,
        find
    };
};


let findUsedByModules = (ast, modules, functions) => {
    let used = {},
        maybe = {};
    AST.walk(ast, {
        CallExpression(node) {
            let callee = node.callee,
                root = null,
                chain = null,
                like = false;
            let findRoot = (start, tail) => {
                if (start.type == 'Identifier') {
                    root = start.name;
                    chain = root + tail;
                } else if (start.type == 'MemberExpression') {
                    if (start.property.type == 'Identifier') {
                        tail = `.${start.property.name}${tail}`;
                        findRoot(start.object, tail);
                    } else if (start.property.type == 'Literal') {
                        tail = `[${start.property.raw}]${tail}`;
                        findRoot(start.object, tail);
                    } else {
                        debugger;
                    }
                } else if (start.type == 'CallExpression') {
                    tail = `()${tail}`;
                    let callee = start.callee;
                    if (callee.property &&
                        callee.property.type == 'Identifier' &&
                        functions.includes(start.callee.property.name)) {
                        like = true;
                    }
                    findRoot(callee, tail);
                } else {
                    debugger;
                }
            };
            findRoot(callee, '()');
            if (modules.hasOwnProperty(root)) {
                used[chain] = 1;
            }
            if (like) {
                maybe[chain] = 1;
            }
        }
    });
    return { used, maybe };
};

let jqueryUsed = {

};
let maybeJQueryUsed = {

}


let timer;
let maybeFunctions = ["toArray", "get", "pushStack", "each", "map", "slice", "first", "last", "eq", "end", "push", "sort", "splice", "extend", "find", "filter", "not", "is", "init", "has", "closest", "index", "add", "addBack", "parent", "parents", "parentsUntil", "next", "prev", "nextAll", "prevAll", "nextUntil", "prevUntil", "siblings", "children", "contents", "ready", "data", "removeData", "queue", "dequeue", "clearQueue", "promise", "show", "hide", "toggle", "on", "one", "off", "detach", "remove", "text", "append", "prepend", "before", "after", "empty", "clone", "html", "replaceWith", "appendTo", "prependTo", "insertBefore", "insertAfter", "replaceAll", "css", "fadeTo", "animate", "stop", "finish", "slideDown", "slideUp", "slideToggle", "fadeIn", "fadeOut", "fadeToggle", "delay", "attr", "removeAttr", "prop", "removeProp", "addClass", "removeClass", "toggleClass", "hasClass", "val", "trigger", "triggerHandler", "blur", "focus", "focusin", "focusout", "resize", "scroll", "click", "dblclick", "mousedown", "mouseup", "mousemove", "mouseover", "mouseout", "mouseenter", "mouseleave", "change", "select", "submit", "keydown", "keypress", "keyup", "contextmenu", "hover", "serialize", "serializeArray", "wrapAll", "wrapInner", "wrap", "unwrap", "load", "ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend", "offset", "position", "offsetParent", "scrollLeft", "scrollTop", "innerHeight", "height", "outerHeight", "innerWidth", "width", "outerWidth", "bind", "unbind", "delegate", "undelegate", "invokeView"]
fileWalk('../src', file => {
    let ext = path.extname(file);
    if (ext == '.js' ||
        ext == '.ts') {
        let content = fs.readFileSync(file).toString();
        try {
            let str = ts.transpileModule(content, {
                compilerOptions: {
                    lib: ['es7'],
                    target: 'es3',
                    module: ts.ModuleKind.None
                }
            });
            content = str.outputText;
            let ast = AST.parse(content);
            let jq = findModuleByIds(ast, ['$', 'jquery']);
            if (jq.find) {
                let called = findUsedByModules(ast, jq.used, maybeFunctions);
                Object.assign(jqueryUsed, called.used);
                Object.assign(maybeJQueryUsed, called.maybe);
                clearTimeout(timer);
                timer = setTimeout(() => {
                    console.log(jqueryUsed, maybeJQueryUsed);
                }, 500);
            }
        } catch (e) {
            throw e;
        }
    }
});