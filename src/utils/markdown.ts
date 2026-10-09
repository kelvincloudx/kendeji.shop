export function renderMarkdown(md: string): string {
  let html = md;

  // Protect code blocks first
  const codeBlocks: string[] = [];
  html = html.replace(/```(\w*)\n([\s\S]*?)```/g, (_, lang, code) => {
    const placeholder = `__CODE_BLOCK_${codeBlocks.length}__`;
    const escapedCode = code
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');
    codeBlocks.push(`<pre><code class="language-${lang}">${escapedCode}</code></pre>`);
    return placeholder;
  });

  // Protect inline code
  const inlineCodes: string[] = [];
  html = html.replace(/`([^`]+)`/g, (_, code) => {
    const placeholder = `__INLINE_CODE_${inlineCodes.length}__`;
    const escapedCode = code
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');
    inlineCodes.push(`<code>${escapedCode}</code>`);
    return placeholder;
  });

  // GitHub Alerts / Blockquotes
  html = html.replace(/^>\s*\[!(NOTE|TIP|IMPORTANT|WARNING)\]\s*\n([\s\S]*?)(?=\n\n|\n#[^#]|$)/gm, (_, type, content) => {
    const alertClass = type.toLowerCase();
    const cleanContent = content.replace(/^>\s*/gm, '').trim();
    return `<div class="alert-box alert-${alertClass}"><strong>[${type}]</strong> ${cleanContent}</div>`;
  });

  html = html.replace(/^>\s*(.+)$/gm, '<blockquote>$1</blockquote>');

  // Headings
  html = html.replace(/^# (.*$)/gim, '<h1>$1</h1>');
  html = html.replace(/^## (.*$)/gim, '<h2>$1</h2>');
  html = html.replace(/^### (.*$)/gim, '<h3>$1</h3>');
  html = html.replace(/^#### (.*$)/gim, '<h4>$1</h4>');

  // Tables
  html = html.replace(/((?:\|(?:[^\n]+)\|(?:\n|$))+)/g, (match) => {
    const lines = match.trim().split('\n');
    if (lines.length < 2) return match;

    const headers = lines[0].split('|').slice(1, -1).map(h => h.trim());
    // skip line 1 if it's separator
    const isSeparator = lines[1].includes('---');
    const rowLines = isSeparator ? lines.slice(2) : lines.slice(1);

    let tableHtml = '<table><thead><tr>';
    headers.forEach(h => {
      tableHtml += `<th>${h}</th>`;
    });
    tableHtml += '</tr></thead><tbody>';

    rowLines.forEach(line => {
      const cells = line.split('|').slice(1, -1).map(c => c.trim());
      if (cells.length > 0) {
        tableHtml += '<tr>';
        cells.forEach(c => {
          tableHtml += `<td>${c}</td>`;
        });
        tableHtml += '</tr>';
      }
    });

    tableHtml += '</tbody></table>';
    return tableHtml;
  });

  // Bold & Italic
  html = html.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
  html = html.replace(/\*(.*?)\*/g, '<em>$1</em>');

  // Links
  html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>');

  // Unordered list items
  html = html.replace(/^\s*-\s+(.*)$/gim, '<li>$1</li>');
  html = html.replace(/(<li>.*<\/li>)/gs, (match) => {
    return `<ul>${match}</ul>`;
  });

  // Clean duplicate <ul> wraps if regex over-matched
  html = html.replace(/<\/ul>\s*<ul>/g, '');

  // Horizontal rules
  html = html.replace(/^---$/gim, '<hr />');

  // Paragraphs
  const blocks = html.split(/\n\s*\n/);
  html = blocks.map(block => {
    block = block.trim();
    if (!block) return '';
    if (
      block.startsWith('<h') ||
      block.startsWith('<table') ||
      block.startsWith('<ul') ||
      block.startsWith('<ol') ||
      block.startsWith('<blockquote') ||
      block.startsWith('<div') ||
      block.startsWith('<pre') ||
      block.startsWith('<hr') ||
      block.startsWith('__CODE_BLOCK_')
    ) {
      return block;
    }
    return `<p>${block.replace(/\n/g, '<br />')}</p>`;
  }).join('\n\n');

  // Restore inline codes
  inlineCodes.forEach((code, i) => {
    html = html.replace(`__INLINE_CODE_${i}__`, code);
  });

  // Restore code blocks
  codeBlocks.forEach((code, i) => {
    html = html.replace(`__CODE_BLOCK_${i}__`, code);
  });

  return html;
}
