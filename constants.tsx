import { 
  CalendarDays, 
  Store, 
  TrendingUp, 
  FileText, 
  PieChart, 
  Settings2, 
  Server, 
  Users,
  BrainCircuit,
  Layers,
  Rocket
} from 'lucide-react';
import { ModuleData, OverviewData, PersonalInfo, ReflectionItem, FuturePlanItem } from './types';

export const PERSONAL_INFO: PersonalInfo = {
  name: "师宇翔",
  role: "技术工程师",
  period: "2025.07 - 2026.02"
};

export const OVERVIEW_ITEMS: OverviewData[] = [
  {
    title: "全栈体系建设",
    description: "完成了从技术框架引入到多业务模块落地的关键阶段建设，全面覆盖后端服务、管理后台与小程序端。"
  },
  {
    title: "核心业务深耕",
    description: "重点攻坚预约体系、门店管理、销售中心、续费转化、合同管理及运营分析等核心业务模块。"
  },
  {
    title: "基建与治理",
    description: "持续推进数据库脚本规范化与配置治理，有效支撑了业务的快速迭代与稳定上线。"
  }
];

export const REFLECTIONS: ReflectionItem[] = [
  {
    type: 'success',
    title: "成效回顾",
    content: [
      "业务交付力：成功落地8大核心模块，实现从0到1的系统闭环，有力支撑了门店-预约-运营的业务。",
      "稳定性建设：通过Redis缓存体系与MQ削峰填谷，优化高并发流量冲击。",
      "数据价值：初步建立了“经营分析+运营中心”双引擎，将业务数据转化为决策依据，赋能管理层。"
    ]
  },
  {
    type: 'warning',
    title: "反思与不足",
    content: [
      "架构灵活性：部分早期模块（如预约）耦合度较高，面对新需求时扩展性略显不足。",
      "研发效能：需求定义与梳理不够精细容易导致反攻，缺少自动化测试。",
      "并发与数据处理优化：对于一些模块如合同、预约可以尝试使用多线程加Redis缓存进行优化。"
    ]
  },
  {
    type: 'info',
    title: "经验沉淀",
    content: [
      "领域驱动设计：以业务为中心，在复杂业务（如合同/销售）中，坚持DDD思想建模能有效遏制业务逻辑的腐化。",
      "用户视角：技术实现需前置考虑用户操作的便捷性，系统好用比功能能用更重要。",
      "全链路监控：日志与链路追踪是排查问题的核心，必须在开发阶段就纳入规范，而非事后补救。"
    ]
  }
];

export const FUTURE_PLANS: FuturePlanItem[] = [
  {
    category: "智能化升级",
    icon: BrainCircuit,
    color: "text-purple-600",
    goals: [
      "引入AI助手：结合AI实现智能客服与销售话术辅助。",
      "智能排班：基于历史数据预测客流，实现周期性时间设置的自动推荐算法。",
      "数据分析：构建自然语言查询数据的能力，降低数据获取门槛。"
    ]
  },
  {
    category: "架构深度演进",
    icon: Layers,
    color: "text-blue-600",
    goals: [
      "服务网格化：推进微服务治理，引入Service Mesh提升服务间调用的观测性与安全性。",
    ]
  },
  {
    category: "团队与效能",
    icon: Rocket,
    color: "text-orange-600",
    goals: [
      "规范标准化：建立统一的API设计规范与前端组件库，降低协作成本。"
    ]
  }
];

