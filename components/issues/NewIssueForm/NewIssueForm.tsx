"use client";
import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { type IssuesFormValues, issueSchema } from "../validation/issueSchema";
import { FormSuccess } from "@/components/ui/FormSuccess";
import { FormError } from "@/components/ui/FormError";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";

function NewIssueForm() {
	const [isPending, startTransition] = useTransition();
	const [error, setError] = useState<string | undefined>();

	const [success, setSuccess] = useState<string | undefined>();
	const {
		register,
		handleSubmit,
		formState: { errors, isDirty, isSubmitting },
	} = useForm<IssuesFormValues>({
		resolver: zodResolver(issueSchema, {}, { raw: true }),
		defaultValues: {
			title: "",
			description: "",
		},
	});

	const handleCreateNewIssue = (values: IssuesFormValues) => {
		console.log(values);
		// startTransition(() => {
		// 	settings(values)
		// 		.then((data) => {
		// 			if (data.error) {
		// 				setError(data.error);
		// 			}
		// 			if (data.success) {
		// 				// run function
		// 				setSuccess(data.success);
		// 			}
		// 		})
		// 		.catch(() => setError("Something went wrong!"));
		// });
	};

	return (
		<>
			<form autoComplete="off" noValidate onSubmit={handleSubmit(handleCreateNewIssue)}>
				<div className="mb-14 flex w-full flex-col gap-[3rem]">
					<Input
						label="Your issue title"
						type="text"
						className="w-full border-border-input-light bg-transparent placeholder-secondary"
						placeholder="Issue title"
						{...register("title")}
						error={errors.title}
					/>
					<Textarea
						label="Your issue description"
						className="border-border-input-light bg-transparent placeholder-secondary"
						placeholder="Issue description"
						{...register("description")}
						error={errors.description}
					/>
				</div>
				<div className="mb-8">
					<FormError message={error} />
					<FormSuccess message={success} />
				</div>
				<div className="mb-8">
					<Button
						type="submit"
						size="lg"
						disabled={!isDirty || isSubmitting || isPending}
						className="w-full bg-dark-green text-white"
					>
						Create new issue
					</Button>
				</div>
			</form>
		</>
	);
}

export { NewIssueForm };
