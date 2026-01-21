export interface Model {
  id: string;
  display_name_en: string;
  display_name_ja: string;
  tagline_en: string;
  tagline_ja: string;
  instagram?: string;
  tiktok?: string;
  fansite?: string;
  photos: Photo[];
}

export interface Photo {
  id: string;
  filename: string;
  shoot_note_en: string;
  shoot_note_ja: string;
}

export const models: Model[] = [
  {
    id: 'model1',
    display_name_en: 'Mio Hanasaki',
    display_name_ja: '花咲澪(はなさきみお)',
    tagline_en: 'Tokyo-based fashion model',
    tagline_ja: '清楚系お天気お姉さん',
    instagram: 'https://www.instagram.com/mio_hanasaki_',
    tiktok: 'https://x.com/mio_hanasaki',
    fansite: 'https://ideapocket.com/actress/detail/861736',
    photos: [
      {
        id: 'photo1',
        filename: 'model1_1.jpg',
        shoot_note_en: 'Shot in Shibuya with natural lighting',
        shoot_note_ja: '渋谷で自然光撮影'
      },
      {
        id: 'photo2',
        filename: 'model1_2.jpg',
        shoot_note_en: 'Evening golden hour in Omotesando',
        shoot_note_ja: '表参道でゴールデンアワー撮影'
      },
      {
        id: 'photo3',
        filename: 'model1_3.jpg',
        shoot_note_en: 'Studio session in Harajuku',
        shoot_note_ja: '原宿スタジオ撮影'
      }
    ]
  },
  {
    id: 'model2',
    display_name_en: 'Nami Shiraishi',
    display_name_ja: '白石なみ(しらいしなみ)',
    tagline_en: 'Editorial & street style',
    tagline_ja: '幼可愛い時々、綺麗。',
    instagram: 'https://moodyz.com/actress/detail/860463',
    tiktok: 'https://moodyz.com/actress/detail/860463',
    fansite: 'https://moodyz.com/actress/detail/860463',
    photos: [
      {
        id: 'photo1',
        filename: 'model2_1.jpg',
        shoot_note_en: 'Urban exploration in Shinjuku',
        shoot_note_ja: '新宿アーバン撮影'
      },
      {
        id: 'photo2',
        filename: 'model2_2.jpg',
        shoot_note_en: 'Night lights in Akihabara',
        shoot_note_ja: '秋葉原ナイトライト撮影'
      },
      {
        id: 'photo3',
        filename: 'model2_3.jpg',
        shoot_note_en: 'Minimalist composition in Ginza',
        shoot_note_ja: '銀座ミニマル撮影'
      }
    ]
  },
  {
    id: 'model3',
    display_name_en: 'Suzu Matsuoka',
    display_name_ja: '松岡すず(まつおかすず)',
    tagline_en: 'Contemporary portraiture',
    tagline_ja: 'NAXプロモーション所属',
    instagram: 'https://www.instagram.com/suzu_matsuoka_nax/',
    tiktok: 'https://x.com/suzusprings',
    fansite: 'https://x.com/suzusprings',
    photos: [
      {
        id: 'photo1',
        filename: 'model3_1.jpg',
        shoot_note_en: 'Natural beauty in Yoyogi Park',
        shoot_note_ja: '代々木公園自然美撮影'
      },
      {
        id: 'photo2',
        filename: 'model3_2.jpg',
        shoot_note_en: 'Soft afternoon in Daikanyama',
        shoot_note_ja: '代官山午後の柔らかな光'
      },
      {
        id: 'photo3',
        filename: 'model3_3.jpg',
        shoot_note_en: 'Bold colors in Nakameguro',
        shoot_note_ja: '中目黒ビビッドカラー撮影'
      }
    ]
  },
  {
    id: 'model4',
    display_name_en: 'Sakura Kawaguchi',
    display_name_ja: '川口桜(かわぐちさくら)',
    tagline_en: 'Avant-garde fashion',
    tagline_ja: 'エスフラート所属',
    instagram: 'https://www.instagram.com/kawaguchi_sakura/',
    tiktok: 'https://x.com/sakura07082005',
    fansite: 'https://x.com/sakura07082005',
    photos: [
      {
        id: 'photo1',
        filename: 'model4_1.jpg',
        shoot_note_en: 'Architectural lines in Roppongi',
        shoot_note_ja: '六本木建築ライン撮影'
      },
      {
        id: 'photo2',
        filename: 'model4_2.jpg',
        shoot_note_en: 'Dramatic shadows in Ebisu',
        shoot_note_ja: '恵比寿ドラマティックシャドウ'
      },
      {
        id: 'photo3',
        filename: 'model4_3.jpg',
        shoot_note_en: 'Monochrome elegance in Marunouchi',
        shoot_note_ja: '丸の内モノクロエレガンス'
      }
    ]
  },
  {
    id: 'model5',
    display_name_en: 'Hinako Mori',
    display_name_ja: '森日向子(もりひなこ)',
    tagline_en: 'Natural & ethereal',
    tagline_ja: 'ナチュラル＆エセリアル',
    instagram: 'https://www.instagram.com/hinako_mori_/',
    tiktok: 'https://x.com/morihinako_',
    fansite: 'https://x.com/morihinako_',
    photos: [
      {
        id: 'photo1',
        filename: 'model5_1.jpg',
        shoot_note_en: 'Cherry blossoms in Ueno',
        shoot_note_ja: '上野桜撮影'
      },
      {
        id: 'photo2',
        filename: 'model5_2.jpg',
        shoot_note_en: 'Soft morning light in Aoyama',
        shoot_note_ja: '青山朝の柔らかな光'
      },
      {
        id: 'photo3',
        filename: 'model5_3.jpg',
        shoot_note_en: 'Dreamy atmosphere in Meguro',
        shoot_note_ja: '目黒ドリーミーな雰囲気'
      }
    ]
  }
];
