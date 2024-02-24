interface IPages {
  label: string;
  path: string;
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
  },
  {
    label: 'Osiągnięcia',
    path: '/osiagniecia',
  },
  {
    label: 'Przemiany',
    path: '/przemiany',
  },
  {
    label: 'Galeria',
    path: '/galeria',
  },
  {
    label: 'Umów trening',
    path: '/umow-trening',
  },
  {
    label: 'Kontakt',
    path: '/kontakt',
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
