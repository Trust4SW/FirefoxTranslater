browser.menus.create({
	id: "translate-tab",
	title: "Перевести текст",
	contexts:["selection"],
});

browser.menus.onClicked.addListener( async function (info, tab) {
  if (info.menuItemId === "translate-tab") {
	let newTab = await browser.tabs.create({'active':true, 'url':'https://translate.yandex.ru/?source_lang=en&target_lang=ru&text='+info.selectionText, 'index':tab.index+1});
  }
});

