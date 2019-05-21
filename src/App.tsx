import React from 'react'
import './App.scss'

const App: React.FC = () => {
	const logoMoovin =
		'https://cdn.moovin.com.br/project/manager-panel/img/logo-moovin.svg'

	return (
		<div className='App'>
			<img alt='Logo da Moovin' src={logoMoovin} />
		</div>
	)
}

export default App
