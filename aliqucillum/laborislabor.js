// Assume operation is defined somewhere before this code block
let operation = { op: 'remove' };

// Example of using else if with operation.op
if (operation.op === 'add') {
    // Execute code for add operation
    console.log('Performing add operation');
} else if (operation.op === 'remove') {
    // Execute code for remove operation
    console.log('Performing remove operation');
} else {
    // Execute code if operation.op is neither 'add' nor 'remove'
    console.log('Unknown operation');
}
