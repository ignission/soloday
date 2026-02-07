/**
 * プライバシーポリシーページ（Server Component）
 *
 * miipa のプライバシーポリシーを条文形式で表示するページです。
 * 個人情報保護法に準拠した第1条〜第9条の構成です。
 *
 * @module app/privacy/page
 */

import type { Metadata } from "next";
import { BackButton } from "@/components/ui/BackButton";
import { css } from "@/styled-system/css";

export const metadata: Metadata = {
	title: "miipa | プライバシーポリシー",
};

/**
 * プライバシーポリシーページ
 *
 * サービスのプライバシーポリシーを中央寄せカードレイアウトで表示します。
 * 条文形式（第1条〜第9条）で構成されています。
 *
 * @returns プライバシーポリシーページ要素
 */
export default function PrivacyPolicyPage() {
	const sectionStyle = css({
		display: "flex",
		flexDirection: "column",
		gap: "2",
	});

	const headingStyle = css({
		fontSize: "lg",
		fontWeight: "bold",
		color: "fg.default",
	});

	const textStyle = css({
		color: "fg.muted",
		fontSize: "sm",
		lineHeight: "relaxed",
	});

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

	/* 番号付きリスト用スタイル */
	const orderedListStyle = css({
		color: "fg.muted",
		fontSize: "sm",
		lineHeight: "relaxed",
		paddingLeft: "6",
		listStyleType: "decimal",
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
						プライバシーポリシー
					</h1>
					<p className={css({ color: "fg.muted", fontSize: "xs" })}>
						最終更新日: 2026年2月8日
					</p>
				</div>

				{/* 前文 */}
				<div className={sectionStyle}>
					<p className={textStyle}>
						合同会社Ignission（以下「当社」といいます。）は、当社が提供するサービス「miipa」（以下「本サービス」といいます。）におけるユーザーのプライバシー情報の取扱いについて、以下のとおりプライバシーポリシー（以下「本ポリシー」といいます。）を定めます。
					</p>
				</div>

				{/* 第1条 プライバシー情報の定義 */}
				<div className={sectionStyle}>
					<h2 className={headingStyle}>第1条（プライバシー情報の定義）</h2>
					<p className={textStyle}>
						本ポリシーにおいて、プライバシー情報とは以下の情報を指します。
					</p>
					<ol className={orderedListStyle}>
						<li>
							「個人情報」とは、個人情報保護法にいう「個人情報」を指し、生存する個人に関する情報であって、氏名、メールアドレス、プロフィール画像その他の記述等により特定の個人を識別できる情報を指します。
						</li>
						<li>
							「履歴情報」とは、本サービスの利用に伴い記録される利用履歴、アクセスログ、操作履歴等の情報を指します。
						</li>
						<li>
							「カレンダーデータ」とは、ユーザーのGoogleカレンダーから読み取りにより取得するイベント情報（予定のタイトル、日時、場所、説明等）を指します。
						</li>
					</ol>
				</div>

				{/* 第2条 プライバシー情報の収集 */}
				<div className={sectionStyle}>
					<h2 className={headingStyle}>第2条（プライバシー情報の収集）</h2>
					<p className={textStyle}>
						当社は、本サービスの提供にあたり、以下の方法でプライバシー情報を収集します。
					</p>
					<ol className={orderedListStyle}>
						<li>
							ユーザーがGoogleアカウントでログインする際に、Googleアカウント情報（氏名、メールアドレス、プロフィール画像）を取得します。
						</li>
						<li>
							ユーザーの同意に基づき、Googleカレンダーのイベントデータを読み取り専用で取得します。
						</li>
						<li>
							本サービスの利用に伴い、アクセスログ、利用履歴等の履歴情報を自動的に収集します。
						</li>
					</ol>
					<p className={textStyle}>
						収集した情報の保持期間は以下のとおりとします。
					</p>
					<ul className={listStyle}>
						<li>アカウント情報：退会後最大1年間保持した後、削除します。</li>
						<li>
							利用ログ・アクセスログ：収集から12ヶ月間保持した後、削除します。
						</li>
						<li>
							カレンダーデータ：サービス提供に必要な期間のみ保持し、不要となった時点で速やかに削除します。
						</li>
					</ul>
				</div>

				{/* 第3条 収集・利用目的 */}
				<div className={sectionStyle}>
					<h2 className={headingStyle}>第3条（収集・利用目的）</h2>
					<p className={textStyle}>
						当社がプライバシー情報を収集・利用する目的は、以下のとおりです。
					</p>
					<ol className={orderedListStyle}>
						<li>ユーザーの認証およびアカウント管理のため</li>
						<li>カレンダーイベントの表示および複数カレンダーの統合のため</li>
						<li>AIアシスタントによるユーザーの予定分析および提案のため</li>
						<li>本サービスの品質改善および機能向上のため</li>
						<li>本サービスの不正利用の防止および対応のため</li>
						<li>ユーザーからのお問い合わせへの対応のため</li>
						<li>
							<a
								href="/terms"
								className={css({
									color: "fg.default",
									textDecoration: "underline",
									_hover: { color: "fg.muted" },
								})}
							>
								利用規約
							</a>
							に違反したユーザーの特定および利用停止措置のため
						</li>
						<li>上記に付随する業務の遂行のため</li>
					</ol>
				</div>

				{/* 第4条 安全管理措置 */}
				<div className={sectionStyle}>
					<h2 className={headingStyle}>第4条（安全管理措置）</h2>
					<p className={textStyle}>
						当社は、個人情報の漏えい、滅失またはき損の防止その他個人情報の安全管理のために、以下の措置を講じています。
					</p>
					<ol className={orderedListStyle}>
						<li>
							技術的措置：Web Crypto
							API（AES-256-GCM）を用いた認証情報およびトークンの暗号化、Cloudflare
							Workers上でのセキュアな通信環境の確保を行います。
						</li>
						<li>
							組織的措置：個人情報保護管理者（西立野
							翔磨）を選任し、個人情報の適切な管理・監督を行います。
						</li>
						<li>
							アクセス制御：個人情報へのアクセスを必要最小限に制限し、不正アクセスの防止に努めます。
						</li>
					</ol>
				</div>

				{/* 第4条の2 漏えい等の報告・通知 */}
				<div className={sectionStyle}>
					<h2 className={headingStyle}>第4条の2（漏えい等の報告・通知）</h2>
					<p className={textStyle}>
						当社は、個人情報の漏えい、滅失、き損その他の個人情報の安全の確保に係る事態が発生した場合は、速やかに事実関係を確認し、以下の対応を行います。
					</p>
					<ol className={orderedListStyle}>
						<li>
							個人情報保護委員会への報告を、事態を認識した後速やかに（原則として72時間以内に）行います。
						</li>
						<li>
							影響を受けるユーザー本人に対し、速やかに当該事態の内容を通知します。
						</li>
						<li>再発防止策を策定し、必要な措置を講じます。</li>
					</ol>
				</div>

				{/* 第5条 第三者提供 */}
				<div className={sectionStyle}>
					<h2 className={headingStyle}>第5条（第三者提供）</h2>
					<p className={textStyle}>
						当社は、ユーザーの個人情報を第三者に提供、販売、貸与することはありません。ただし、以下の場合はこの限りではありません。
					</p>
					<ol className={orderedListStyle}>
						<li>法令に基づく開示要求がある場合</li>
						<li>ユーザー本人の同意がある場合</li>
						<li>
							人の生命、身体または財産の保護のために必要がある場合であって、本人の同意を得ることが困難である場合
						</li>
						<li>
							公衆衛生の向上または児童の健全な育成の推進のために特に必要がある場合であって、本人の同意を得ることが困難である場合
						</li>
						<li>
							国の機関もしくは地方公共団体またはその委託を受けた者が法令の定める事務を遂行することに対して協力する必要がある場合
						</li>
					</ol>
				</div>

				{/* 第6条 Googleカレンダーデータの取扱い */}
				<div className={sectionStyle}>
					<h2 className={headingStyle}>
						第6条（Googleカレンダーデータの取扱い）
					</h2>
					<p className={textStyle}>
						当社は、ユーザーのGoogleカレンダーデータについて、以下のとおり取り扱います。
					</p>
					<ol className={orderedListStyle}>
						<li>
							カレンダーデータへのアクセスは読み取り専用（read-only）とし、ユーザーのカレンダーに対する変更、追加または削除は一切行いません。
						</li>
						<li>
							取得したカレンダーデータは、Cloudflare
							D1データベースにキャッシュとして暗号化保存し、サービス提供に必要な期間のみ保持します。
						</li>
						<li>
							カレンダーデータは、AIアシスタントによる予定分析およびユーザーへの情報提供の目的のみに使用します。
						</li>
						<li>
							ユーザーがアカウントを削除した場合、当該ユーザーのカレンダーデータを速やかに削除します。
						</li>
					</ol>
				</div>

				{/* 第7条 保有個人データの開示等請求 */}
				<div className={sectionStyle}>
					<h2 className={headingStyle}>第7条（保有個人データの開示等請求）</h2>
					<p className={textStyle}>
						ユーザーは、当社に対し、個人情報保護法の定めに基づき、以下の請求を行うことができます。
					</p>
					<ol className={orderedListStyle}>
						<li>保有個人データの開示の請求</li>
						<li>保有個人データの内容の訂正、追加または削除の請求</li>
						<li>保有個人データの利用の停止または消去の請求</li>
						<li>保有個人データの第三者への提供の停止の請求</li>
					</ol>
					<p className={textStyle}>
						上記の請求を行う場合は、第9条に定めるお問い合わせ窓口にご連絡ください。ご本人確認のうえ、合理的な期間内に対応いたします。
					</p>
				</div>

				{/* 第8条 プライバシーポリシーの変更 */}
				<div className={sectionStyle}>
					<h2 className={headingStyle}>第8条（プライバシーポリシーの変更）</h2>
					<ol className={orderedListStyle}>
						<li>
							当社は、法令の変更、本サービスの変更その他の事由により、本ポリシーを変更することがあります。
						</li>
						<li>
							本ポリシーを変更した場合、変更後の内容を本サービス上に掲載することにより通知します。
						</li>
						<li>
							ユーザーに重大な影響を及ぼす変更を行う場合は、変更の効力発生日の少なくとも30日前までに、本サービス上での告知またはメールにて事前に通知します。
						</li>
					</ol>
				</div>

				{/* 第9条 お問い合わせ窓口 */}
				<div className={sectionStyle}>
					<h2 className={headingStyle}>第9条（お問い合わせ窓口）</h2>
					<p className={textStyle}>
						本ポリシーに関するお問い合わせは、下記の窓口までお願いいたします。
					</p>
					<ul className={listStyle}>
						<li>運営: 合同会社Ignission</li>
						<li>個人情報保護管理者: 西立野 翔磨</li>
						<li>
							メールアドレス:{" "}
							<a
								href="mailto:miipa@ignission.tech"
								className={css({
									color: "fg.default",
									textDecoration: "underline",
									_hover: { color: "fg.muted" },
								})}
							>
								miipa@ignission.tech
							</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}
