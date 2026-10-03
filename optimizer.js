/**
 * PathWise Minimum Route Optimizer
 *
 * Computes the minimum cumulative cost required to travel
 * from the top of a layered decision structure to the bottom.
 *
 * Algorithm:
 * Bottom-Up Dynamic Programming
 *
 * Time Complexity: O(n²)
 * Space Complexity: O(n)
 */

/**
 * Calculates the minimum route cost.
 *
 * @param {number[][]} layeredCosts
 * @returns {number}
 */
function findMinimumRouteCost(layeredCosts) {
    if (!layeredCosts.length) return 0;

    // Initialize with the final layer
    const minimumCosts = [...layeredCosts[layeredCosts.length - 1]];

    // Process layers from bottom to top
    for (let layer = layeredCosts.length - 2; layer >= 0; layer--) {
        for (let position = 0; position <= layer; position++) {
            const cheaperNextStep = Math.min(
                minimumCosts[position],
                minimumCosts[position + 1]
            );

            minimumCosts[position] =
                layeredCosts[layer][position] + cheaperNextStep;
        }
    }

    return minimumCosts[0];
}

// Example

const logisticsPlan = [
    [2],
    [3, 4],
    [6, 5, 7],
    [4, 1, 8, 3]
];

const minimumCost = findMinimumRouteCost(logisticsPlan);

console.log("Minimum Route Cost:", minimumCost);
