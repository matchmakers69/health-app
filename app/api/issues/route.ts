import { NextResponse, type NextRequest } from "next/server";
import { db } from "@/lib/db";
import { issueSchema } from "@/components/issues/validation/issueSchema";

export async function POST(request: NextRequest) {
	const body = await request.json();
	const validation = issueSchema.safeParse(body);
	if (!validation.success)
		return NextResponse.json(validation.error.errors, {
			status: 400,
		});

	const newIssue = await db.issue.create({
		data: {
			title: body.title,
			description: body.description,
		},
	});

	return NextResponse.json(newIssue, { status: 201 });
}
