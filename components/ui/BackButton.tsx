"use client";

import { useRouter } from "next/navigation";
import { css } from "@/styled-system/css";

/**
 * ブラウザ履歴で前のページに戻るボタン
 */
export function BackButton() {
	const router = useRouter();

	return (
		<button
			type="button"
			onClick={() => router.back()}
			className={css({
				alignSelf: "flex-start",
				color: "fg.muted",
				fontSize: "sm",
				textDecoration: "none",
				transition: "color 0.2s",
				cursor: "pointer",
				background: "none",
				border: "none",
				padding: "0",
				_hover: {
					color: "fg.default",
				},
			})}
		>
			← 戻る
		</button>
	);
}
