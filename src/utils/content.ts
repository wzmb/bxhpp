export type IntroBlock = {
  emphasis?: string
  content: string
}

export type HeroItem = {
  rank: number
  title: string
  name?: string
}

export type RuleSection = {
  title: string
  items: string[]
}

export const introBlocks: IntroBlock[] = [
  {
    emphasis: '交流平台',
    content:
      '我们的初心，是给每一位热爱乒乓的人提供一个更好的交流平台，不强调门槛，不强调功利，先让人愿意靠近。',
  },
  {
    emphasis: '热心球友',
    content:
      '俱乐部一路走来，没有强制大家出一分钱、一分力，更多是几位热心球友在业余时间里搭钱、搭时间，把热爱一点点变成了今天的模样。',
  },
  {
    emphasis: '共同呵护',
    content:
      '它像一个从无到有长大的孩子，会经历弯路，也会遇到挫折。真正让它成长起来的，不是指责和打压，而是大家一起想办法支持、呵护、陪它向前。',
  },
  {
    emphasis: '有温度的球馆',
    content:
      '我们希望一提到望京北小河公园球馆，大家想到的不是松散与冷漠，而是温度、情怀、热血，以及一群彼此团结、彼此成就的球友。',
  },
]

export const heroList: HeroItem[] = [
  { rank: 1, title: '野球不野', name: '付艳霞' },
  { rank: 2, title: '落拍安澜', name: '王文仙' },
  { rank: 3, title: '吴倩' },
  { rank: 4, title: '王玉霞' },
  { rank: 5, title: '乐乒', name: '杜文丽' },
  { rank: 6, title: '温柔的张飞', name: '张杰' },
  { rank: 7, title: '霹雳娇', name: '岳婷' },
  { rank: 8, title: '拾乒卿', name: '吕桂玲' },
  { rank: 9, title: '千手相持', name: '蔺煜果' },
  { rank: 10, title: '双反老太婆', name: '司桂萍' },
  { rank: 11, title: '蜂鸟', name: '解永勃' },
  { rank: 12, title: '乾坤扭转长胶客', name: '马志刚' },
  { rank: 13, title: '不服输', name: '杨毅' },
  { rank: 14, title: '左攻', name: '朱建榕' },
  { rank: 15, title: '圣手怪', name: '马铁顺' },
  { rank: 16, title: '孤勇者', name: '王立方' },
  { rank: 17, title: '一直打', name: '周国强' },
  { rank: 18, title: '反手小强', name: '杜永跃' },
  { rank: 19, title: '吴小辫', name: '吴金柱' },
  { rank: 20, title: '纸老虎', name: '马强' },
  { rank: 21, title: '球摆不定', name: '胡继国' },
  { rank: 22, title: '不太会', name: '宋初峰' },
  { rank: 23, title: '石头城', name: '陈磊' },
  { rank: 24, title: '生胶独角兽', name: '杨民' },
  { rank: 25, title: '令狐瞎冲', name: '张仲' },
  { rank: 26, title: '刚柔相济', name: '毛建红' },
  { rank: 27, title: '辫刀客', name: '江林生' },
  { rank: 28, title: '锐击', name: '杜慧明' },
  { rank: 29, title: '乒乓牛马', name: '张锦文' },
  { rank: 30, title: '韧翁', name: '刘福新' },
  { rank: 31, title: '快乐班主', name: '段占东' },
  { rank: 32, title: '小石头', name: '唐德斌' },
  { rank: 33, title: '老顿', name: '唐献华' },
  { rank: 34, title: '左手邪', name: '王永刚' },
  { rank: 35, title: '倒板无常', name: '单德勇' },
  { rank: 36, title: '慢摇弧圈', name: '陈琳' },
]

export const ruleSections: RuleSection[] = [
  {
    title: '天罡出擂',
    items: ['每月初报名出擂时间，每月必须出擂一次，整体节奏按平均每周 9 人安排。'],
  },
  {
    title: '天罡守擂',
    items: [
      '挑战者发起挑战后，天罡必须应战；2 天内不回复视为拒战一次，连续三次拒战自动让出天罡位置。',
      '天罡如因时间不便可调整应战时间，但改期不能超过一周；连续三次改期，视为拒战，自动让出天罡位置。',
    ],
  },
  {
    title: '外来挑战者应战细则',
    items: [
      '公示挑战者信息后，天罡自愿报名应战，按报名先后顺序出战。',
      '实际出战人数以挑战者需求为准，组委会有权根据挑战者水平优化出战天罡名单。',
    ],
  },
]

export const ruleNotes = [
  '日常挑战及外来高手挑战时间为每周二、四、六晚 8 点。',
  '挑战者至少提前一天下挑战书，以便天罡做好准备。',
  '挑战者需带伴手礼，一球一瓶水皆是心意。',
]

export const pageStats = [
  { label: '第一季英雄', value: '36' },
  { label: '上榜日期', value: '2026.06.30' },
  { label: '挑战时段', value: '周二/四/六 20:00' },
]
