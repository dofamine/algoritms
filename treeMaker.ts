interface ITreeNode {
  id: number;
  parentId: number;
  displayName: string,
  children?: ITreeNode[];
}

interface IGroupedChildrenNodes {
 [key: string]: ITreeNode[] 
}

function getTreeStructureFromFlatFormat(flatNodes: ITreeNode[]): ITreeNode[] {
  const rootNodeKey: string = 'null';
  const groupedChildrenNodesMap = getGroupedChildrenMap(flatNodes);
  return getTreeWithChildren(groupedChildrenNodesMap[rootNodeKey], groupedChildrenNodesMap, Object.keys(groupedChildrenNodesMap));
}

function getGroupedChildrenMap(nodes: ITreeNode[]): IGroupedChildrenNodes {
  return nodes.reduce((acc, e) => {
    const key = String(e.parentId);
    acc[key] = Array.isArray(acc[key]) ? [...acc[key], e] : [e];
    return acc;
  }, {} as IGroupedChildrenNodes);
}

function getTreeWithChildren(nodes: ITreeNode[], childrenNodes: { [key: string]: ITreeNode[] }, groupIds: string[]): ITreeNode[] {
  let res = [];
  for (let i = 0; i < nodes.length; i++) {
    if (groupIds.includes(String(nodes[i].id))) {
      const node = createParentNode(nodes[i], childrenNodes[nodes[i].id]);
      node.children = getTreeWithChildren(childrenNodes[nodes[i].id], childrenNodes, groupIds)
      res.push(node);
    } else {
      res.push(createNode(nodes[i]));
    }
  }
  return res;
}

function createNode(data: ITreeNode): ITreeNode {
  return { ...data };
}

function createParentNode(data: ITreeNode, children: ITreeNode[]): ITreeNode {
  return {
    ...data,
    children
  }
}
