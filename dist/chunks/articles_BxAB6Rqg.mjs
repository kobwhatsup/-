const articles = [
	{
		id: "1",
		title: "2024年度调解员资格认证工作启动",
		content: "为进一步规范调解员队伍建设，提升调解工作专业化水平，现就2024年度调解员资格认证工作相关事项通知如下...",
		category: "通知公告",
		createdAt: "2023-12-08T00:00:00.000Z",
		updatedAt: "2023-12-08T00:00:00.000Z"
	},
	{
		id: "2",
		title: "全国调解工作会议在京召开",
		content: "会议总结了2023年度全国调解工作情况，部署2024年重点任务。强调要进一步发挥人民调解在基层社会治理中的重要作用...",
		category: "行业动态",
		createdAt: "2023-12-05T00:00:00.000Z",
		updatedAt: "2023-12-05T00:00:00.000Z"
	}
];
const articlesData = {
	articles: articles
};

async function getLatestArticles(limit = 3) {
  return articlesData.articles.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()).slice(0, limit);
}
async function getArticlesByCategory(category) {
  return articlesData.articles.filter((article) => article.category === category).sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
}
async function getArticleById(id) {
  return articlesData.articles.find((article) => article.id === id) || null;
}

export { getArticlesByCategory as a, getLatestArticles as b, getArticleById as g };
