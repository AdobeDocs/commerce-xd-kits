import remarkHeadingId from "remark-heading-id";
import remarkValidateLinks from "remark-validate-links";
import remarkFrontmatter from "remark-frontmatter";
import remarkLintFrontmatterSchema from "remark-lint-frontmatter-schema";
import remarkLintNoDeadUrls from "remark-lint-no-dead-urls";

const remarkConfig = {
	plugins: [
		remarkHeadingId,
		remarkValidateLinks,
		remarkFrontmatter,
		[
			remarkLintFrontmatterSchema,
			{
				schemas: {
					/* One schema for many files */
					"./.github/linters/metadata.schema.yml": [
						/* Support glob patterns ———v */
						"./src/pages/**/*.md",
					],
				},
			},
		],
		[
			remarkLintNoDeadUrls,
			{
				skipUrlPatterns: [
					// "https://www.php.net",
					// "https://www.adobe.com/products/xd/learn/get-started-xd-design.html",
					// "https://www.adobe.com/products/xd/learn/get-started-xd-prototype.html",
					// "https://www.adobe.com/products/xd/learn/get-started-xd-components-libraries.html",
					// "https://www.adobe.com/products/xd/learn/get-started-xd-collaboration.html",
					// "https://www.adobe.com/products/xd/learn/design/layout/ecommerce-website-design.html",
					// "https://helpx.adobe.com/xd/help/access-ui-kits.html"
				]
			}
		]
	],
};
export default remarkConfig;
