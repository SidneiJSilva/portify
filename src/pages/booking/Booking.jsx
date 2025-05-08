import Navigator from "../../components/ui/Navigator";
import ServicesList from "./ServicesList";

export default function Booking() {
	return (
		<div className="p-4">
			<Navigator label="Home" to="/" />

			<div className="mt-4">
				<ServicesList />
			</div>
		</div>
	);
}
