const laws = [
	{
		id: "1",
		title: "《人民调解法》最新修订版",
		content: "为了规范人民调解工作，预防和化解矛盾纠纷，维护社会和谐稳定，根据宪法，制定本法...",
		summary: "《人民调解法》的最新修订版本，明确了调解员的职责和权利。",
		effectiveAt: "2023-12-01T00:00:00.000Z",
		category: "调解法规",
		createdAt: "2023-11-15T00:00:00.000Z",
		updatedAt: "2023-12-01T00:00:00.000Z"
	},
	{
		id: "2",
		title: "关于加强人民调解工作的指导意见",
		content: "为进一步加强人民调解工作，提高调解工作质量和效率，特制定本指导意见...",
		summary: "最新的人民调解工作指导意见，为调解工作提供具体指导。",
		effectiveAt: "2023-11-01T00:00:00.000Z",
		category: "政策文件",
		createdAt: "2023-10-15T00:00:00.000Z",
		updatedAt: "2023-11-01T00:00:00.000Z"
	},
	{
		id: "3",
		title: "调解员职业道德规范",
		content: "调解员应当遵守职业道德，坚持公平公正，维护当事人合法权益...",
		summary: "规范调解员职业行为，提升职业道德水平。",
		effectiveAt: "2023-10-01T00:00:00.000Z",
		category: "职业规范",
		createdAt: "2023-09-15T00:00:00.000Z",
		updatedAt: "2023-10-01T00:00:00.000Z"
	}
];
const lawsData = {
	laws: laws
};

async function getLatestLaws(limit = 10) {
  return lawsData.laws.sort((a, b) => new Date(b.effectiveAt).getTime() - new Date(a.effectiveAt).getTime()).slice(0, limit);
}
async function getLawById(id) {
  return lawsData.laws.find((law) => law.id === id) || null;
}

export { getLatestLaws as a, getLawById as g };
