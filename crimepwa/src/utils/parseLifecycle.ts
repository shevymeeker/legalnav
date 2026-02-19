import raw from '@/content/daviess_criminal_lifecycle.md?raw';

/**
 * Extracts the markdown content for a phase section from the lifecycle document.
 * headingMarker is matched against ## headings (e.g. "PHASE 1:", "SPECIALIZED PROCEEDINGS").
 * Returns the content from the matched ## heading to the next ## heading (exclusive).
 */
export function extractPhaseContent(headingMarker: string): string {
  // Split on lines that start with ## (level-2 headings)
  const sections = raw.split(/^(?=## )/m);
  const match = sections.find(s => s.includes(headingMarker));
  if (!match) return '';
  // Strip the leading ## heading line itself so we start at the first ###
  const lines = match.split('\n');
  // Drop the first line (the ## heading) and return the rest
  return lines.slice(1).join('\n').trim();
}

/**
 * Converts the subset of Markdown used in daviess_criminal_lifecycle.md to safe HTML.
 * Handles: ### headings, **bold**, bullet lists (- item), horizontal rules (---),
 * blank-line-separated paragraphs, and inline code (`code`).
 */
export function mdToHtml(md: string): string {
  if (!md) return '';

  const lines = md.split('\n');
  const out: string[] = [];
  let inList = false;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    // Horizontal rule
    if (/^---+$/.test(line.trim())) {
      if (inList) { out.push('</ul>'); inList = false; }
      out.push('<hr>');
      continue;
    }

    // ### heading (h3)
    if (line.startsWith('### ')) {
      if (inList) { out.push('</ul>'); inList = false; }
      out.push(`<h3>${inlineFormat(line.slice(4))}</h3>`);
      continue;
    }

    // #### heading (h4)
    if (line.startsWith('#### ')) {
      if (inList) { out.push('</ul>'); inList = false; }
      out.push(`<h4>${inlineFormat(line.slice(5))}</h4>`);
      continue;
    }

    // Bullet list item
    if (/^- /.test(line)) {
      if (!inList) { out.push('<ul>'); inList = true; }
      out.push(`<li>${inlineFormat(line.slice(2))}</li>`);
      continue;
    }

    // Empty line
    if (line.trim() === '') {
      if (inList) { out.push('</ul>'); inList = false; }
      continue;
    }

    // Regular paragraph line — close list if open, then emit as <p>
    if (inList) { out.push('</ul>'); inList = false; }
    out.push(`<p>${inlineFormat(line)}</p>`);
  }

  if (inList) out.push('</ul>');
  return out.join('\n');
}

function inlineFormat(text: string): string {
  // Escape HTML entities first
  let s = text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');

  // **bold**
  s = s.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');

  // *italic*
  s = s.replace(/\*(.+?)\*/g, '<em>$1</em>');

  // `code`
  s = s.replace(/`(.+?)`/g, '<code>$1</code>');

  return s;
}
