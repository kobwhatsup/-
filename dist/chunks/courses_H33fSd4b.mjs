const courses = [
	{
		id: "1",
		title: "调解技巧进阶课程",
		description: "系统学习调解工作方法，提升调解技能和沟通能力。",
		duration: "12课时",
		price: "¥1280",
		startDate: "2024-01-15T00:00:00.000Z",
		category: "技能提升",
		createdAt: "2023-12-01T00:00:00.000Z",
		updatedAt: "2023-12-01T00:00:00.000Z"
	},
	{
		id: "2",
		title: "民商事调解实务培训",
		description: "深入学习民商事纠纷调解的法律知识和实操技巧。",
		duration: "16课时",
		price: "¥1680",
		startDate: "2024-02-01T00:00:00.000Z",
		category: "专业培训",
		createdAt: "2023-12-02T00:00:00.000Z",
		updatedAt: "2023-12-02T00:00:00.000Z"
	}
];
const coursesData = {
	courses: courses
};

async function getLatestCourses(limit = 3) {
  return coursesData.courses.sort((a, b) => new Date(b.startDate).getTime() - new Date(a.startDate).getTime()).slice(0, limit);
}

export { getLatestCourses as g };
