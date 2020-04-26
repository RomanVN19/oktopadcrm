import { Elements } from 'katejs/lib/client';
import ProductCard from './ProductCard';
import { reportStyle } from './ClientItemMixin';

export default Form => class ProductItem extends Form {
  constructor(args) {
    super(args);

    this.productCard = new ProductCard({
      app: this.app,
      productUuid: args.params.id,
      content: this.content,
    });

    this.elements = [
      {
        type: Elements.GRID,
        id: 'pcGrid',
        elements: [
          {
            type: Elements.GROUP,
            elements: [
              ...this.elements,
            ],
            cols: 12,
          },
          {
            id: 'pcGridRight',
            type: Elements.GROUP,
            hidden: true,
            elements: [
              ...this.productCard.elements,
            ],
            div: true,
            style: reportStyle,
            cols: 6,
          },
        ],
      },
    ];
    this.elements.get('accountBalances').onChange = () => this.setCardVisibility();
  }
  async load() {
    const result = await super.load();
    this.setCardVisibility();
    return result;
  }
  setCardVisibility() {
    const showCard = this.content.accountBalances.value;
    const cols = showCard ? 6 : 12;
    this.content.pcGrid.elements = [
      { ...this.content.pcGrid.elements[0], cols },
      this.content.pcGrid.elements[1],
    ];
    this.content.pcGridRight.hidden = !showCard;
  }
};
