const node = document.getElementById("node");
const subode = document.getElementById("subnode");

const node1 = node.cloneNode();
/* <div id="node"> 만 복제 */

const node2 = node.cloneNode(true);
//content 하위 태그들까지 전부 복사
const node3 = node.cloneNode(false);

document.body.appendChild(node1);
document.body.appendChild(node2);
document.body.appendChild(node3);
