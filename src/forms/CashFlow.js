import { Elements, Form } from 'katejs/lib/client';
import moment from 'moment';

const checkEqual = (val1, val2) => {
  if (val1 === val2) return true;
  if (val1 && val2) return val1.uuid === val2.uuid;
  return false;
};

export const joinRecord = ({ balance, turnover, fields, resources, noDetails }) => {
  const data = [];
  const totals = balance.map(item => ({
    ...item,
    records: [],
    increase: 0,
    decrease: 0,
    start: item[resources[0]],
    total: 0,
  }));

  turnover.forEach((record) => {
    let total = totals.find(item => checkEqual(item[fields[0]], record[fields[0]]));
    if (!total) {
      total = {
        [fields[0]]: record[fields[0]],
        records: [],
        increase: 0,
        decrease: 0,
        start: 0,
        total: 0,
      };
      totals.push(total);
    }
    if (!noDetails) {
      total.records.push(record);
    }
    const res = resources[0];
    if (record[res] > 0) {
      // eslint-disable-next-line no-param-reassign
      record.increase = record[res];
      total.increase += record[res];
    }
    if (record[res] < 0) {
      // eslint-disable-next-line no-param-reassign
      record.decrease = -record[res];
      total.decrease -= record[res];
    }
  });
  totals.forEach((total) => {
    // eslint-disable-next-line no-param-reassign
    total.total = (total.start + total.increase) - total.decrease;
    data.push(total, ...total.records);
  });

  return data;
};

export const cellStyle = (data) => {
  if (data.docTitle) return {};
  return { fontWeight: 'bold' };
};

export default class Cashflow extends Form {
  static title = 'Cash flow';
  static entity = 'Cashbox';
  constructor(args) {
    super(args);
    this.elements = [
      {
        type: Elements.GRID,
        elements: [
          {
            id: 'periodStart',
            type: Elements.DATE,
            title: 'Period start',
            timeFormat: false,
            value: moment().startOf('week'),
          },
          {
            id: 'periodEnd',
            type: Elements.DATE,
            title: 'Period end',
            timeFormat: false,
            value: moment().endOf('week'),
          },
          {
            id: 'details',
            type: Elements.CHECKBOX,
            title: 'Detail to document',
          },
        ]
      },
      {
        id: 'formReport',
        type: Elements.BUTTON,
        title: 'Form report',
        onClick: this.formReport,
      },
      {
        id: 'data',
        type: Elements.TABLE,
        cellStyle,
        columns: [
          {
            id: 'cashbox',
            title: 'Cashbox/Document',
            dataPath: '',
            format: val => (val.docTitle || (val.cashbox && val.cashbox.title)) || 'None',
          },
          {
            title: 'Start',
            dataPath: 'sum',
          },
          {
            title: 'Increase',
            dataPath: 'increase',
          },
          {
            title: 'Decrease',
            dataPath: 'decrease',
          },
          {
            title: 'Total',
            dataPath: 'total',
          },
        ],
      },
    ];
  }
  formReport = async () => {
    const response = [];
    this.content.data.value = response;

    const [{ response: balance }, { response: turnover }] = await Promise.all([
      this.app.MoneyRecord.balance({
        date: moment(this.content.periodStart.value).startOf('day'),
      }),
      this.app.MoneyRecord.turnover({
        where: {
          date: {
            $gt: moment(this.content.periodStart.value).startOf('day'),
            $lte: moment(this.content.periodEnd.value).endOf('day'),
          },
        },
      }),
    ]);
    this.content.data.value = joinRecord({ balance, turnover, fields: ['cashbox'], resources: ['sum'], noDetails: !this.content.details.value });
  }
}
