import { Elements, Form } from 'katejs/lib/client';
import moment from 'moment';

const checkEqual = (val1, val2) => {
  if (val1 === val2) return true;
  if (val1 && val2) return val1.uuid === val2.uuid;
  return false;
};

const joinRecord = ({ balance, turnover, fields, resources }) => {
  const data = [];
  const totals = balance.map(item => ({ ...item, records: [], increase: 0, decrease: 0 }));
  turnover.forEach((record) => {
    let total = totals.find(item => checkEqual(item[fields[0]], record[fields[0]]));
    if (!total) {
      total = {
        [resources[0]]: 0,
        [fields[0]]: record[fields[0]],
        records: [],
        increase: 0,
        decrease: 0,
        sum: 0,
      };
      totals.push(total);
    }
    total.records.push(record);
    if (record.sum > 0) {
      // eslint-disable-next-line no-param-reassign
      record.increase = record.sum;
      total.increase += record.sum;
    }
    if (record.sum < 0) {
      // eslint-disable-next-line no-param-reassign
      record.decrease = -record.sum;
      total.decrease -= record.sum;
    }
  });
  totals.forEach((total) => {
    // eslint-disable-next-line no-param-reassign
    total.total = (total.sum + total.increase) - total.decrease;
    data.push(total, ...total.records);
  });

  return data;
};

const cellStyle = (data) => {
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
    this.content.data.value = joinRecord({ balance, turnover, fields: ['cashbox'], resources: ['sum'] });
  }
}
