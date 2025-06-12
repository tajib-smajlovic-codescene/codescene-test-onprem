/**
 * file-0.js
 * 
 * This file generates and logs 100 lines of sample output.
 * Each line contains its line number and a random string.
 * 
 * Usage: node file-0.js
 */

// Utility function to generate a random alphanumeric string of given length
function randomString(length = 8) {
    const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
        result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
}

// Generate and log 100 lines
for (let i = 1; i <= 100; i++) {
    console.log(`Line ${i}: ${randomString(12)}`);
}