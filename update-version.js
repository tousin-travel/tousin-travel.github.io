// Version Update Script for Cache Busting
const fs = require('fs');
const path = require('path');

// Generate version based on current timestamp with time precision
const now = new Date();
const dateStr = now.toISOString().slice(0, 10).replace(/-/g, '');
const timeStr = now.toTimeString().slice(0, 8).replace(/:/g, '');
const timestamp = now.getTime().toString();

// Version options (choose one):
// Option 1: Date + Time (YYYYMMDDHHMMSS) - 14 digits
const version = `${dateStr}${timeStr}`;

// Option 2: Full timestamp (milliseconds) - 13 digits
// const version = timestamp;

// Option 3: Unix timestamp (seconds) - 10 digits  
// const version = Math.floor(now.getTime() / 1000).toString();

console.log(`Generated version: ${version} (format: YYYYMMDDHHMMSS)`);

// Files to update
const filesToUpdate = [
    'index.html'
];

// Version patterns to replace
const versionPatterns = [
    { pattern: /v=\d{14}/g, replacement: `v=${version}` },
    { pattern: /tousin-v\d{14}/g, replacement: `tousin-v${version}` },
    // Also handle old 8-digit format for backward compatibility
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
    // Handle both new 14-digit format and old 8-digit format
    swContent = swContent.replace(/tousin-v\d{14}/g, `tousin-v${version}`);
    swContent = swContent.replace(/tousin-v\d{8}/g, `tousin-v${version}`);
    fs.writeFileSync(swPath, swContent, 'utf8');
    console.log(`Updated Service Worker version to ${version}`);
}

console.log(`Version update completed: ${version}`);
