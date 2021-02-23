function QuestionBalloon({ author }) {
	return (
		<div>
			<div className="avatar">
				<img src={author.avatarURL} alt="avatar" width="256" height="256" />
			</div>
			<div style={{ padding: '20px' }}>
				<p className="nes-balloon from-left nes-pointer" style={{ fontSize: '125%' }}>
					@{author.name}: Would you rather...
				</p>
			</div>
		</div>
	);
}

export default QuestionBalloon;
