import React, {useState, useEffect} from 'react'
import './App.css'


const App: React.FC = () => {
const [listagem, setListagem] =  useState<any[]>([])
const [pagination, setPagination] =  useState<any[]>([])
const [page, setPage] = useState<number>(1)

const voltar = page - 1
const avançar = page + 1

useEffect(() => {
 
  fetch(`https://gorest.co.in/public/v1/posts?page=${page}`,
	{	
		headers: {
      'Authorization': '32076aa84dcb8091eb0e9884c2f8235943c02a4ae061304baac1a68969035fee',
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    }})
    .then((respostadoServidor ) => respostadoServidor.json())
    .then((respostaCompleta) => {setListagem(respostaCompleta.data); 
		setPagination(respostaCompleta.meta.pagination)}
    )   

}, [page]);  


	const logoMoovin =
		'https://www.moovin.com.br/wp-content/uploads/2020/12/logo-roda.png'

	return (
		<>
		<div className='App'>
			<img className= 'ImgLogo' alt='Logo da Moovin' src={logoMoovin} />
		</div>
		<div className='BodyTable'>
		<p className='TitleforPost'>  Últimas Postagens </p>
		<table className='Table'>	
			<tr>
			<th className='Title' >  Título </th>	
			<th className='Title'> Conteúdo </th>  
			</tr> 
			
		{listagem.map((item) => 
		<tr>
			<td className='BodyText' >  {item.title} </td>
			<td className='BodyText' >  {item.body} </td>
		</tr>)} 
		</table>
		<ul className='Pagination'>
		{voltar > 2 ? 	<button onClick={()=> setPage(voltar)}> Anterior </button> : '' }
		{Array.from({ length: 3 })
    .map((_,index) => index + page)
		.map((page) =>
		<li> 	
		<button onClick={()=> setPage(page)}> {page} </button></li> )}
	 	<button onClick ={()=> setPage(avançar)}> Próxima </button>
</ul>
</div></>)
}

export default App
