export const resourceAssets: Record<string, string> = {
  '2024 Domestic Violence and Interpersonal Violence Prosecution Policy Procedure Manual.pdf': new URL(
    './newcontent/2024 Domestic Violence and Interpersonal Violence Prosecution Policy Procedure Manual.pdf',
    import.meta.url
  ).href,
  '2025-KCLM_250815.pdf': new URL('./newcontent/2025-KCLM_250815.pdf', import.meta.url).href,
  'Criminal-Appeals-brochure.pdf': new URL('./newcontent/Criminal-Appeals-brochure.pdf', import.meta.url).href,
  'LEOSA-for-Kentucky-Law-Enforcement-2019.pdf': new URL(
    './newcontent/LEOSA-for-Kentucky-Law-Enforcement-2019.pdf',
    import.meta.url
  ).href,
  'LGBTQ-Victims-of-Crime.pdf': new URL('./newcontent/LGBTQ-Victims-of-Crime.pdf', import.meta.url).href,
  'Matricula-Consular-2019.pdf': new URL('./newcontent/Matricula-Consular-2019.pdf', import.meta.url).href,
  'Miranda-Card_PRINTOUT.pdf': new URL('./newcontent/Miranda-Card_PRINTOUT.pdf', import.meta.url).href,
  'Search-in-a-School-Environment-2019.pdf': new URL(
    './newcontent/Search-in-a-School-Environment-2019.pdf',
    import.meta.url
  ).href,
  'conflicts_of_interest.pdf': new URL('./newcontent/conflicts_of_interest.pdf', import.meta.url).href
};

export function getResourceAsset(file: string): string {
  return resourceAssets[file] || '';
}
