import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const files = fs.readdirSync(path.join('data/md'));

export function getCollections(): typeof collections {
  const collections = files.map(filename => {
    // Take the file extension away;
    const slug = filename.replace('.md', '');

    const markdownWithMeta = fs.readFileSync(
      path.join('data/md', filename),
      'utf-8'
    );

    // Convert Meta Data to Object; Destructuring data and rename to frontmatter
    const { data: frontmatter } = matter(markdownWithMeta);

    return {
      slug,
      frontmatter,
    };
  });

  return collections;
}
