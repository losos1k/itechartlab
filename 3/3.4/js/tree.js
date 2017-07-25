var treeHandler = (function () {

    function TreeNode(content, title, children) {
        this.content = content;
        this.children = children;
        this.title = title;

        this.appendChild = function (treeNode) {
            children.push(treeNode);
        }
    };

    this.Tree = function () {
        this.root = new TreeNode();

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
            return find(insExp, this.root);
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
