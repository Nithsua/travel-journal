export interface JournalData {
  title: string;
  location: string;
  googleMapsUrl: string;
  startDate: string;
  endDate: string;
  description: string;
  imageUrl: string;
}

const journals: JournalData[] = [
  {
    title: "Mount Fuji",
    location: "Japan",
    googleMapsUrl: "https://goo.gl/maps/1DGM5WrWnATgkSNB8",
    startDate: "12 Jan, 2021",
    endDate: "24 Jan, 2021",
    description:
      "Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.",
    imageUrl:
      "https://images.unsplash.com/photo-1589308078059-be1415eab4c3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
  {
    title: "Sydney Opera House",
    location: "Australia",
    googleMapsUrl: "https://goo.gl/maps/aTBpemoocq4U6tya6",
    startDate: "27 May, 2021",
    endDate: "08 Jun, 2021",
    description:
      "The Sydney Opera House is a multi-venue performing arts centre in Sydney. Located on the banks of the Sydney Harbour, it is often regarded as one of the 20th century's most famous and distinctive buildings",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Sydney_Australia._%2821339175489%29.jpg/800px-Sydney_Australia._%2821339175489%29.jpg",
  },
  {
    title: "Geirangerfjord",
    location: "Norway",
    googleMapsUrl: "https://goo.gl/maps/2VHD8SBXYDxZboJc6",
    startDate: "01 Oct, 2021",
    endDate: "18 Nov, 2021",
    description:
      "The Geiranger Fjord is a fjord in the Sunnmøre region of Møre og Romsdal county, Norway. It is located entirely in the Stranda Municipality.",
    imageUrl:
      "https://assets.simpleviewcms.com/simpleview/image/fetch/c_limit,h_1200,q_75,w_1200/https://media.newmindmedia.com/TellUs/image/%3Ffile%3DGeirangerfjord_fn885dhm_Credit_Per-Ottar-Walderhaug_Fjord-Norway_2038541965.jpg%26dh%3D500%26dw%3D800%26t%3D4",
  },
];

export default journals;
