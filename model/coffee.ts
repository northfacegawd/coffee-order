export interface StarBucksCoffee {
  cate_CD: string;
  del_YN: string;
  reg_USER: string;
  reg_DT: string;
  mod_USER: string;
  mod_DT: string;
  content: string;
  cate_TYPE: string;
  pro_SEQ: number;
  view_YN: string;
  info_TABLE: string;
  file_TABLE: string;
  cate_TABLE: string;
  card_TABLE: string;
  msr_SEQ: number;
  web_IMAGE_WEBVIEW: string;
  web_IMAGE_TABVIEW: string;
  web_IMAGE_MOBVIEW: string;
  product_ENGNM: string;
  product_CD: string;
  product_NM: string;
  file_NAME: string;
  file_PATH: string;
  cate_NAME: string;
  recommend: string;
  kcal: string;
  fat: string;
  nut_TABLE: string;
  new_SDATE: string;
  new_EDATE: string;
  sell_CAT: string;
  gift_VALUE: string;
  hot_YN: string;
  price: string;
  sold_OUT: string;
  front_VIEW_YN: string;
  view_SDATE: string;
  view_EDATE: string;
  note_TYPE: string;
  youtube_CODE: string;
  newicon: string;
  recomm: string;
  file_MASTER: string;
  thumbnail: string;
  img_ORDER: string;
  standard: string;
  unit: string;
  sat_FAT: string;
  trans_FAT: string;
  cholesterol: string;
  sugars: string;
  chabo: string;
  protein: string;
  sodium: string;
  caffeine: string;
  allergy: string;
  kcal_L: string;
  fat_L: string;
  sat_FAT_L: string;
  trans_FAT_L: string;
  cholesterol_L: string;
  sugars_L: string;
  chabo_L: string;
  protein_L: string;
  sodium_L: string;
  caffeine_L: string;
  msr_SEQ2: string;
  web_NEW: string;
  app_IMAGE: string;
  web_CARD_BIRTH: string;
  card_YEAR: string;
  card_MONTH: string;
  egift_CARD_YN: string;
  pair_TABLE: string;
  sub_VIEW: string;
  f_CATE_CD: string;
  pcate_CD: string;
  all_CATE_CD: string;
  img_UPLOAD_PATH: string;
  premier: string;
  search_DATE_TYPE?: any;
  search_START_DATE?: any;
  search_END_DATE?: any;
  search_1_CATE?: any;
  search_2_CATE?: any;
  search_3_CATE?: any;
  search_SALE_TYPE?: any;
  search_VIEW_YN?: any;
  search_KEY: string;
  search_VALUE?: any;
  theme_SEARCH: string;
  page_INDEX: number;
  page_UNIT: number;
  page_SIZE: number;
  first_INDEX: number;
  last_INDEX: number;
  record_COUNT_PER_PAGE: number;
  total_CNT: number;
  rnum: number;
}

export const startBucksCoffeeTypeArray = [
  'cold_brew',
  'brood',
  'espresso',
  'frappuccino',
  'blended',
  'refresher',
  'fizzio',
  'tea',
  'other',
  'juice_bottle',
] as const;

export type StartBucksCoffeeType = typeof startBucksCoffeeTypeArray[number];

export interface StarBucksMenu {
  type: StartBucksCoffeeType;
  name: string;
  fileName: string;
  list: StarBucksCoffee[];
}
