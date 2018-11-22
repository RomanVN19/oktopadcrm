import { translations } from 'katejs/lib/client';

/* eslint-disable quote-props */
const translate = {
  languages: ['ru'],
  ru: {
    ...translations.ru,
    'Assistant': 'Ассистент',
    'Notes': 'Заметки',
    'Note': 'Заметкa',
    'Done': 'Выполнено',
    'Description': 'Описание',
    'Checklist': 'Список',
    'Show all': 'Показывать все',
    'NoteDone': 'Завершено',
  },
};

export default translate;
