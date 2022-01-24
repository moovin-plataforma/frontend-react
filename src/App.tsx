import React from 'react'
import './App.scss'
import Table  from './components/Table'

const App: React.FC = () => {
	const logoMoovin =
		'https://cdn.moovin.com.br/project/manager-panel/img/logo-moovin.svg'
	return (
		<div>
			<header>Logo Moovin</header>
			<p>Últimas postagens</p>
			<Table />
		</div>
	)
}

export default App
