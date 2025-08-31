import { Client } from "@notionhq/client";
import dotenv from "dotenv";

dotenv.config();

const notion = new Client({ auth: process.env.NOTION_TOKEN });

async function main() {
	const databaseId = process.env.NOTION_DB_ID;

	if (!databaseId) {
		throw new Error("NOTION_DB_ID is not set");
	}

	const dbResponse = await notion.databases.query({
		database_id: databaseId,
	});

	// console.log(dbResponse);
	// console.log(dbResponse.results);

	for (const page of dbResponse.results) {
		const pageId = page.id;
		const title = (page as any).properties.Title.title[0].text.content;
		console.log(title);
	}
}

main().catch((error) => console.error(error));
