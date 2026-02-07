/**
 * 利用規約ページ（Server Component）
 *
 * 本サービスの利用規約を条文形式で表示するページです。
 * プライバシーポリシーページと同じスタイルパターンを使用しています。
 *
 * @module app/terms/page
 */

import type { Metadata } from "next";
import { BackButton } from "@/components/ui/BackButton";
import { css } from "@/styled-system/css";

export const metadata: Metadata = {
	title: "miipa | 利用規約",
};

/**
 * 利用規約ページ
 *
 * 条文形式（第1条〜第12条）の利用規約を中央寄せカードレイアウトで表示します。
 *
 * @returns 利用規約ページ要素
 */
export default function TermsPage() {
	/** セクション共通スタイル */
	const sectionStyle = css({
		display: "flex",
		flexDirection: "column",
		gap: "2",
	});

	/** 見出しスタイル */
	const headingStyle = css({
		fontSize: "lg",
		fontWeight: "bold",
		color: "fg.default",
	});

	/** 本文スタイル */
	const textStyle = css({
		color: "fg.muted",
		fontSize: "sm",
		lineHeight: "relaxed",
	});

	/** リストスタイル */
	const listStyle = css({
		color: "fg.muted",
		fontSize: "sm",
		lineHeight: "relaxed",
		paddingLeft: "6",
		listStyleType: "disc",
		display: "flex",
		flexDirection: "column",
		gap: "1",
	});

	return (
		<div
			className={css({
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				minHeight: "100vh",
				bg: "bg.canvas",
				p: "4",
			})}
		>
			<div
				className={css({
					display: "flex",
					flexDirection: "column",
					gap: "6",
					p: "8",
					bg: "bg.default",
					borderRadius: "xl",
					border: "1px solid",
					borderColor: "border.default",
					boxShadow: "lg",
					maxWidth: "2xl",
					width: "full",
				})}
			>
				{/* 前のページに戻る */}
				<BackButton />

				{/* タイトル */}
				<div
					className={css({
						display: "flex",
						flexDirection: "column",
						gap: "1",
					})}
				>
					<h1
						className={css({
							fontSize: "2xl",
							fontWeight: "bold",
							color: "fg.default",
						})}
					>
						利用規約
					</h1>
					<p className={css({ color: "fg.muted", fontSize: "xs" })}>
						最終更新日: 2026年2月8日
					</p>
				</div>

				{/* 前文 */}
				<div className={sectionStyle}>
					<p className={textStyle}>
						この利用規約（以下「本規約」といいます）は、合同会社Ignission（以下「当社」といいます）が提供するmiipa（以下「本サービス」といいます）の利用条件を定めるものです。ユーザーの皆さま（以下「ユーザー」といいます）は、本規約に同意のうえ、本サービスをご利用いただきます。
					</p>
				</div>

				{/* 第1条 アカウントおよび利用資格 */}
				<div className={sectionStyle}>
					<h2 className={headingStyle}>第1条 アカウントおよび利用資格</h2>
					<ul className={listStyle}>
						<li>
							本サービスの利用には、Googleアカウントによる認証が必要です。
						</li>
						<li>
							ユーザーは、認証に使用するアカウント情報が正確かつ最新であることを維持する義務を負います。
						</li>
						<li>
							ユーザーは、自己のアカウントを第三者に利用させ、または貸与、譲渡、売買その他の処分をしてはなりません。
						</li>
						<li>
							アカウントの管理不十分、使用上の過誤、または第三者の不正使用等によって生じた損害について、当社は一切の責任を負いません。
						</li>
					</ul>
				</div>

				{/* 第2条 サービスの内容 */}
				<div className={sectionStyle}>
					<h2 className={headingStyle}>第2条 サービスの内容</h2>
					<p className={textStyle}>
						本サービスは、以下の機能を提供するWebアプリケーションです。
					</p>
					<ul className={listStyle}>
						<li>Googleカレンダーとの連携による予定の統合表示</li>
						<li>AIアシスタントによるカレンダーデータの分析および情報提供</li>
						<li>
							カレンダーデータへの読み取り専用アクセス（データの変更・削除は行いません）
						</li>
					</ul>
					<p className={textStyle}>
						当社は、本サービスの内容を予告なく変更、追加、または廃止することができるものとします。これによりユーザーに生じた損害について、当社は一切の責任を負いません。
					</p>
				</div>

				{/* 第3条 サービス利用許諾 */}
				<div className={sectionStyle}>
					<h2 className={headingStyle}>第3条 サービス利用許諾</h2>
					<ul className={listStyle}>
						<li>
							当社は、ユーザーに対し、本規約に従い、本サービスを利用するための非独占的かつ取消可能な利用許諾を付与します。
						</li>
						<li>
							ユーザーは、本サービスのソフトウェアについて、リバースエンジニアリング、逆コンパイル、逆アセンブルその他これらに類する行為を行ってはなりません。
						</li>
						<li>
							ユーザーは、本サービスを第三者に再販売、再配布、またはサブライセンスしてはなりません。
						</li>
					</ul>
				</div>

				{/* 第4条 ユーザーコンテンツおよび知的財産権 */}
				<div className={sectionStyle}>
					<h2 className={headingStyle}>
						第4条 ユーザーコンテンツおよび知的財産権
					</h2>
					<ul className={listStyle}>
						<li>
							本サービスを通じてアクセスされるカレンダーデータの権利は、ユーザーに帰属します。当社は、本サービスの提供に必要な範囲でのみ当該データを利用します。
						</li>
						<li>
							本サービスに関するソフトウェア、デザイン、ロゴ、その他すべての知的財産権は当社に帰属します。
						</li>
						<li>
							本規約に基づく利用許諾は、当社の知的財産権の譲渡を意味するものではありません。
						</li>
					</ul>
				</div>

				{/* 第5条 禁止行為 */}
				<div className={sectionStyle}>
					<h2 className={headingStyle}>第5条 禁止行為</h2>
					<p className={textStyle}>
						ユーザーは、本サービスの利用にあたり、以下の行為を行ってはなりません。
					</p>
					<ul className={listStyle}>
						<li>法令または公序良俗に違反する行為</li>
						<li>
							本サービスのサーバーまたはネットワークに対する不正アクセス、過度な負荷をかける行為
						</li>
						<li>本サービスの運営を妨害し、または妨害するおそれのある行為</li>
						<li>他のユーザーまたは第三者の権利を侵害する行為</li>
						<li>一人のユーザーが複数のアカウントを作成する行為</li>
						<li>
							自動化されたスクリプト等を用いて本サービスにアクセスする行為
						</li>
						<li>その他、当社が不適切と合理的に判断する行為</li>
					</ul>
				</div>

				{/* 第6条 プライバシー */}
				<div className={sectionStyle}>
					<h2 className={headingStyle}>第6条 プライバシー</h2>
					<p className={textStyle}>
						ユーザーの個人情報の取扱いについては、当社が別途定める
						<a
							href="/privacy"
							className={css({
								color: "accent.default",
								textDecoration: "underline",
								_hover: { color: "accent.emphasized" },
							})}
						>
							プライバシーポリシー
						</a>
						に従います。ユーザーは、本サービスの利用に際し、プライバシーポリシーに同意するものとします。
					</p>
				</div>

				{/* 第7条 解約およびサービス停止 */}
				<div className={sectionStyle}>
					<h2 className={headingStyle}>第7条 解約およびサービス停止</h2>
					<ul className={listStyle}>
						<li>
							当社は、ユーザーが本規約に違反した場合、事前の通知なく、当該ユーザーのアカウントを停止または削除することができるものとします。
						</li>
						<li>
							ユーザーは、いつでも本サービスの利用を中止し、アカウントの削除を当社に申し出ることができます。
						</li>
						<li>
							アカウント削除後、当社は当該ユーザーのデータを合理的な期間内に削除します。ただし、法令上の保存義務がある場合はこの限りではありません。
						</li>
					</ul>
				</div>

				{/* 第8条 免責事項 */}
				<div className={sectionStyle}>
					<h2 className={headingStyle}>第8条 免責事項</h2>
					<ul className={listStyle}>
						<li>
							本サービスは「現状有姿」で提供されます。当社は、本サービスに関して、明示的または黙示的を問わず、商品性、特定目的への適合性、正確性、完全性、信頼性その他いかなる保証も行いません。
						</li>
						<li>
							AIアシスタントによる分析結果は参考情報であり、その正確性、完全性を保証するものではありません。ユーザーは、AIの出力に基づく判断および行動について、自己の責任で行うものとします。
						</li>
						<li>
							天災地変、戦争、テロ、暴動、法令の改正、政府機関の命令、通信回線の障害、その他当社の合理的な支配を超える不可抗力により生じた損害について、当社は一切の責任を負いません。
						</li>
						<li>
							本サービスの中断、停止、終了、データの喪失、バグその他本サービスに関連してユーザーに生じた損害について、当社の故意または重過失による場合を除き、当社は一切の責任を負いません。
						</li>
					</ul>
				</div>

				{/* 第9条 責任の制限 */}
				<div className={sectionStyle}>
					<h2 className={headingStyle}>第9条 責任の制限</h2>
					<p className={textStyle}>
						当社がユーザーに対して損害賠償責任を負う場合であっても、当社の賠償責任は、直接かつ現実に生じた通常の損害に限るものとし、逸失利益、間接損害、特別損害、偶発的損害、結果的損害その他の損害については、予見の有無を問わず、一切の責任を負いません。なお、本サービスは無料で提供されるため、損害賠償の上限額はゼロ円とします。
					</p>
				</div>

				{/* 第10条 規約変更 */}
				<div className={sectionStyle}>
					<h2 className={headingStyle}>第10条 規約変更</h2>
					<ul className={listStyle}>
						<li>
							当社は、必要に応じて本規約を変更することができるものとします。変更後の規約は、本サービス上への掲載をもって効力を生じます。
						</li>
						<li>
							規約変更後にユーザーが本サービスの利用を継続した場合、当該ユーザーは変更後の規約に同意したものとみなします。
						</li>
					</ul>
				</div>

				{/* 第11条 準拠法 */}
				<div className={sectionStyle}>
					<h2 className={headingStyle}>第11条 準拠法</h2>
					<p className={textStyle}>
						本規約の解釈および適用は、日本法に準拠するものとします。本規約に関する紛争が生じた場合、東京地方裁判所を第一審の専属的合意管轄裁判所とします。
					</p>
				</div>

				{/* 第12条 お問い合わせ */}
				<div className={sectionStyle}>
					<h2 className={headingStyle}>第12条 お問い合わせ</h2>
					<p className={textStyle}>
						本規約に関するお問い合わせは、以下の連絡先までお願いいたします。
					</p>
					<p className={textStyle}>
						合同会社Ignission
						<br />
						メール:{" "}
						<a
							href="mailto:miipa@ignission.tech"
							className={css({
								color: "accent.default",
								textDecoration: "underline",
								_hover: { color: "accent.emphasized" },
							})}
						>
							miipa@ignission.tech
						</a>
					</p>
				</div>
			</div>
		</div>
	);
}
