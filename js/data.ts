interface ILugDay {
  id: number;
  date: string;
  lugEvents: ILugEvent[];
}

interface ILugEvent {
  name: string;
  type: LugEventType;
  author?: string;
  body: string;
  file?: string;
  tags: string[];
}

enum LugEventType {
  Present,
  Person,
  Command,
  Discuss
}

const data: ILugDay[] = [
  {
    id: 1,
    date: "جمعه 29 شهریور ساعت 11 صبح",
    lugEvents: [
      {
        name: "لاگ رامسر",
        author: "محسن شعبانیان",
        body:
          "اولین ارائه امروز، توضیحی بود در مورد لاگ، تاریخچه لاگ، و اهداف ما از برگزاری لاگ",
        type: LugEventType.Present,
        tags: []
      },
      {
        name: "ریچارد استالمن",
        author: "محسن شعبانیان",
        body: `دومین ارائه در مورد #استالمن از بنیانگذار جنبش
          نرم افزار های آزاد و پایه گذار بنیاد #گنو بود. به مناسبت خبر استعفای او از بنیاد و دانشگاه ماساچوست`,
        type: LugEventType.Person,
        tags: []
      },
      {
        name: "nohup",
        author: "محسن شعبانیان",
        body: `دستور لینوکسی این هفته nohup بود`,
        type: LugEventType.Command,
        tags: []
      },
      {
        name: "بلاکچین و رمزارز ها",
        body: `بحث و گفتگوی این هفته هم در مورد بلاکچین و رمزارز ها بود`,
        type: LugEventType.Discuss,
        tags: []
      }
    ]
  },
  {
    id: 2,
    date: "جمعه 5 مهر ساعت 11 صبح",
    lugEvents: [
      {
        name: "کامپیوتر های کوانتومی",
        author: "محسن شعبانیان",
        body:
          "به مناسبت پخش خبر برتری کوانتومی توسط گوگل، ارائه این هفته در مورد کامپیوتر های کوانتومی بود.",
        type: LugEventType.Present,
        tags: []
      },
      {
        name: "اروین شرودینگر",
        author: "محسن شعبانیان",
        body: `در ادامه بحث کامپیوتر های کوانتومی، شخصیت هفته، اروین شرودینگر یکی از افراد مهم در این رشته بود.
        در مورد ایده ها و نظریاتش و معادله شروینگر و #گربه_شرودینگر با هم صحبت کردیم`,
        type: LugEventType.Person,
        tags: []
      },
      {
        name: "man",
        author: "محسن شعبانیان",
        body: `دستور لینوکسی این هفته man بود`,
        type: LugEventType.Command,
        tags: []
      },
      {
        name: "زبان های برنامه نویسی",
        body: `بحث و گفتگوی این هفته هم در مورد زبان های برنامه نویسی بود`,
        type: LugEventType.Discuss,
        tags: []
      }
    ]
  }
];

export default data;
