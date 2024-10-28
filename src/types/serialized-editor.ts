export type SerializedLexicalNode = {
	children?: SerializedLexicalNode[];
	direction: string;
	format: number;
	indent?: string | number;
	type: string;
	version: number;
	style?: string;
	mode?: string;
	text?: string;
	attributes: {
		url?: string;
		text?: string;
	};
	[other: string]: unknown;
};

export type SerializedLexicalEditorState = {
	root: {
		type: string;
		format: string;
		indent: number;
		version: number;
		children: SerializedLexicalNode[];
	};
};

export interface SerializedLexicalChildNode {
	type: 'paragraph' | 'component' | 'tag' | 'heading' | 'list' | 'horizontalrule' | 'link';
	blockType?: string;
	tag?: unknown;
	props?: Record<string, unknown>;
	content?: SerializedLexicalChildNode[] | string;
	listType?: 'number' | 'bullet' | 'check';
	checked?: boolean;
}