export const MODULES: ModuleData[] = [
  {
    id: "reservation",
    title: "预约管理",
    icon: CalendarDays,
    images: [
      // Hero Image (Web)
      "https://mengyaxiang.oss-cn-hangzhou.aliyuncs.com/syx/web-2.png",
      // Mobile Images
      "https://mengyaxiang.oss-cn-hangzhou.aliyuncs.com/syx/wx-1.jpg",
      "https://mengyaxiang.oss-cn-hangzhou.aliyuncs.com/syx/wx-2.jpg",
      "https://mengyaxiang.oss-cn-hangzhou.aliyuncs.com/syx/wx-3.jpg",
      // Additional Web Images
      "https://mengyaxiang.oss-cn-hangzhou.aliyuncs.com/syx/web-3.png",
      "https://mengyaxiang.oss-cn-hangzhou.aliyuncs.com/syx/web-4.png"
    ],
    coreFunctions: {
      title: "核心功能",
      items: [
        "全流程管理：支持预约/咨询的创建、查询、详情查看及多维度导出统计。",
        "跟进体系：建立跟进记录增删改查、导出与聚合汇总，支持未到店快捷补录。",
        "库存与排班：实现时间槽动态查询与刷新，支撑前端可视化展示。",
        "小程序闭环：提供C端浏览、预约、变更及历史查看完整服务。",
        "文件治理：集成咨询截图云存储与游离文件清理机制。",
        "权限控制：基于DataScope实现门店与人员维度的精细化隔离。"
      ]
    },
    challenges: {
      title: "难点攻克",
      items: [
        "库存一致性：解决高并发下时间段容量控制难题（占用/释放/冻结），确保口径统一。",
        "状态流转闭环：攻克自动到店与状态流转一致性问题（批量扫描/差异化处理）。",
        "高可用通知：构建分级通知链路，MQ异步优先，WebSocket异常降级。"
      ]
    }
  },
  {
    id: "store",
    title: "门店管理",
    icon: Store,
    images: [
      "https://mengyaxiang.oss-cn-hangzhou.aliyuncs.com/syx/web-5.png",
      "https://mengyaxiang.oss-cn-hangzhou.aliyuncs.com/syx/web-6.png",
      "https://mengyaxiang.oss-cn-hangzhou.aliyuncs.com/syx/web-7.png",
      "https://mengyaxiang.oss-cn-hangzhou.aliyuncs.com/syx/web-8.png"
    ],
    coreFunctions: {
      title: "核心功能",
      items: [
        "基础信息维护：全生命周期管理，支持按商家或身份获取列表。",
        "服务与配置：构建服务项目配置体系（统计/改价/模板），支持分类树检索。",
        "排班缓存体系：升级二级缓存模式，支持库存查询、预热、清理与冲突检查。",
        "资料管理：云端图片批量管理，实现多文件并行拉取与流式压缩下载。",
        "小程序展示：匿名访问支持，含营业状态过滤与图片地址自动补全。"
      ]
    },
    challenges: {
      title: "难点攻克",
      items: [
        "缓存口径统一：解决有效期、按日更新、冲突检查及库存计算的逻辑一致性。",
        "大文件下载性能：采用“并发拉取 + 流式写入”策略，增加容错跳过机制。",
        "权限与文件治理：严格校验归属权，收口批量删除逻辑与游离文件清理。"
      ]
    }
  },
  {
    id: "sales",
    title: "销售中心",
    icon: TrendingUp,
    images: [
      "https://mengyaxiang.oss-cn-hangzhou.aliyuncs.com/syx/web-13.png",
      "https://mengyaxiang.oss-cn-hangzhou.aliyuncs.com/syx/web-14.png",
      "https://mengyaxiang.oss-cn-hangzhou.aliyuncs.com/syx/web-15.png",
      "https://mengyaxiang.oss-cn-hangzhou.aliyuncs.com/syx/web-16.png"
    ],
    coreFunctions: {
      title: "核心功能",
      items: [
        "转客户流程：设计新签/续费三步转客户链路，支持续费流程简化与订单继承。",
        "续费全周期管理：涵盖续费列表、商机详情关联、自动生成商机及状态闭环。",
        "目标管理体系：支持多维度目标配置，实现基于部门树的权限隔离。",
        "数据罗盘：构建十大KPI仪表盘，涵盖业绩、转化率、有效拜访及线索漏斗。"
      ]
    },
    challenges: {
      title: "难点攻克",
      items: [
        "复杂权限穿透：解决转客户过程中新数据的即时可见性问题（绕过常规权限）。",
        "数据关联溯源：理清续费订单与原订单关联口径，实现字段自动补全。",
        "统计口径对齐：确保罗盘统计与实际订单一致，解决目标与实绩的权限视角差异。"
      ]
    }
  },
  {
    id: "contracts",
    title: "合同管理",
    icon: FileText,
    images: [
      "https://mengyaxiang.oss-cn-hangzhou.aliyuncs.com/syx/web-9.png",
      "https://mengyaxiang.oss-cn-hangzhou.aliyuncs.com/syx/web-10.png"
    ],
    coreFunctions: {
      title: "核心功能",
      items: [
        "合同全生命周期：支持增删改查、详情检索及Excel导出。",
        "多协议架构：实现主协议、附属协议、服务规范生成与确认，支持独立续签。",
        "自动化治理：建立过期扫描机制，支持按类型批量生成文档。",
        "文件与预览：统一文件预览入口，支持本地与云端文件在线预览下载。",
        "安全与校验：内置严格格式校验与基于门店/部门的数据过滤。"
      ]
    },
    challenges: {
      title: "难点攻克",
      items: [
        "事务一致性：利用After Commit事件配合异步线程解决文档生成时序问题。",
        "智能变更决策：采用处理器模式判定变更类型，实现按需重生成文档。",
        "文件安全：强化路径安全校验（防穿越/白名单），收口上传清理逻辑。"
      ]
    }
  },
  {
    id: "analysis",
    title: "经营分析",
    icon: PieChart,
    images: [
      "https://mengyaxiang.oss-cn-hangzhou.aliyuncs.com/syx/web-11.png",
      "https://mengyaxiang.oss-cn-hangzhou.aliyuncs.com/syx/web-12.png"
    ],
    coreFunctions: {
      title: "核心功能",
      items: [
        "经营诊断：提供资源评估（椅效/人效/利用率）与就诊分析报表。",
        "财务洞察：分析成本趋势、收入结构及来源营收，支持多维聚合。",
        "来源深度分析：针对二级来源的初复诊、营收、转化周期深度挖掘。",
        "数据导入引擎：实现经营数据批量导入，含凭证申请、校验及智能匹配。",
        "成本管理：支持月度成本汇总查询与批量录入，内置冲突检测。"
      ]
    },
    challenges: {
      title: "难点攻克",
      items: [
        "聚合口径统一：解决多表聚合时权限过滤与时间范围筛选的一致性难题。",
        "复杂结构解析：实现MySQL JSON字段深度解析与多月份数据聚合。",
        "导出扁平化：攻克嵌套对象展开为Excel固定列，兼容字典动态变化。"
      ]
    }
  },
  {
    id: "api",
    title: "第三方接口",
    icon: Server,
    images: [
      "https://mengyaxiang.oss-cn-hangzhou.aliyuncs.com/syx/web-17.png",
      "https://mengyaxiang.oss-cn-hangzhou.aliyuncs.com/syx/web-18.png"
    ],
    coreFunctions: {
      title: "核心功能",
      items: [
        "开放查询能力：开放门店、服务及库存查询，内置参数校验与上限控制。",
        "预约写入能力：提供标准预约接口，完整记录API调用日志。",
        "开发者管理：实现应用管理、密钥加密存储与重置。",
        "监控与审计：提供日志检索导出与健康检查接口（Health Check）。"
      ]
    },
    challenges: {
      title: "难点攻克",
      items: [
        "安全边界隔离：配置独立安全过滤链，区分强制认证与匿名访问。",
        "防重放与认证：支持“签名版”与“简易令牌版”双重认证模式。",
        "可观测性建设：利用Redis缓存与AOP切面统一采集请求摘要与耗时。"
      ]
    }
  },
  {
    id: "operations",
    title: "运营中心",
    icon: Settings2,
    coreFunctions: {
      title: "核心功能",
      items: [
        "智能数据核算：构建全维度的运营数据计算引擎，精准计算门店合同范围内的本期与本月运营数据。",
        "自动化业务驱动：实现“数据-流程”的智能联动，基于计算结果自动触发续费商机、达标判定、到期流转及待续费状态变更。"
      ]
    },
    challenges: {
      title: "难点攻克",
      items: [
        "事件驱动流转：攻克复杂业务场景下的逻辑判定难题，确保自动发起续费商机与状态流转（如达标/待交付）的准确性与时序一致性。",
        "分层计算优化：设计依赖式分层计算架构，通过上层复用底层结果消除冗余计算，大幅提升海量数据下的处理效率。"
      ]
    }
  },
  {
    id: "user",
    title: "用户管理",
    icon: Users,
    coreFunctions: {
      title: "核心功能",
      items: [
        "小程序认证：实现微信登录、用户创建、JWT生成及信息补全。",
        "信息治理：支持信息更新与头像云端存储（相对路径/自动补全）。",
        "一键登录：集成手机号一键登录，含解密与凭证校验。",
        "文件服务：提供分场景文件上传，内置大小限制与安全校验。",
        "管理端协同：后台支持用户列表管理，支撑预约系统数据。"
      ]
    },
    challenges: {
      title: "难点攻克",
      items: [
        "双重认证隔离：实现小程序专用JWT与Redis隔离，配置独立过滤链。",
        "令牌生命周期：自定义小程序令牌过期续期逻辑，与全局策略保持一致。",
        "隐私保护：规范用户敏感数据（OpenID/手机号）的导出脱敏与解密。"
      ]
    }
  }
];