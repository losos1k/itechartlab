var treeHandler = (function () {

    jsonObject = {
        name: 'name1',
        desc: 'desc1',
        details: {
            detailProperty1: 'smth1',
            detailProperty2: 'smth2',
            detailIntegerProperty2: 12,
            detailProperty3: 'smth3',
            detailObject: {
                detailObjectProp1: 'smth4',
                detailObjectProp2: 'smth5',
                integerProp: 123
            },
            detailObject2: {
                detailObjectProp1: 'smth6',
                detailObjectProp2: 'smth7',
                integerProp: 222,
                arrProp: ['arrValue1', {
                    objectInsideArrayProp: 'arrValue2'
                }]
            }
        }
    };

    function TreeNode(content, title, children) {
        this.content = content;
        this.children = children;
        this.title = title;

        this.appendChild = function (treeNode) {
            children.push(treeNode);
        }
    };


    this.Tree = function () {
        this.root = new TreeNode(null, null, null);

        this.createTreeFromJSON = function (json) {
            this.root = parseTreeNode(json, 'root');
        };

        function parseTreeNode(json, objName) {
            var newNode = new TreeNode(null, objName, []);
            var newNodeContent;
            newNodeContent = json;
            if (json instanceof Array) {
                for (var i = 0; i < json.length; i++) {
                    if (typeof json[i] === "object" && json[i]) {
                        newNode.appendChild(parseTreeNode(json[i], i));
                        delete newNodeContent[prop];
                    }
                }
            } else {
                for (var prop in json) {
                    if (typeof json[prop] === "object" && json[prop]) {
                        newNode.appendChild(parseTreeNode(json[prop], prop));
                        delete newNodeContent[prop];
                    }
                }
            }
            newNode.content = newNodeContent;
            return newNode;
        }

        this.findValue = function (insExp) {
            console.log(find(insExp, this.root));
        };

        function find(insExp, treeNode) {
            var occurrences = [];
            for (var prop in treeNode.content) {
                if (treeNode.content[prop].toString() == insExp.toString() || treeNode.content[prop].toString().includes(insExp.toString())) {
                    occurrences.push(treeNode.content[prop]);
                }
            }
            if (treeNode.children !== null) {
                for (var i = 0; i < treeNode.children.length; i++) {
                    occurrences = occurrences.concat(find(insExp, treeNode.children[i]));
                }
            }
            return occurrences;
        }
    }
    return {
        Tree
    }

})();
