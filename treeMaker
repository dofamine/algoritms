const inputData = [
  {
    id: 6,
    parentId: 4,
    label: "popup settings",
  },
  {
    id: 77,
    parentId: 4,
    label: "popups gops",
  },
  {
    id: 5,
    parentId: 2,
    displayName: "Chatbot Title",
  },
  {
    id: 1,
    parentId: null,
    displayName: "clone all fields",
  },
  {
    id: 7,
    parentId: 6,
    displayName: "Test popup setting child",
  },
  {
    id: 2,
    parentId: 1,
    displayName: "Chatbot Settings",
  },
  {
    id: 3,
    parentId: 1,
    displayName: "Chatbot Colors",
  },
  {
    id: 4,
    parentId: 1,
    displayName: "Floating Action Button Settings",
  },
  {
    id: 22,
    parentId: null,
    displayName: "test",
  }
];

const outputData = [
  {
    id: 1,
    parentId: null,
    displayName: "clone all fields",
    children: [
      {
        id: 2,
        parentId: 1,
        displayName: "Chatbot Settings",
        children: [
          {
            id: 5,
            parentId: 2,
            displayName: "Chatbot Title",
          }
        ]
      },
      {
        id: 3,
        parentId: 1,
        displayName: "Chatbot Colors",
      },
      {
        id: 4,
        parentId: 1,
        displayName: "Floating Action Button Settings",
        children: [
          {
            id: 6,
            parentId: 4,
            label: "popup settings",
            children: [
              {
                id: 7,
                parentId: 6,
                displayName: "Test popup setting child",
              },
            ]
          },
          {
            id: 77,
            parentId: 4,
            label: "popups gops",
          },
        ]
      },
    ]
  },
  {
    id: 22,
    parentId: null,
    displayName: "test",
  }
];

function getTree(array) {
    const groupedNodesMap = array.reduce((acc, e) => {
      acc[e.parentId] = Array.isArray(acc[e.parentId]) ? [...acc[e.parentId], e] : [e];
      return acc;
    }, {});
    this.resolveChildren(groupedNodesMap['null'], groupedNodesMap, Object.keys(groupedNodesMap));
  }

 funtion resolveChildren(nodes, groupedNodesMap, groupIds) {
    let res = [];
    for (let i = 0; i < nodes.length; i++) {
      if (groupIds.includes(String(nodes[i].id))) {
        const node = this.createParentNode(nodes[i], groupedNodesMap[nodes[i].id]);
        node.children = this.resolveChildren(groupedNodesMap[nodes[i].id], groupedNodesMap, groupIds)
        res.push(node);
      } else {
        res.push(this.createNode(nodes[i]));
      }
    }
    return res;
  }

  function createNode(data) {
    return { ...data };
  }

  function createParentNode(data, children) {
    return {
      ...data,
      children
    }
  }
