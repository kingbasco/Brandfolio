// Documentation-only controls. No project data or external service calls.
const theme = document.querySelector('#theme');
theme.addEventListener('click', () => {
  const dark = document.documentElement.dataset.theme !== 'dark';
  document.documentElement.dataset.theme = dark ? 'dark' : 'light';
  theme.setAttribute('aria-pressed', String(dark));
  theme.textContent = dark ? 'Light specimen' : 'Dark specimen';
});
let timer;
function notify(message) {
  const toast = document.querySelector('#toast');
  clearTimeout(timer);
  toast.textContent = message;
  toast.hidden = false;
  timer = setTimeout(() => { toast.hidden = true; }, 4500);
}
document.querySelectorAll('.demo-action').forEach(button => button.addEventListener('click', () => notify(`${button.textContent} — component demonstration only.`)));
const dialog = document.querySelector('#confirm-dialog');
document.querySelector('#open-dialog').addEventListener('click', () => dialog.showModal());
document.querySelector('#close-dialog').addEventListener('click', () => dialog.close());
document.querySelector('#confirm-demo').addEventListener('click', () => { dialog.close(); notify('Confirmation demonstrated. No data was deleted.'); });
document.querySelector('#demo-form').addEventListener('submit', event => {
  event.preventDefault();
  const input = document.querySelector('#brand-name');
  const valid = input.value.trim().length > 0;
  input.setAttribute('aria-invalid', String(!valid));
  document.querySelector('#brand-error').textContent = valid ? '' : 'Enter a brand name to validate this specimen.';
  if (!valid) input.focus(); else notify('Validation passed. No brand was created.');
});
