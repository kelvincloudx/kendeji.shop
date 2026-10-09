export interface Plan {
  id: string;
  name: string;
  traffic: string;
  trafficValue: number; // in GB for filtering
  monthlyPrice: number;
  annualReferencePrice: number;
  category: 'entry' | 'standard' | 'pro';
  badge?: string;
  quotaNote?: string;
  description: string;
  features: string[];
}

export const AFFILIATE_URL = 'https://varnexa.lingdongaff.com/#/?code=HHoxxHGa';

export const DISCLAIMER_TEXT = 
  '特别提示：以上信息依据公开第三方资料整理，属于参考套餐。实际在售套餐、价格、额度、支持功能及购买渠道请以服务提供方最新页面为准。本站指定推广入口与肯の基套餐的销售对应关系尚待核实。';

export const PLANS: Plan[] = [
  {
    id: 'napoleon',
    name: '小块拿破仑',
    traffic: '75GB / 月',
    trafficValue: 75,
    monthlyPrice: 30,
    annualReferencePrice: 324,
    category: 'entry',
    badge: '轻量首选',
    description: '适合轻度网络浏览、学术文献检索与日常文字通讯，75GB 配额经济实用。',
    features: ['75GB 月度配额', '公开年付参考价 ¥324', '全平台客户端兼容', '单用户基础接入']
  },
  {
    id: 'dudu-single',
    name: '嘟嘟糕',
    traffic: '100GB / 月',
    trafficValue: 100,
    monthlyPrice: 40,
    annualReferencePrice: 432,
    category: 'entry',
    badge: '标准入门',
    description: '覆盖常规 1080P 视频播放与日常社交软件，100GB 月额度平衡稳定。',
    features: ['100GB 月度配额', '公开年付参考价 ¥432', '支持多终端配置', '基础客服支持']
  },
  {
    id: 'dudu-large',
    name: '大块嘟嘟糕',
    traffic: '150GB / 月',
    trafficValue: 150,
    monthlyPrice: 60,
    annualReferencePrice: 648,
    category: 'standard',
    badge: '进阶推荐',
    description: '适合兼顾 4K 超高清视频与频繁开发资源同步的主力用户需求。',
    features: ['150GB 月度配额', '公开年付参考价 ¥648', '高吞吐节点接入', '规则分流支持']
  },
  {
    id: 'dudu-double',
    name: '两块嘟嘟糕',
    traffic: '200GB / 月',
    trafficValue: 200,
    monthlyPrice: 80,
    annualReferencePrice: 864,
    category: 'standard',
    badge: '双倍畅享',
    description: '200GB 充沛月度流量，满足手机与电脑双终端联合高频并发使用。',
    features: ['200GB 月度配额', '公开年付参考价 ¥864', '双端并发兼容', '低延迟优化线路']
  },
  {
    id: 'dudu-two-half',
    name: '两块半嘟嘟糕',
    traffic: '250GB / 月',
    trafficValue: 250,
    monthlyPrice: 100,
    annualReferencePrice: 1080,
    category: 'standard',
    badge: '百元主力',
    description: '百元级强力甜品套餐，性价比优异，适合大文件传输与模型训练工具调用。',
    features: ['250GB 月度配额', '公开年付参考价 ¥1080', '高并发宽带冗余', '优先节点调度']
  },
  {
    id: 'scone',
    name: '司康饼',
    traffic: '500GB / 月',
    trafficValue: 500,
    monthlyPrice: 200,
    annualReferencePrice: 2160,
    category: 'pro',
    badge: '极客大流量',
    description: '500GB 半 TB 级大额度配额，专为远程全天候办公与高清实时直播打造。',
    features: ['500GB 月度配额', '公开年付参考价 ¥2160', '极客专属大流量', '全协议栈兼容']
  },
  {
    id: 'souffle',
    name: '舒芙蕾',
    traffic: '约 1000GB / 月',
    trafficValue: 1000,
    monthlyPrice: 350,
    annualReferencePrice: 3780,
    category: 'pro',
    badge: '旗舰顶级',
    quotaNote: '额度待核实（公开记录存在 1000GB 与 1024GB 异同）',
    description: '旗舰级顶配大容量套餐，适合极客玩家与多设备密集数据交互应用。',
    features: ['约 1000GB 月度配额（待核实）', '公开年付参考价 ¥3780', '最高线路优先权', 'VIP 特约服务通道']
  }
];

export const OTHER_BILLING_CYCLES = {
  quarterly: '缺乏独立确认结算价格（不提供任意推算公式，请以实测平台后台为准）',
  halfYearly: '缺乏独立确认结算价格（不提供任意推算公式，请以实测平台后台为准）'
};
