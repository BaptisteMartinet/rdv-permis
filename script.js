const Millisecond = 1;
const Seconde = Millisecond * 1000;
const Minute = Seconde * 60;

const FetchingIntervalMs = 5 * Minute;
const CountyCodes = ['077', '002', '045', '060'];

let idx = 0;
setInterval(async () => {
  const countyCode = CountyCodes[idx];
  const slots = await fetch(`https://candidat.permisdeconduire.gouv.fr/api/v1/candidat/creneaux?code-departement=${countyCode}`).then(data => data.json()).catch((e => console.error(e)));
  const now = new Date();
  console.info(`[${countyCode}] (${now.toLocaleString()})`, slots);
  idx = idx + 1 % CountyCodes.length;
}, FetchingIntervalMs);
