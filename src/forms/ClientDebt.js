import { Elements } from 'katejs/lib/client';

export default class ClientDebt {
  constructor(params) {
    Object.assign(this, params);

    const style = {};
    const reportElements = [
      {
        id: 'clientDebtTitle',
        type: Elements.LABEL,
        title: 'Clients debt ',
        tag: 'h4',
      },
      {
        id: 'clientDebtData',
        type: Elements.TABLE,
        style,
        rowClick: this.rowClick,
        columns: [
          {
            title: 'Document',
            dataPath: 'docTitle',
          },
          {
            title: 'Sale',
            dataPath: '',
            format: val => val.sale || (val.sum > 0 ? val.sum : ''),
          },
          {
            title: 'Payment',
            dataPath: '',
            format: val => val.payment || (val.sum < 0 ? -val.sum : ''),
          },
        ],
        value: [],
      },
    ];

    if (this.report) {
      this.elements = reportElements;
      this.exec(this.clientUuid);
    } else {
      this.elements = [
        {
          type: Elements.BUTTON,
          title: 'Client debt',
          onClick: this.showModal,
        },
        {
          id: 'clientDebtModal',
          type: Elements.MODAL,
          maxWidth: 'md',
          open: false,
          elements: reportElements,
        },
      ];
    }
  }
  async exec(clientUuid) {
    const { response: data } = await this.app.DebtRecord.turnover({
      where: { clientUuid: clientUuid || this.content.client.value.uuid },
      order: ['date'],
    });
    const totals = data.reduce((acc, val) => {
      acc[2] += val.sum;
      acc[0] += val.sum > 0 ? val.sum : 0;
      acc[1] += val.sum < 0 ? -val.sum : 0;
      return acc;
    }, [0, 0, 0]);
    data.push({
      docTitle: this.app.t('Total'),
      sale: totals[0],
      payment: totals[1],
    });
    this.content.clientDebtData.value = data;
    this.content.clientDebtTitle.title = this.app.t`Clients debt ${this.report ? '' : this.content.client.value.title}: ${totals[2]}`;
  }
  showModal = async () => {
    this.content.clientDebtModal.open = true;
    this.exec();
  }
  rowClick = (row) => {
    if (this.report) {
      this.app.open(`${row.entity}Item`, { id: row.docUuid });
    }
  }
}
