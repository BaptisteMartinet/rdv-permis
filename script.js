const Millisecond = 1;
const Seconde = Millisecond * 1000;
const Minute = Seconde * 60;

const FetchingIntervalMs = 5 * Minute;
const CountyCodes = ['077', '002', '045', '060'];

let idx = 0;
setInterval(async () => {
  const countyCode = CountyCodes[idx++ % CountyCodes.length];
  const slots = await fetch(`https://candidat.permisdeconduire.gouv.fr/api/v1/candidat/creneaux?code-departement=${countyCode}`).then(data => data.json()).catch((e => console.error(e)));
  const now = new Date();
  console.info(`County: ${countyCode}`, now, slots);
}, FetchingIntervalMs);

console.info('Fetching slots...');
