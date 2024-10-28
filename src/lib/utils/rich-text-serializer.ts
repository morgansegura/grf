import escapeHTML from 'escape-html';
import {
	IS_BOLD,
	IS_ITALIC,
	IS_STRIKETHROUGH,
	IS_UNDERLINE,
	IS_CODE,
	IS_SUBSCRIPT,
	IS_SUPERSCRIPT
} from '$src/types/rich-text-node-format';

import type {
	SerializedLexicalChildNode,
	SerializedLexicalNode
} from '$src/types/serialized-editor';

function isChecked(node: SerializedLexicalNode['children']): boolean {
	let checked;
	node?.map((item: SerializedLexicalNode) => {
		checked = item.checked;
	});

	return checked ?? false;
}

export function serialize(children: SerializedLexicalNode[]): SerializedLexicalChildNode[] {
	return children.flatMap((node: SerializedLexicalNode): SerializedLexicalChildNode[] => {
		if (node.type === 'text') {
			let content = escapeHTML(node.text);

			if (node.format & IS_BOLD) {
				content = `<strong>${content}</strong>`;
			}
			if (node.format & IS_ITALIC) {
				content = `<em>${content}</em>`;
			}
			if (node.format & IS_STRIKETHROUGH) {
				content = `<span style="text-decoration:line-through;">${content}</span>`;
			}
			if (node.format & IS_UNDERLINE) {
				content = `<span style="text-decoration:underline;">${content}</span>`;
			}
			if (node.format & IS_CODE) {
				content = `<code>${content}</code>`;
			}
			if (node.format & IS_SUBSCRIPT) {
				content = `<sub>${content}</sub>`;
			}
			if (node.format & IS_SUPERSCRIPT) {
				content = `<sup>${content}</sup>`;
			}

			return [{ type: 'paragraph', content }];
		}
		const serializedChildren = node.children ? serialize(node.children) : [];

		switch (node.type) {
			case 'heading':
				return [{ type: 'heading', tag: node.tag, props: {}, content: serializedChildren }];
			case 'list':
				if (node.listType === 'number') {
					return [
						{
							type: 'list',
							tag: 'ol',
							listType: 'number',
							content: serializedChildren
						}
					];
				} else if (node.listType === 'check') {
					console.log(node);
					return [
						{
							type: 'list',
							tag: 'ul',
							listType: 'check',
							checked: isChecked(node.children),
							content: serializedChildren
						}
					];
				} else {
					return [
						{
							type: 'list',
							tag: 'ul',
							listType: 'bullet',
							content: serializedChildren
						}
					];
				}

			case 'paragraph':
				return [
					{
						type: 'paragraph',
						blockType: 'Text',
						tag: 'p',
						props: { as: 'p', preset: 'display' },
						content: serializedChildren
					}
				];
			// case 'link':
			// 	return [
			// 		{
			// 			type: 'component',
			// 			blockType: 'button',
			// 			props: { url: node.attributes.url, text: node.attributes.text }
			// 		}
			// 	];
			case 'horizontalrule':
				return [
					{
						type: 'horizontalrule',
						blockType: 'divider',
						props: {
							appearance: 'solid'
						}
					}
				];
			default:
				return [{ type: 'paragraph', tag: 'div', content: serializedChildren }];
		}
	});
}
