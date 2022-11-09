import React from 'react'

import { ItemContainer } from './styles';

function ItemRepo({repo, handleRemoveRepo}) {

  const handleRemove = () => {
    handleRemoveRepo(repo.id)
  }

  return (
    <ItemContainer onClick={handleRemove}>
      <div className='repoMain'>
        <div className='repoItensInfo'>
          <h3>{repo.name}</h3>
          <p>{repo.full_name}</p>
        </div>
        <div className='repoItens'>
          <a href={repo.owner.html_url} target="_blank"> <img src={repo.owner.avatar_url} title="Abrir perfil do criador" /> </a>
          <p>{repo.owner.login}</p>
        </div>
        <div className='repoItens'>
          <button>
            <a href={repo.html_url} target="_blank"> <img src="./list.png" title="Visitar o repositório" /> </a>
          </button><br />
          <button rel="noreferrer" className="remover">
            <img src="./trash.png" title="Remover repositório" />
          </button>
        </div>
      </div>

      <hr />
    </ItemContainer>
  )
}

export default ItemRepo;
