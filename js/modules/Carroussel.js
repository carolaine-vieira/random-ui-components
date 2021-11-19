export default function Carroussel(Data) {
  let containerWidth;
  let changeSize;
  const data = Data();
  const elementToAppend = "#main";
  const container = "item-container";
  const containerItens = "itens";
  const previousButtonIcon = `<span class="lnr lnr-chevron-left"></span>`;
  const nextButtonIcon = `<span class="lnr lnr-chevron-right"></span>`;

  const getContainerLeftPosition = (index) => {
    return $(`.${container}`).eq(index).scrollLeft();
  };

  const previousCarrousselItem = (index) => {
    $(`.${container}`)
      .eq(index)
      .scrollLeft(getContainerLeftPosition(index) - changeSize);
  };

  const nextCarrousselItem = (index) => {
    $(`.${container}`)
      .eq(index)
      .scrollLeft(getContainerLeftPosition(index) + changeSize);
  };

  data.map((item, index) => {
    $(elementToAppend).append(
      `<div class="category"><h2>${item.category}</h2><div class="${container}"></div><div class="controls"><a class="previous ${index}">${previousButtonIcon}</a><a class="next ${index}">${nextButtonIcon}</a></div></div>`
    );

    item.itens.forEach((element) => {
      $(`.${container}`)
        .eq(index)
        .append(
          `<div class="${containerItens}"><img src="${element.image}" alt="${element.title}"/> <h3>${element.title}</h3></div>`
        );
    });
  });

  containerWidth = $(`.${container}`).width();
  changeSize = $(`.${container} .${containerItens}`).eq(0).width();

  $(".category a.next").click(function (e) {
    let nextItemIndex = parseInt(e.target.parentNode.classList[1]);
    nextCarrousselItem(nextItemIndex);
  });

  $(".category a.previous").click(function (e) {
    let previousItemIndex = parseInt(e.target.parentNode.classList[1]);
    previousCarrousselItem(previousItemIndex);
  });
}
