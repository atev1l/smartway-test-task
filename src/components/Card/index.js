export const Card = ({
	title = '',
	thumbnail_h = null,
	thumbnail_w,
	thumbnail,
	videoUrl,
	addHandleFavourites,
	icon,
}) => {
	return (
			<div style={{
				border: '1px solid rgba(0, 0, 0, 0.1)',
				borderRadius: '6px',
				margin: '20px 0',
				maxWidth: '400px',
				display: 'flex',
				flexDirection: 'column',
				backgroundColor: '#FFFFFF'
			}}>
				<div style={{
					display: 'flex',
					justifyContent: 'start',
					margin: '20px'
				}}>
					{title}
				</div>

				<div style={{
					display: 'flex',
					width: '100%'
				}}>
					<div style={{
						display: 'flex',
						justifyContent: 'start',
						margin: '0 0 20px 20px',

					}}>
						{videoUrl ? <>
							<video src={videoUrl} controls="controls" style={{
								width: 140,
								height: 200,
								overflow: 'hidden',
								objectFit: 'cover',
							}}/>
						</> : <>
							<img
								src={thumbnail}
								alt=""
								style={{
									borderRadius: '8px',
									width: {thumbnail_w},
									height: {thumbnail_h},
									overflow: 'hidden',
									objectFit: 'cover',
								}}/>
						</>}
					</div>
					<div style={{
						width: '100%',
						display: 'flex',
						flexDirection: 'column',
						justifyContent: 'center',
						alignItems: 'center',
						paddingBottom: '30px',
						cursor: 'pointer'
					}}
					onClick={addHandleFavourites}>

						<div>

							<img alt={title} src={icon} />
						</div>
						<div>
							В избранное
						</div>
					</div>
				</div>

			</div>
	)
}
