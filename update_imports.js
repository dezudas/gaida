const fs = require('fs');
const path = require('path');

const updates = [
  { p: 'src/base/_typography.scss', uses: ['@use "../tokens" as *;'] },
  { p: 'src/layout/_grid.scss', uses: ['@use "../tokens" as *;', '@use "../mixins" as *;'] },
  { p: 'src/layout/_container.scss', uses: ['@use "../tokens" as *;', '@use "../mixins" as *;'] },
  { p: 'src/components/_button.scss', uses: ['@use "../tokens" as *;', '@use "../mixins" as *;'] },
  { p: 'src/components/_form.scss', uses: ['@use "../tokens" as *;', '@use "../mixins" as *;'] },
  { p: 'src/components/_card.scss', uses: ['@use "../tokens" as *;', '@use "../mixins" as *;'] },
  { p: 'src/components/_nav.scss', uses: ['@use "../tokens" as *;', '@use "../mixins" as *;'] },
  { p: 'src/components/_table.scss', uses: ['@use "../tokens" as *;', '@use "../mixins" as *;'] },
  { p: 'src/components/_badge.scss', uses: ['@use "../tokens" as *;'] },
  { p: 'src/utilities/_spacing.scss', uses: ['@use "../tokens" as *;'] },
  { p: 'src/mixins/_respond-to.scss', uses: ['@use "../tokens" as *;'] },
  { p: 'src/mixins/_fluid-type.scss', uses: ['@use "../tokens" as *;'] }
];

for (const { p, uses } of updates) {
  const fullPath = path.join(process.cwd(), p);
  let content = fs.readFileSync(fullPath, 'utf8');
  
  // Find where header comment ends (last ============)
  const headerEnd = content.lastIndexOf('=============================================================================') + 77;
  // Get next newline
  const insertPos = content.indexOf('\n', headerEnd) + 1;
  
  if (!content.includes(uses[0])) {
    content = content.slice(0, insertPos) + '\n' + uses.join('\n') + '\n' + content.slice(insertPos);
    fs.writeFileSync(fullPath, content);
  }
}
