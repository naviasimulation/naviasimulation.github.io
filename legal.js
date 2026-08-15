(function(){
var lang = localStorage.getItem('naviasLang') === 'de' ? 'de' : 'en';
var btn = document.getElementById('langBtn');
function apply(){
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-lang]').forEach(function(el){ el.classList.toggle('on', el.getAttribute('data-lang') === lang); });
  if (btn) btn.textContent = lang === 'en' ? 'DE' : 'EN';
  document.querySelectorAll('[data-back-de]').forEach(function(a){ a.textContent = lang === 'de' ? a.getAttribute('data-back-de') : a.getAttribute('data-back-en'); });
}
if (btn) btn.addEventListener('click', function(){ lang = lang === 'en' ? 'de' : 'en'; localStorage.setItem('naviasLang', lang); apply(); });
apply();
})();
