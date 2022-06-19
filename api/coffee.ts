import {
  StartBucksCoffeeType,
  StarBucksMenu,
  StarBucksCoffee,
} from '@model/coffee';

export async function getCoffeeList(
  category: StartBucksCoffeeType,
): Promise<StarBucksMenu> {
  const type: Omit<StarBucksMenu, 'list'> = (() => {
    switch (category) {
      case 'cold_brew':
        return { type: category, name: '콜드 브루 커피', fileName: 'W0000171' };
      case 'brood':
        return { type: category, name: '브루드 커피', fileName: 'W0000060' };
      case 'frappuccino':
        return { type: category, name: '프라푸치노', fileName: 'W0000004' };
      case 'blended':
        return { type: category, name: '블렌디드', fileName: 'W0000005' };
      case 'refresher':
        return {
          type: category,
          name: '스타벅스 리프레셔',
          fileName: 'W0000422',
        };
      case 'fizzio':
        return {
          type: category,
          name: '스타벅스 피지오',
          fileName: 'W0000061',
        };
      case 'tea':
        return { type: category, name: '티(티바나)', fileName: 'W0000075' };
      case 'other':
        return { type: category, name: '기타 제조 음료', fileName: 'W0000053' };
      case 'juice_bottle':
        return {
          type: category,
          name: '스타벅스 주스(병음료)',
          fileName: 'W0000062',
        };
      case 'espresso':
      default:
        return { type: category, name: '에스프레소', fileName: 'W0000003' };
    }
  })();

  // const { data: { list } } = await axios.get<{ list: StarBucksCoffee[] }>(
  //   `https://www.starbucks.co.kr/upload/json/menu/${type.fileName}.js`,
  // );

  // 스타벅스 api를 많이 호출하면 가끔 일시로 밴을 당하는 경우가 있으므로 로컬 개발시에는 목업데이터 사용
  const {
    default: { list },
  } = (await import(`../mock/coffee/${type.fileName}.json`)) as {
    default: { list: StarBucksCoffee[] };
  };

  return { ...type, list };
}

export default getCoffeeList;
