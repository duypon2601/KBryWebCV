// Service to update content files directly (for local development only)
// This allows editing content and saving it directly to TypeScript files

import { message } from 'antd';

/**
 * Save content to a TypeScript content file
 * This only works in development mode with a backend endpoint
 */
export async function saveToContentFile(
  fileName: string,
  content: Record<string, unknown>
): Promise<boolean> {
  // Check if we're in development mode
  if (import.meta.env.PROD) {
    message.error('Chỉ có thể lưu vào file ở chế độ development!');
    return false;
  }

  try {
    // In development, we'll use the Vite dev server to write files
    // You'll need to add a custom Vite plugin or backend endpoint for this
    
    // For now, we'll just copy the content to clipboard
    const fileContent = generateTypeScriptContent(fileName, content);
    
    // Copy to clipboard
    await navigator.clipboard.writeText(fileContent);
    
    message.success(
      `Nội dung đã được copy vào clipboard! Paste vào file src/data/${fileName}.ts`,
      5
    );
    
    console.log(`Content for ${fileName}:`, fileContent);
    
    return true;
  } catch (error) {
    console.error('Failed to save content:', error);
    message.error('Không thể lưu nội dung');
    return false;
  }
}

/**
 * Generate TypeScript file content
 */
function generateTypeScriptContent(
  fileName: string,
  content: Record<string, unknown>
): string {
  const commentMap: Record<string, string> = {
    homeContent: 'Home page content - Edit this file to update home page content',
    aboutContent: 'About page content - Edit this file to update about page content',
    featuredContent: 'Featured projects section content - Edit this file to update featured section',
  };

  const comment = commentMap[fileName] || `${fileName} content`;
  const contentStr = JSON.stringify(content, null, 2)
    .replace(/"([^"]+)":/g, '$1:') // Remove quotes from keys
    .replace(/"/g, "'"); // Use single quotes for strings

  return `// ${comment}
export const ${fileName} = ${contentStr} as const;
`;
}

/**
 * Download content as a TypeScript file
 */
export function downloadContentFile(
  fileName: string,
  content: Record<string, unknown>
): void {
  const fileContent = generateTypeScriptContent(fileName, content);
  const blob = new Blob([fileContent], { type: 'text/typescript' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `${fileName}.ts`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
  
  message.success(`File ${fileName}.ts đã được tải xuống!`);
}
