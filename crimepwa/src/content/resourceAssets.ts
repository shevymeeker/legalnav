const PDF_BASE = import.meta.env.BASE_URL + 'content/pdfs/';

export function getResourceAsset(file: string): string {
  return file ? PDF_BASE + encodeURIComponent(file) : '';
}
