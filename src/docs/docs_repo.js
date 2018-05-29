import { resolve } from 'path';

const kibanaDir = resolve(__dirname, '..', '..');

export function buildDocsScript(cmd) {
  return resolve(process.cwd(), cmd.docrepo, 'build_docs.pl');
}

export function buildDocsArgs(cmd) {
  const docsIndexFile = resolve(kibanaDir, 'docs', 'index.asciidoc');
  const xpackDocsPath = resolve(kibanaDir, 'x-pack', 'docs');
  let args = [
    '--doc',
    docsIndexFile,
    '--resource',
    xpackDocsPath,
    '--chunk=1',
  ];
  if (cmd.open) {
    args = [...args, '--open'];
  }
  return args;
}

export function defaultDocsRepoPath() {
  return resolve(kibanaDir, '..', 'docs');
}
