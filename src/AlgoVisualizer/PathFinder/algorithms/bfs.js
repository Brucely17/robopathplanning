import { updateNeighborsPrevNode } from "./algoHelpers";

export function bfs(nodes, startPosition, finishPosition) {
  let startNode = nodes[startPosition.row][startPosition.col];
  let finishNode = nodes[finishPosition.row][finishPosition.col];
  let visitedNodes = [];
  let unvisitedNodeQueue = [startNode];
  while (unvisitedNodeQueue.length > 0) {
    const closestNode = unvisitedNodeQueue.shift();
    if (closestNode.wall) continue;
    closestNode.isVisited = true;
    visitedNodes.push(closestNode);
    if (closestNode === finishNode) return visitedNodes;
    const neighbors = updateNeighborsPrevNode(closestNode, nodes, finishNode);
    unvisitedNodeQueue.push(
      ...neighbors.filter((neighbor) => !unvisitedNodeQueue.includes(neighbor))
    );
  }
}