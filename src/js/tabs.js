window.addEventListener('DOMContentLoaded', init);

function init () {
    const tabsBtn = document.querySelector('.tabs__list');
    tabs(tabsBtn);
}

function tabs (tabsBtn) { 
  const activeTab = 'tabs__content-item--active';
  const activeBtn = 'tabs__item--active';

  tabsBtn.addEventListener('click', ev => {
    if (ev.target.tagName === 'A') {
        const anchor = ev.target.getAttribute('href'); 
        switchTab(anchor);
        switchActiveBtn(ev.target);
    }
  });

  function switchTab (selector) {

    const tab = document.querySelector(selector);
    const parent = tab.closest('.tabs__content');
    
    parent.querySelector(`.${activeTab}`)
      .classList.remove(activeTab);    
    tab.classList.add(activeTab);
  }

  function switchActiveBtn (selector) {

    const li = selector.parentElement;
    const parent = li.closest('.tabs__list');

    parent.querySelector(`.${activeBtn}`)
      .classList.remove(activeBtn);
    li.classList.add(activeBtn);
  }
}