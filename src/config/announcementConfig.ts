import type { AnnouncementConfig } from "../types/announcementConfig";

export const announcementConfig: AnnouncementConfig = {
	// 公告标题
	title: "低语",

	// 公告内容
	content: "天之锁永系天与地，而这里系着文字与记忆。欢迎来到乌鲁克的数字荒原。",

	// 是否允许用户关闭公告
	closable: true,

	link: {
		// 启用链接
		enable: true,
		// 链接文本
		text: "关于我",
		// 链接 URL
		url: "/about/",
		// 内部链接
		external: false,
	},
};
