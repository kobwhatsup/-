const cases = [
	{
		id: "1",
		title: "邻里纠纷调解案例分析",
		description: "某小区两户居民因噪音问题产生纠纷，经过调解员耐心调解最终达成和解。",
		solution: "1. 了解双方诉求\n2. 分析问题根源\n3. 提出合理建议\n4. 促成达成协议",
		category: "邻里纠纷",
		createdAt: "2023-12-01T00:00:00.000Z",
		updatedAt: "2023-12-01T00:00:00.000Z"
	},
	{
		id: "2",
		title: "物业服务纠纷调解实录",
		description: "业主与物业公司因服务质量问题发生争议，通过调解化解矛盾。",
		solution: "1. 核实服务标准\n2. 明确责任界限\n3. 协商解决方案\n4. 签订调解协议",
		category: "物业纠纷",
		createdAt: "2023-11-28T00:00:00.000Z",
		updatedAt: "2023-11-28T00:00:00.000Z"
	}
];
const casesData = {
	cases: cases
};

async function getLatestCases(limit = 3) {
  return casesData.cases.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()).slice(0, limit);
}
async function getCaseById(id) {
  return casesData.cases.find((case_) => case_.id === id) || null;
}

export { getLatestCases as a, getCaseById as g };
