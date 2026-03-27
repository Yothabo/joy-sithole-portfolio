export const wrapNumbers = () => {
  // Select all text nodes that contain numbers
  const walker = document.createTreeWalker(
    document.body,
    NodeFilter.SHOW_TEXT,
    {
      acceptNode: function(node) {
        // Skip script, style, and other non-content elements
        if (node.parentElement?.tagName === 'SCRIPT' || 
            node.parentElement?.tagName === 'STYLE' ||
            node.parentElement?.tagName === 'CODE') {
          return NodeFilter.FILTER_REJECT;
        }
        // Only process text nodes that contain numbers
        if (/\d/.test(node.textContent || '')) {
          return NodeFilter.FILTER_ACCEPT;
        }
        return NodeFilter.FILTER_SKIP;
      }
    }
  );

  const nodesToReplace: Text[] = [];
  let node;
  while (node = walker.nextNode()) {
    nodesToReplace.push(node as Text);
  }

  nodesToReplace.forEach(textNode => {
    const text = textNode.textContent || '';
    // Replace numbers with wrapped span
    const newHtml = text.replace(/(\d+(?:[\.,]\d+)?)/g, '<span class="number">$1</span>');
    if (newHtml !== text) {
      const span = document.createElement('span');
      span.innerHTML = newHtml;
      textNode.parentNode?.replaceChild(span, textNode);
    }
  });
};
