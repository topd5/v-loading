function addLoader(elem, loaderHtml) {
  const styles = getComputedStyle(elem);

  if (styles.position === 'static') {
    elem.classList.add('v-l-pos-rel');
  }

  const loaderElem = document.createElement('div');
  loaderElem.classList.add('v-l-loader');
  loaderElem.classList.add('v-l-center-content');
  loaderElem.innerHTML = loaderHtml;
  elem.appendChild(loaderElem);
}

function removeLoader(elem) {
  elem.classList.remove('v-l-pos-rel');
  const loaders = elem.querySelectorAll('.v-l-loader');
  [...loaders].forEach((loader) => elem.removeChild(loader));
}

function getLoaderContentHtml(options) {
  const defaultSpinnerHtml = `
    <svg class="v-l-spinner" width="40" height="40" viewBox="0 0 50 50">
      <circle
        class="v-l-circle" cx="25" cy="25" r="19" fill="none" stroke-linecap="round" stroke="currentColor"
      ></circle>
    </svg>
  `;

  let html = defaultSpinnerHtml;

  if (options?.loaderHtml) {
    html = options.loaderHtml;
  }

  if (!options?.disableRotate) {
    html = `<div class="v-l-rotating v-l-center-content">${html}</div>`;
  }

  html = `<div class="v-l-scale v-l-center-content">${html}</div>`;
  
  return html;
}

function vLoading(options) {
  const loaderHtmlContent = getLoaderContentHtml(options);

  return function (elem, binding) {
    if (binding.value) addLoader(elem, loaderHtmlContent);
    if (!binding.value) removeLoader(elem);
  };
}

export default vLoading;
