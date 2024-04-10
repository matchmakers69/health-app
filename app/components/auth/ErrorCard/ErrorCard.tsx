import { Card } from "../../ui/Card";
import { CardFooter } from "../../ui/Card/CardFooter";
import { CardHeader } from "../../ui/Card/CardHeader";
import { Header } from "../../ui/Card/Header";
import { BackButton } from "../BackButton";
import { pagesText } from "@/lib/appData";
import { routes } from "@/lib/routes";

function ErrorCard() {
	return (
		<Card className="mx-auto w-full max-w-[38rem] sm:max-w-[50rem] md:max-w-[60rem] lg:max-w-[70rem]">
			<CardHeader>
				<Header label={pagesText.AUTH_PAGES.ERROR.cardTitle} />
			</CardHeader>

			<CardFooter>
				<BackButton label={pagesText.AUTH_PAGES.ERROR.backButtonLabel} href={routes.LOGIN} />
			</CardFooter>
		</Card>
	);
}

export { ErrorCard };
