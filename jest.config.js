// 2.jest.config.js 파일을 작성해서 테스트에 SWC를 사용하자.
module.exports = {
	testEnvironment: 'jsdom',
	setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
	transform: {
		'^.+\\.(t|j)sx?$': [
			'@swc/jest',
			{
				jsc: {
					parser: {
						syntax: 'typescript',
						jsx: true,
						decorators: true,
					},
					transform: {
						react: {
							runtime: 'automatic',
						},
					},
				},
			},
		],
	},
	testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/dist/'],
};
