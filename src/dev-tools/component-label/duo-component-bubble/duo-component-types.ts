import { CardProps } from '@bit/bit.base-ui.surfaces.card';
//@ts-ignore
import BitNameId from '@bit/bit.javascript.component.id';

export type DuoComponentBubbleProps = {
	bitId: BitNameId;
	fullScopeName?: boolean;
} & CardProps;

export type ScopeBubbleProps = {
	bitId: BitNameId;
	fullScopeName?: boolean;
} & React.AnchorHTMLAttributes<HTMLAnchorElement>;

export type ComponentBubbleProps = {
	bitId: BitNameId;
} & React.AnchorHTMLAttributes<HTMLAnchorElement>;
