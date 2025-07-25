import type { FunctionComponent } from "../../common/types";

const EmailIcon = ({
	size = 20,
	color = "currentColor",
}: {
	size?: number;
	color?: string;
}): FunctionComponent => (
	<svg
		area-hidden="true"
		fill={color}
		height={size}
		viewBox="0 0 20 20"
		width={size}
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			d="M2.50002 2.5H17.5C17.9603 2.5 18.3334 2.8731 18.3334 3.33333V16.6667C18.3334 17.1269 17.9603 17.5 17.5 17.5H2.50002C2.03979 17.5 1.66669 17.1269 1.66669 16.6667V3.33333C1.66669 2.8731 2.03979 2.5 2.50002 2.5ZM16.6667 6.0316L10.0599 11.9483L3.33335 6.01328V15.8333H16.6667V6.0316ZM3.75957 4.16667L10.0516 9.71833L16.2509 4.16667H3.75957Z"
			fill="currentColor"
		/>
	</svg>
);

export default EmailIcon;
