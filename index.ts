import { Client } from "@notionhq/client";
import dotenv from "dotenv";

dotenv.config();

const notion = new Client({ auth: process.env.NOTION_TOKEN });

async function main() {
	const databaseId = process.env.NOTION_DB_ID;

	if (!databaseId) {
		throw new Error("NOTION_DB_ID is not set");
	}

	const response = await notion.databases.query({ database_id: databaseId });

	console.log(response);

	console.log("\n-+-+-+-+-+-+-+-+-+-\n");

	console.log(response.results);
}

main().catch((error) => console.error(error));
