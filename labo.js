/**
 * Performs an operation with specified options.
 * 
 * @param {Object} options - The options object.
 * @param {boolean} [options.force=false] - If true, the operator will force the operation, overriding any safeguards.
 * @param {string} options.name - The name associated with the operation.
 * @returns {void}
 */
function performOperation(options) {
    // Set default values for options if not provided
    const { force = false, name } = options;

    if (force) {
        console.log('Force operation enabled.');
        // Logic to force the operation
    } else {
        console.log('Normal operation mode.');
        // Normal operation logic
    }
    
    console.log(`Operation performed by: ${name}`);
}

// Example usage:
performOperation({ force: true, name: 'Alice' });
// Output: Force operation enabled.
//         Operation performed by: Alice

performOperation({ name: 'Bob' });
// Output: Normal operation mode.
//         Operation performed by: Bob
