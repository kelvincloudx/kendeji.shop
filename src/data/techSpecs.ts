export interface TechSpec {
  name: string;
  category: string;
  status: '提及待验证' | '公开参考' | '客户端支持';
  description: string;
  detail: string;
}

export const TECH_SPECS: TechSpec[] = [
  {
    name: 'CN2 GIA 骨干网',
    category: '出境线路',
    status: '提及待验证',
    description: '中国电信 Next Generation Carrier Network 尊享级出境链路。',
    detail: '公开资料提到肯の基节点覆盖部分 CN2 GIA 路由，实际支持套餐与分配带宽尚待接入测试验证。'
  },
  {
    name: '联通 9929 (CU Premium)',
    category: '出境线路',
    status: '提及待验证',
    description: '中国联通高端出境专线，具备极佳的夜间抗拥堵与低丢包率特性。',
    detail: '资料提及针对联通用户的 9929 优化节点，能否全局覆盖所有甜品套餐须以实际订阅节点列表为准。'
  },
  {
    name: '移动 CMIN2 (AS58807)',
    category: '出境线路',
    status: '提及待验证',
    description: '中国移动全新搭建的跨国精品网，显著提升移动宽带用户的国际访问延迟。',
    detail: '第三方讨论中包含 CMIN2 节点匹配记录，不同出境方向及时段表现尚需用户自行核实。'
  },
  {
    name: 'VLESS + Reality 协议',
    category: '传输协议',
    status: '公开参考',
    description: '无需自有域名的现代 TLS 伪装协议，消除了传统证书特征识别。',
    detail: '采用目标网站 SNI/ALPN 握手模拟技术，具备极高的抗封锁能力与较低的握手开销。'
  },
  {
    name: 'AnyTLS 传输架构',
    category: '传输协议',
    status: '公开参考',
    description: '针对常规 HTTPS 流量特征设计的拟态伪装机制。',
    detail: '通过随机化握手数据报文与多路径回落，降低长连接主动探测概率。'
  },
  {
    name: 'Clash / sing-box 生态',
    category: '客户端兼容',
    status: '客户端支持',
    description: '支持主流规则分流内核及跨平台图形客户端。',
    detail: '兼容 Windows, macOS, Android, iOS 等平台的 Clash Verge, ClashParty, sing-box 等常见软件。'
  },
  {
    name: 'AI 与流媒体解除限制',
    category: '服务兼容',
    status: '提及待验证',
    description: '针对主流海外 AI 工具与 4K 流媒体平台的 IP 协议栈优化。',
    detail: '公开第三方讨论称支持部分流媒体解锁，鉴于平台风控动态变化，不承诺 100% 全域解锁。'
  }
];
