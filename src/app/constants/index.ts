export const PAGE_TITLE = 'Rokezzz';

interface IPages {
  label: string;
  path: string;
  fragment?: string;
}

interface IFooterCols {
  label: string;
  pages: IPages[];
}

interface IContactData {
  mail: string;
  phone: string;
  address: string;
  city: string;
  postCode: string;
}

export const PAGES: IPages[] = [
  {
    label: 'O mnie',
    path: '/',
    fragment: 'o-mnie',
  },
  {
    label: 'Osiągnięcia',
    path: '/example',
    fragment: '1',
  },
  {
    label: 'Przemiany',
    path: '/example',
    fragment: '2',
  },
  {
    label: 'Galeria',
    path: '/example',
    fragment: '3',
  },
  {
    label: 'Kontakt',
    path: '/',
    fragment: 'kontakt',
  },
  {
    label: 'Umów trening',
    path: '/',
    fragment: 'umow-trening',
  },
];

export const FOOTER_COLS: IFooterCols[] = [
  {
    label: 'Na skróty',
    pages: [
      {
        label: 'O mnie',
        path: '/',
      },
      {
        label: 'Umów trening',
        path: '/umow-trening',
      },
      {
        label: 'Kontakt',
        path: '/kontakt',
      },
    ],
  },
];

export const CONTACT_DATA: IContactData = {
  mail: 'example@mail.com',
  phone: '+48123123123',
  address: 'ul. Test 12',
  city: 'Warszawa',
  postCode: '00-000',
};

export const SCROLL_Y_OFFSET = 100;
