// Version Update Script for Cache Busting
const fs = require('fs');
const path = require('path');

// Generate version based on current timestamp
const version = new Date().toISOString().slice(0, 10).replace(/-/g, '');

// Files to update
const filesToUpdate = [
    'index.html'
];

// Version patterns to replace
const versionPatterns = [
    { pattern: /v=\d{8}/g, replacement: `v=${version}` },
    { pattern: /tousin-v\d{8}/g, replacement: `tousin-v${version}` }
];

// Update files
filesToUpdate.forEach(filePath => {
    if (fs.existsSync(filePath)) {
        let content = fs.readFileSync(filePath, 'utf8');
        
        versionPatterns.forEach(({ pattern, replacement }) => {
            content = content.replace(pattern, replacement);
        });
        
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`Updated version in ${filePath} to ${version}`);
    } else {
        console.log(`File not found: ${filePath}`);
    }
});

// Update Service Worker
const swPath = 'sw.js';
if (fs.existsSync(swPath)) {
    let swContent = fs.readFileSync(swPath, 'utf8');
    swContent = swContent.replace(/tousin-v\d{8}/g, `tousin-v${version}`);
    fs.writeFileSync(swPath, swContent, 'utf8');
    console.log(`Updated Service Worker version to ${version}`);
}

console.log(`Version update completed: ${version}`);
